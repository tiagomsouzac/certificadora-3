import { useState } from "react";

function PageData() {
  const [ideias, setIdeias] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const [mostrarForm, setMostrarForm] = useState(false);

  const [novaIdeia, setNovaIdeia] = useState({
    titulo: "",
    descricao: "",
    autor: "",
    status: "Nova",
  });

  const handleAddIdeia = (e) => {
    e.preventDefault();
    if (!novaIdeia.titulo || !novaIdeia.descricao || !novaIdeia.autor) {
      alert("Preencha todos os campos!");
      return;
    }

    setIdeias([...ideias, { ...novaIdeia, id: Date.now() }]);
    setNovaIdeia({ titulo: "", descricao: "", autor: "", status: "Nova" });
    setMostrarForm(false);
  };

  const handleStatusChange = (id) => {
    setIdeias((prev) =>
      prev.map((i) => {
        const fluxo = ["Nova", "Em análise", "Aprovada", "Implementada"];
        const atual = fluxo.indexOf(i.status);
        return i.id === id
          ? { ...i, status: fluxo[(atual + 1) % fluxo.length] }
          : i;
      })
    );
  };

  const ideiasFiltradas = ideias.filter((i) => {
    const termo = busca.toLowerCase();
    const combinaBusca =
      i.titulo.toLowerCase().includes(termo) ||
      i.autor.toLowerCase().includes(termo);
    const combinaStatus = filtroStatus ? i.status === filtroStatus : true;
    return combinaBusca && combinaStatus;
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-semibold mb-6">Banco de Ideias 💡</h1>

      {/* Filtros e ações */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Buscar por título ou autor..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="p-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
          className="p-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Todos os status</option>
          <option value="Nova">Nova</option>
          <option value="Em análise">Em análise</option>
          <option value="Aprovada">Aprovada</option>
          <option value="Implementada">Implementada</option>
        </select>
        <button
          onClick={() => setMostrarForm(true)}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          + Nova Ideia
        </button>
        <button
          onClick={() => alert("Gerar relatório em breve...")}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          📊 Relatórios
        </button>
      </div>

      {/* Tabela */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3">Título</th>
              <th className="p-3">Descrição</th>
              <th className="p-3">Autor</th>
              <th className="p-3">Status</th>
              <th className="p-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {ideiasFiltradas.length > 0 ? (
              ideiasFiltradas.map((i) => (
                <tr key={i.id} className="border-t border-gray-700">
                  <td className="p-3">{i.titulo}</td>
                  <td className="p-3">{i.descricao}</td>
                  <td className="p-3">{i.autor}</td>
                  <td className="p-3">{i.status}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleStatusChange(i.id)}
                      className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded mr-2"
                    >
                      Próximo status
                    </button>
                    <button
                      onClick={() =>
                        alert(
                          `Detalhes:\n\nTítulo: ${i.titulo}\nDescrição: ${i.descricao}\nAutor: ${i.autor}\nStatus: ${i.status}`
                        )
                      }
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                    >
                      Inspecionar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-400">
                  Nenhuma ideia encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Formulário de nova ideia */}
      {mostrarForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Nova Ideia 💭</h2>
            <form onSubmit={handleAddIdeia} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Título"
                value={novaIdeia.titulo}
                onChange={(e) =>
                  setNovaIdeia({ ...novaIdeia, titulo: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Descrição"
                value={novaIdeia.descricao}
                onChange={(e) =>
                  setNovaIdeia({ ...novaIdeia, descricao: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Autor"
                value={novaIdeia.autor}
                onChange={(e) =>
                  setNovaIdeia({ ...novaIdeia, autor: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  onClick={() => setMostrarForm(false)}
                  className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PageData;
