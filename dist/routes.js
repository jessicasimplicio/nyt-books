page('/', index);
page('/books', books);
page('/books/:bookId', book);
page();

function index() {
  $("main").html(renderIndex());
}

async function books() {
  const booksNYT = awaitgetBooks();
  $('main').html(renderBooksList(booksNYT));
  //$('#favorites').html(renderFavorites());
}

async function book() {
  const book = await getBook();
  //$('main').html(renderBook(book));
  //$('#favorites').html(renderFavorites());
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
    crossDomain: true
  }).done(function(result) {
    result = loadBooks(result);
      console.log(result);
      return result;

  });
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