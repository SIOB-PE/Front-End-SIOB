/* ===========================================================
   Arquivo: sw.js (Service Worker)
   Estratégia: Cache, falling back to Network (com cache dinâmico)
   =========================================================== */

// 1. Definições Iniciais

// O nome do seu cache. Mude este valor para 'v2', 'v3', etc., 
// sempre que você atualizar os arquivos estáticos do seu app.
const CACHE_NAME = 'minha-app-pwa-cache-v1';

// A "App Shell" - os arquivos mínimos necessários para 
// a aplicação rodar offline.
// Adicione aqui os caminhos para seus assets estáticos principais.
// Para um app Vite, '/' (index.html) é o mais crucial.
// Os outros (JS, CSS) serão cacheados dinamicamente pelo evento 'fetch'.
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json', // (Opcional, mas recomendado)
  '/src/assets/logo.svg' // (Exemplo de um asset estático)
];

// 'self' se refere ao próprio Service Worker
const sw = self; 

/* ===========================================================
   2. Ciclo de Vida: INSTALL (Instalação)
   =========================================================== */

// O evento 'install' é disparado quando o SW é registrado pela 1ª vez.
// Usamos isso para "pré-cachear" nossa App Shell.
sw.addEventListener('install', event => {
  console.log('[Service Worker] Evento: install');
  
  // event.waitUntil() espera a Promise ser resolvida antes
  // de considerar a instalação completa.
  event.waitUntil(
    caches.open(CACHE_NAME) // Abre o cache com o nome que definimos
      .then(cache => {
        console.log('[Service Worker] Pré-cacheando a App Shell...');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => {
        console.log('[Service Worker] App Shell pré-cacheada com sucesso!');
        // Força o novo Service Worker a se tornar ativo imediatamente
        // (Isso é bom para desenvolvimento)
        return sw.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Falha ao pré-cachear a App Shell:', error);
      })
  );
});

/* ===========================================================
   3. Ciclo de Vida: ACTIVATE (Ativação)
   =========================================================== */

// O evento 'activate' é disparado após o 'install'.
// É o momento perfeito para limpar caches antigos.
sw.addEventListener('activate', event => {
  console.log('[Service Worker] Evento: activate');

  // Lista de "permissão" - só queremos manter o cache com o nome ATUAL
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Se o cacheName NÃO ESTIVER na nossa lista de permissão...
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // ...então delete esse cache antigo.
            console.log(`[Service Worker] Limpando cache antigo: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
        // Garante que o SW ativado tome controle da página imediatamente
        console.log('[Service Worker] Reivindicando controle...');
        return sw.clients.claim();
    })
  );
});

/* ===========================================================
   4. Ciclo de Vida: FETCH (Interceptação de Requisições)
   =========================================================== */

// O evento 'fetch' é o coração do PWA.
// Ele intercepta CADA requisição de rede que a página faz.
sw.addEventListener('fetch', event => {
  // Ignora requisições que não são 'GET' (ex: POST, PUT)
  if (event.request.method !== 'GET') {
    console.log(`[Service Worker] Ignorando requisição não-GET: ${event.request.method}`);
    return;
  }

  // Ignora requisições de extensões do Chrome, etc.
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Aqui aplicamos a estratégia "Cache, falling back to Network"
  event.respondWith(
    caches.match(event.request) // 1. Tenta encontrar no cache
      .then(cachedResponse => {
        
        // 2A. Se ENCONTROU no cache, retorna a resposta cacheada
        if (cachedResponse) {
          console.log(`[Service Worker] Servindo do Cache: ${event.request.url}`);
          return cachedResponse;
        }

        // 2B. Se NÃO ENCONTROU, busca na rede
        console.log(`[Service Worker] Buscando da Rede: ${event.request.url}`);
        return fetch(event.request)
          .then(networkResponse => {
            
            // 3. (IMPORTANTE) Clona a resposta da rede
            // Uma resposta é um "stream" e só pode ser consumida uma vez.
            // Precisamos de uma cópia para o cache e uma para o navegador.
            const responseToCache = networkResponse.clone();

            // 4. Salva a cópia no cache para a próxima vez
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
                console.log(`[Service Worker] Cacheado dinamicamente: ${event.request.url}`);
              });

            // 5. Retorna a resposta original da rede para o navegador
            return networkResponse;
          })
          .catch(error => {
            console.error('[Service Worker] Falha no Fetch:', error);
            // (Opcional) Você pode retornar uma página offline genérica aqui
            // return caches.match('/offline.html');
          });
      })
  );
});