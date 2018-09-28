$(document).ready( () => {
  const btnSearch = document.getElementById("btn-busca");
  btnSearch.addEventListener("click", getBooks);
});

let listName = [];

function buscaPalavra(){
  return document.getElementById("campo-busca").value;
}

function error(){
  console.log("erro");
}

function getBooks(event) {
  event.preventDefault();

  var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
  url += '?' + $.param({'api-key': "2510fdcf0d7b4efea1a30c12c342351d"});

  $.ajax({
    url,
    method: 'GET',
    error,
    crossDomain: true
  }).done(function(result) {
    loadBooks(result);
    //console.log(result);
  });

}

function loadBooks(data){
  listNames = data.results.lists;
  //console.log(listNames);

  let listCategory = listNames.map(list => list.books); //array com lista de livros de todas categorias

  listCategory.forEach(list => {
    list.forEach(item => { 
      //console.log(item);

      showBooks(item);

    });
  });
 
}

function showBooks(item) {
  console.log(item);
  /*let showResults = document.getElementById("show-results");
  showResults.innerHTML = 
  `<div class="book-area">${docs.map(doc => 
    `<div class="book">
      <h3>${doc.books.title}</h3>
    </div>
    `).join("")}
  </div>`;*/
}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
  exibeBusca.innerHTML = 
  `<div class="book-area">${docs.map(doc => 
    `<div class="book">
      <h3>${doc.books.title}</h3>
    </div>
    `).join("")}
  </div>`;

  /*`<div class="area-noticia">${docs.map(doc => 
    `<div class="noticia">
      <h3>${doc.headline.main}</h3>
      <p>${doc.snippet}</p>
      <a href="${doc.web_url}">Link do original</a>
    </div>
    `).join("")}
  </div>`;*/
}