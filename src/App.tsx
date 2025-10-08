import { Route, Routes } from "react-router-dom";
import { FirstAccess } from "./Pages/FirstAccess/FirstAccess";
import SplashScreen from "./Pages/FirstAccess/SplashScreen";
import { Register } from "./Pages/Register/Register";
import { Register02 } from "./Pages/Register/Register02";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen onFinish={() => window.location.replace("/FirstAccess")} />} />
      <Route path="/FirstAccess" element={<FirstAccess />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Register-02" element={<Register02 />}/>
      <Route path="*" element={<h1>Página Não Encontrada - Erro 404</h1>} />
    </Routes>
  )
}

