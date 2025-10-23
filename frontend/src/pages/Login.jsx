import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificação simples
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você pode adicionar lógica de autenticação (ex: API)
    console.log("Email:", email);
    console.log("Senha:", senha);

    // Se estiver tudo certo, navega para a página desejada
    navigate("/principal"); // Altere "/home" para a rota desejada
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1">E-mail:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label className="block mb-1">Senha:</label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="sua senha"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-2 top-2 text-sm text-blue-400 hover:text-blue-300"
              >
                {mostrarSenha ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors p-2 rounded font-semibold"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
