import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_URL;
function Register() {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

const handleRegister = async (e) => { // 👈 Tornar a função assíncrona
    e.preventDefault();

    e.preventDefault();

    // Verificação simples
    if (!nome || !sexo || !dataNascimento || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const userData = {
      nome,
      sexo,
      dataNascimento,
      email,
      senha,
    };

    try {
        // 2. Fazendo a requisição POST para o Back-end
        const response = await fetch(`${API_BASE_URL}/api/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        // 3. Verifica se a requisição foi bem-sucedida (status 2xx)
        if (response.ok) {
            // Sucesso no cadastro
            alert("Cadastro realizado com sucesso!");
            navigate("/login"); // Redireciona para o login
        } else {
            // Falha no cadastro (ex: usuário já existe)
            const errorData = await response.json();
            alert(`Falha no cadastro: ${errorData.message || 'Erro desconhecido'}`);
        }

    } catch (error) {
        // Erro de rede ou servidor fora do ar
        console.error("Erro ao tentar cadastrar:", error);
        alert("Não foi possível conectar ao servidor. Verifique a API.");
    }
  };

    // Aqui você pode adicionar lógica para salvar no backend
    console.log("Cadastro realizado:", { nome, sexo, dataNascimento, email, senha });

    // Redireciona para o login (ou outra página)
    navigate("/login");
  };

return (
  <div
    className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/ideias-lado.jpg')" }}
  >
    {/* Overlay suave */}
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

    {/* Container principal */}
    <div
      className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl 
                 shadow-2xl w-96 border border-white/20"
    >
      <h1 className="text-2xl font-semibold mb-6 text-center text-orange-200">
        Cadastro
      </h1>

      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        
        {/* Nome */}
        <div>
          <label className="block mb-1 text-orange-100">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 rounded bg-white/20 text-white placeholder-white/60
                       outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Seu nome completo"
          />
        </div>

        {/* Sexo */}
        <div>
          <label className="block mb-1 text-orange-100">Sexo:</label>
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            className="w-full p-2 rounded bg-white/20 text-white placeholder-white/60
                       outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        {/* Data de nascimento */}
        <div>
          <label className="block mb-1 text-orange-100">Data de nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            className="w-full p-2 rounded bg-white/20 text-white placeholder-white/60
                       outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-orange-100">E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-white/20 text-white placeholder-white/60
                       outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        {/* Senha */}
        <div>
          <label className="block mb-1 text-orange-100">Senha:</label>
          <div className="relative">
            <input
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-2 rounded bg-white/20 text-white placeholder-white/60
                         outline-none focus:ring-2 focus:ring-pink-400 pr-10"
              placeholder="Crie uma senha"
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

        {/* Botão */}
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 transition-colors p-2 rounded font-semibold mt-2"
        >
          Registrar
        </button>
      </form>

      <p className="text-sm text-center mt-4 text-white">
        Já tem uma conta?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-orange-300 hover:text-orange-200"
        >
          Faça login
        </button>
      </p>
    </div>
  </div>
);



export default Register;
