function renderIndex(){
  return `
  <div>
    <h3>New York Times Best-Sellers</h3>
    <a href="/books" class="btn-books">Veja os livros</a>
  </div>
  `;
}

function renderBooksList(books){
  console.log('books');
  return ``;

}

function renderBook(book){
  return ``;

}

function renderFavorites() {
  let booksFavorites = JSON.parse(localStorage.getBook('books'));

  return ``;
}

function getBooks() {
  //event.preventDefault();

  var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
  url += '?' + $.param({'api-key': "2510fdcf0d7b4efea1a30c12c342351d"});

  let result;

  $.ajax({
    url,
    method: 'GET',
    error,
    crossDomain: true,
    success: loadBooks,

  });


  /*.done(function(result) {
      result = loadBooks(result);
        console.log(result);
        return result;

    });*/
}

function loadBooks(data){
  listNames = data.results.lists;
  //console.log(listNames);

  let listBooks = [];
  let listCategory = listNames.map(list => list.books); //array com lista de livros de todas categorias

  listCategory.forEach(list => {
    list.forEach(item => { 
      //console.log(item);

      listBooks.push(item);
    });
  });
  //showBooks(listBooks);
  console.log(listBooks);
  return listBooks;
 
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

function error(){
  console.log("erro");
}