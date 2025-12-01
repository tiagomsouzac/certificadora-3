import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Email:", email);
    console.log("Senha:", senha);

    navigate("/principal");
  };

return (
  <div
    className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/ideias-lado.jpg')" }}
  >
    {/* Overlay para dar mais contraste */}
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

    {/* Container principal */}
    <div className="relative z-10 flex items-center justify-between 
      bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl gap-10 border border-white/20"
    >
      {/* Formulário */}
      <div className="flex flex-col items-center justify-center w-72">
        <h1 className="text-2xl font-semibold mb-4 text-center text-orange-200">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
          <div>
            <label className="block mb-1 text-orange-100">E-mail:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-white/20 text-white
                outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/60"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-orange-100">Senha:</label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-2 rounded bg-white/20 text-white 
                  outline-none focus:ring-2 focus:ring-pink-400 pr-10 placeholder-white/60"
                placeholder="sua senha"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-2 top-2 text-lg"
              >
                {mostrarSenha ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 transition-colors p-2 rounded font-semibold mt-2"
          >
            Entrar
          </button>
        </form>
      </div>

      {/* Imagem lateral */}
      <img
        src="/login-side.jpg"
        alt="Login visual"
        className="w-[250px] h-auto rounded-xl border border-white/30 shadow-xl object-cover"
      />
    </div>
  </div>
);

}

export default Login;
