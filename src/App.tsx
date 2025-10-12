import { Route, Routes } from "react-router-dom";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import { Register } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen onFinish={() => window.location.replace("/Login")} />} />
      <Route path="/Login" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      <Route path="*" element={<h1>Página Não Encontrada - Erro 404</h1>} />
    </Routes>
  )
}

