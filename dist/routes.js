page('/', index);
page('/books', books);
page('/books/:bookId', book);
page('/favorites', favorites);
page();

function index() {
  $("main").html(renderIndex());
}

function books() {
  const booksNYT = getBooks();
  $('main').html(renderBooksList(booksNYT));
  //$('#favorites').html(renderFavorites());
}

function book(response) { //ONE BOOK
  const booksNYT = getBooks();
  const id = extractId(response);
  $('main').html(renderBook(booksNYT, id));
  //$('#favorites').html(renderFavorites());
}

function extractId(response){

  let regex = new RegExp(/\d+/g);
  let match = response.path.match(regex);
  return match[0];

}

function favorites(){

}

function getBooks() {

  var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
  url += '?' + $.param({'api-key': "2510fdcf0d7b4efea1a30c12c342351d"});

  let result;

  $.ajax({
    async: false,
    url,
    method: 'GET',
    error,
    crossDomain: true,
    success: function(response) {
      result = loadBooks(response);
    }
  });
  return result;

}

function loadBooks(data){
  let listNames = data.results.lists;

  let listBooks = [];
  let listCategory = listNames.map(list => list.books);

  listCategory.forEach(list => {
    list.forEach(item => { 
      listBooks.push(item);
    });
  });
  return listBooks; 
}

function error(){
  console.log("erro");
}
