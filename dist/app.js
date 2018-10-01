function renderIndex(){
  return `
  <div class="index">
    <div class="text-index">
      <h1>Lista dos best-sellers do jornal</br>The New York Times</h1>
      <a href="/books" class="btn-books">Veja os livros</a>
    </div>
    <img class="img-index" src="./dist/images/book.jpg">
  </div>
  `;
}

function renderBooksList(books){
   return `
  <div class="book-area">${books.map( (book, index) =>  
    renderBooksListItem(book, index)).join("")}
  </div>
  `;

}

function renderBooksListItem(book, index){

  return `
  <div class="book-container" data-id="${index}">
    <img src="${book.book_image}">
    <p class="title-book">${book.title}</p>
    <p class="author">${book.author}</p>
    <button class="btn-favorite">Favorito</button>
    <a class="details" href="/books/${index}">Detalhes</a>
  </div>

  `
}


function renderBook(book){
  return ``;

}

function renderFavorites() {
  let booksFavorites = JSON.parse(localStorage.getBook('books'));

  return ``;
}

