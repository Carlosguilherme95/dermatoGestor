// Função para obter as despesas salvas do backend (GET)
function getDespesas() {
  axios
    .get("http://localhost:3000/api/despesas") // Requisição GET para pegar os dados
    .then((response) => {
      console.log("Despesas recuperadas:", response.data);
      // Exemplo de exibição de dados
      const despesas = response.data;
      const despesasList = document.getElementById("despesasList");
      despesasList.innerHTML = ""; // Limpar a lista antes de atualizar

      despesas.forEach((despesa) => {
        // Criar uma nova linha da tabela <tr>
        const listItem = document.createElement("tr");

        // Criar as células da tabela <td> e adicionar os dados
        const nomeCell = document.createElement("td");
        nomeCell.textContent = despesa.despesaNome;
        listItem.appendChild(nomeCell);

        const valorCell = document.createElement("td");
        valorCell.textContent = `R$ ${parseFloat(despesa.valor).toFixed(2)}`;
        listItem.appendChild(valorCell);

        const categoriaCell = document.createElement("td");
        categoriaCell.textContent = despesa.categoria;
        listItem.appendChild(categoriaCell);

        const dataCell = document.createElement("td");

        // Aqui, convertendo a string da data para o formato de data do JavaScript
        const dataFormatada = new Date(despesa.datalanc);

        // Verificar se a data foi validada corretamente
        if (!isNaN(dataFormatada.getTime())) {
          // Exibir a data no formato brasileiro
          dataCell.textContent = dataFormatada.toLocaleDateString("pt-BR");
        } else {
          dataCell.textContent = "Data inválida";
        }

        listItem.appendChild(dataCell);

        // Criar a célula de ações (Excluir e Modificar)
        const acoesCell = document.createElement("td");

        // Botão de Excluir
        const excluirButton = document.createElement("button");
        excluirButton.textContent = "Excluir";
        excluirButton.classList.add("btn", "btn-danger", "btn-sm");
        excluirButton.onclick = () => excluirDespesa(despesa.id_lanc_D);
        acoesCell.appendChild(excluirButton);

        // Botão de Modificar
        const modificarButton = document.createElement("button");
        modificarButton.textContent = "Modificar";
        modificarButton.classList.add("btn", "btn-warning", "btn-sm", "ms-2");
        modificarButton.onclick = () => modificarDespesa(despesa.id_lanc_D);
        acoesCell.appendChild(modificarButton);

        listItem.appendChild(acoesCell);

        // Adicionar a linha à tabela
        despesasList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Erro ao obter as despesas:", error);
      alert("Erro ao carregar as despesas.");
    });
}

// Função para excluir uma despesa
function excluirDespesa(id_lanc_D) {
  // Confirmar com o usuário antes de excluir
  if (confirm("Tem certeza de que deseja excluir esta despesa?")) {
    // Fazer a requisição DELETE para excluir a despesa
    axios
      .delete(`http://localhost:3000/api/despesas/${id_lanc_D}`)
      .then(() => {
        alert("Despesa excluída com sucesso!");
        getDespesas(); // Atualizar a lista após excluir
      })
      .catch((error) => {
        console.error("Erro ao excluir a despesa:", error);
        alert("Erro ao excluir a despesa.");
      });
  }
}

// Função para modificar uma despesa
function modificarDespesa(id) {
  alert(`Você selecionou a despesa com ID ${id} para modificar.`);
}
