document
  .getElementById("DespesaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos do formulário
    const despesaNome = document.getElementById("nomeDespesa").value;
    const categoria = document.getElementById("categoriaReceita").value;
    const valor = document.getElementById("valor").value;
    const datalanc = document.getElementById("dataLancamento").value;
    const desc = document.getElementById("descricao").value;

    // Verificando se todos os campos foram preenchidos corretamente
    if (!despesaNome || !categoria || !valor || !datalanc || !desc) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const despesaData = {
      categoria,
      despesaNome,
      valor,
      datalanc,
      desc,
    };

    // Enviar os dados para o backend ou serviço de cadastro via Axios
    axios
      .post("http://localhost:3000/api/despesas", despesaData)
      .then((response) => {
        console.log(response.data); // Exibe a resposta no console para verificar o sucesso
        alert("Despesa cadastrada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar a despesa:", error); // Exibe o erro no console
        alert("Erro ao cadastrar a despesa.");
      });
  });
