
function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. você precisa digitar o nome de um jogo de FPS<p>"
      return

  }

  campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";

for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()

  if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

    resultados += `
    <div class="item-resultado">
      <h2>${dado.titulo}</h2> <!-- Usa o título correto do dado -->
      <p class="descricao-meta">${dado.descricao}</p> <!-- Usa a descrição correta do dado -->
      <a href="${dado.link}" target="_blank">Mais informações</a> <!-- Corrige o href e target -->
    </div>
  `;

  }

}

if (!resultados) {
    resultados = "<p>Nada foi encontrado<p>"
}

section.innerHTML = resultados

}







