document.getElementById("consultarCep").addEventListener("click", function () {
  const cep = document.getElementById("cep").value.replace(/[^\d]/g, ""); // Remove tudo que não for número

  if (cep.length === 8) {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(function (response) {
        const dados = response.data;
        if (dados.erro) {
          alert("CEP não encontrado");
        } else {
          // Preenchendo os campos automaticamente
          document.getElementById("logradouro").value = dados.logradouro || "";
          document.getElementById("bairro").value = dados.bairro || "";
          document.getElementById("cidade").value = dados.localidade || "";
          document.getElementById("estado").value = dados.uf || "";
        }
      })
      .catch(function (error) {
        console.error("Erro ao consultar o CEP", error);
        alert("Erro ao consultar o CEP");
      });
  } else {
    alert("Por favor, insira um CEP válido.");
  }
});

document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cep = document.getElementById("cep").value;
    const logradouro = document.getElementById("logradouro").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const unidade = document.getElementById("unidade").value;

    const userData = {
      nome,
      sobrenome,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      cidade,
      estado,
      unidade,
    };

    // Enviar os dados para o backend ou serviço de cadastro
    axios
      .post("http://localhost:3000/api/user", userData)
      .then((response) => {
        console.log(response.data);
        alert("Usuário adicionado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar o usuário:", error);
        alert("Erro ao cadastrar o usuário.");
      });
  });
