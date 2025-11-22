import { useNavigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "../src/App.css"

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 text-center">
        <h2 className="text-2xl font-semibold mb-6">Página Inicial</h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 transition-colors p-2 rounded font-semibold"
          >
            Entrar
          </button>

          <button
            onClick={() => navigate("/registrar")}
            className="bg-green-600 hover:bg-green-700 transition-colors p-2 rounded font-semibold"
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
