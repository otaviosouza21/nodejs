const formLivro = document.querySelector(".form");
const tbody = document.querySelector(".tbody");
const salvar = document.querySelector(".salvar");
const alterar = document.querySelector(".alterar");
const formInput = document.querySelectorAll("input");
const deletar = document.querySelectorAll(".deletar");
alterar.style.display = "none";

function handleSubmit(e) {
  e.preventDefault();
  let dataLivro = {};
  formInput.forEach((input) => {
    dataLivro = { ...dataLivro, [input.name]: input.value };
    input.value = "";
  });
  postItem(dataLivro);
}

async function postItem(dataLivro) {
  const URL = "http://localhost:3000/livros";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataLivro),
  };

  try {
    const response = await fetch(URL, requestOptions);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`
      );
    }
    const responseData = await response.json();

    getItem();
    console.log("Resposta bem-sucedida:", responseData);
  } catch (error) {
    console.error("Erro durante a requisição:", error.message);
  }
}

async function getItem() {
  const URL = "http://localhost:3000/livros";

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`
      );
    }
    const responseData = await response.json();
    insereNaTabela(responseData);
    console.log("Resposta bem-sucedida:", responseData);
  } catch (error) {
    console.error("Erro durante a requisição:", error.message);
  }
}

function insereNaTabela(resultData) {
  tbody.innerHTML = "";
  resultData.forEach((data) => {
    const linha = `
        <tr>
            <td>${data.titulo}</td>
            <td>${data.preco}</td>
            <td>${data.paginas}</td>
            <td>${data.autor.nome}</td>
            <td>${data.editora.nome}</td>
            <td><button class='deletar' data-id="${data._id}" >Deletar</button></td>
            <td><button class='alterar' data-id="${data._id}" >Alterar</button></td>
        </tr>
        `;
    tbody.innerHTML += linha;
  });

  const botoesDeletar = document.querySelectorAll(".deletar");
  botoesDeletar.forEach((botao) => {
    botao.addEventListener("click", () => {
      handleDelete(botao.dataset.id);
    });
  });

  const botoesAlterar = document.querySelectorAll(".alterar");
  botoesAlterar.forEach((botao) => {
    botao.addEventListener("click", () => {
      handleAlterar(botao.dataset.id);
    });
  });
}

async function handleDelete(id) {
  const URL = `http://localhost:3000/livros/${id}`;
  const deleteHeader = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(URL, deleteHeader);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`
      );
    }
    const responseData = await response.json();
    getItem();
  } catch (error) {
    console.error("Erro durante a requisição:", error.message);
  }
}

async function handleAlterar(id) {
  const itemSelecionado = await trazerElementoEspecifico(id);
  formLivro.titulo.value = itemSelecionado.titulo;
  formLivro.preco.value = itemSelecionado.preco;
  formLivro.paginas.value = itemSelecionado.paginas;
  formLivro.autor.value = itemSelecionado.autor["_id"];
  formLivro.editora.value = itemSelecionado.editora["_id"];
  alterar.style.display = "block";
  salvar.style.display = "none";

  alterar.addEventListener("click", () => {
    const updateLivro = {};
    formInput.forEach((input) => {
      updateLivro = { ...updateLivro, [input.name]: input.value };
      input.value = "";
    });
    handlePut(updateLivro, itemSelecionado["_id"]);
  });
}

async function handlePut(updateLivro,id) {
  const URL = `http://localhost:3000/livros/${id}`
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateLivro),
  };

  try {
    const response = await fetch(URL, requestOptions);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`
      );
    }
    const responseData = await response.json();

    getItem();
    console.log("Resposta bem-sucedida:", responseData);
  } catch (error) {
    console.error("Erro durante a requisição:", error.message);
  }
}

async function trazerElementoEspecifico(id) {
  const URL = `http://localhost:3000/livros/${id}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`
      );
    }
    const responseData = await response.json();
    console.log("Resposta bem-sucedida:", responseData);
    return responseData;
  } catch (error) {
    console.error("Erro durante a requisição:", error.message);
  }
}

formLivro.addEventListener("submit", handleSubmit);
getItem();
