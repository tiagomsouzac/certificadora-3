import { useNavigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "../src/App.css"

function App() {
  const navigate = useNavigate();


return (
  <div
    className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/ideias-lado.jpg')" }}
  >
    {/* Overlay suave com blur */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

    {/* Título */}
    <h1 className="relative z-10 text-7xl font-bold text-orange-200 mb-8 drop-shadow-xl">
      Meninas Digitais
    </h1>

    {/* Container principal com estilo igual ao login */}
    <div className="relative z-10 bg-white/10 
      backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-80 text-center
      border border-white/20"
    >

      <h2 className="text-2xl font-semibold mb-6 text-orange-100">
        Página Inicial
      </h2>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-pink-600 hover:bg-pink-700 transition-colors p-2 rounded font-semibold"
        >
          Entrar
        </button>

        <button
          onClick={() => navigate("/registrar")}
          className="bg-purple-600 hover:bg-purple-700 transition-colors p-2 rounded font-semibold"
        >
          Registrar
        </button>
      </div>
    </div>
  </div>
);


}

export default App;
