function renderIndex(){
  return `
  <div class="index">
    <div class="text-index">
      <h1>Lista da semana dos best-sellers do jornal</br>The New York Times</h1>
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


function renderBook(books, id){

  let book = books[id];
  console.log(book);
  return `
  <div class=book-page>
    <img class="img-book-page" src="${book.book_image}">
    <div class="text-book">
      <p class="title">${book.title}</p>
      <p class="author">${book.author}</p>
      <p class="description">${book.description}</p>
      <p>Rank: ${book.rank}</p>
      <p>Semanas na lista: ${book.weeks_on_list}</p>
      <a href="${book.amazon_product_url}">Comprar</a>
      <button class="btn-favorite">Favorito</button>
      <p></p>
    </div>
  </div>
  `;

}

function renderFavorites() {
  let booksFavorites = JSON.parse(localStorage.getBook('books'));

  return ``;
}

