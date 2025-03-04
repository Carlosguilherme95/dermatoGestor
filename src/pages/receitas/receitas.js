document
  .getElementById("ReceitaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const receitaNome = document.getElementById("nomeReceita").value;
    const categoria = document.getElementById("categoriaReceita").value;
    const valor = document.getElementById("valor").value;
    const datalanc = document.getElementById("dataLancamento").value;
    const desc = document.getElementById("descricao").value;

    const receitaData = {
      receitaNome,
      categoria,
      valor,
      datalanc,
      desc,
    };

    // Enviar os dados para o backend ou serviço de cadastro
    axios
      .post("http://localhost:3000/api/receitas", receitaData)
      .then((response) => {
        console.log(response.data);
        alert("Usuário adicionado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar o usuário:", error);
        alert("Erro ao cadastrar o usuário.");
      });
  });
