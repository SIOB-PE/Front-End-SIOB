import { Route, Routes } from "react-router-dom";
import { FirstAccess } from "./Pages/FirstAccess/FirstAccess";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstAccess/>}/>
      <Route path="*" element={<h1>Página Não Encontrada - Erro 404</h1>} />
    </Routes>
  )
}

