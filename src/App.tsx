import { Route, Routes } from "react-router-dom";
import { FirstAccess } from "./Pages/FirstAccess/FirstAccess";
import SplashScreen from "./Pages/FirstAccess/SplashScreen";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen onFinish={() => window.location.replace("/FirstAccess")} />} />
      <Route path="/FirstAccess" element={<FirstAccess />} />
      <Route path="*" element={<h1>Página Não Encontrada - Erro 404</h1>} />
    </Routes>
  )
}

