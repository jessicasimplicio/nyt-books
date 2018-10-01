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

  books.map((book, index) =>
    console.log(book.title + index)
  );

  return `
  <div class"book-area">${books.map( (book, index) =>  
    renderBooksListItem(book, index)).join("")}
  </div>
  `;

}

function renderBooksListItem(book, index){

  return `
  <div data-id="${index}">
  <p>${book.title}</p>
  <p>${index}</p>
  </div>

  `

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

function renderBook(book){
  return ``;

}

function renderFavorites() {
  let booksFavorites = JSON.parse(localStorage.getBook('books'));

  return ``;
}

