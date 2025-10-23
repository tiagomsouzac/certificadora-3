import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Verificação simples
    if (!nome || !sexo || !dataNascimento || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você pode adicionar lógica para salvar no backend
    console.log("Cadastro realizado:", { nome, sexo, dataNascimento, email, senha });

    // Redireciona para o login (ou outra página)
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-semibold mb-4 text-center">Cadastro</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {/* Nome */}
          <div>
            <label className="block mb-1">Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu nome completo"
            />
          </div>

          {/* Sexo */}
          <div>
            <label className="block mb-1">Sexo:</label>
            <select
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Data de nascimento */}
          <div>
            <label className="block mb-1">Data de nascimento:</label>
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
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

          {/* Senha */}
          <div>
            <label className="block mb-1">Senha:</label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Crie uma senha"
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

          {/* Botão */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition-colors p-2 rounded font-semibold"
          >
            Registrar
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Já tem uma conta?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-400 hover:text-blue-300"
          >
            Faça login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
