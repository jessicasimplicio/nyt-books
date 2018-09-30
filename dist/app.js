function renderIndex(){
  return `
  <div>
    <h3>New York Times Best-Sellers</h3>
    <a href="/books" class="btn-books">Veja os livros</a>
  </div>
  `;
}

function renderBooksList(books){
  console.log(books);
  return ``;

}

function renderBook(book){
  return ``;

}

function renderFavorites() {
  let booksFavorites = JSON.parse(localStorage.getBook('books'));

  return ``;
}

