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

function book() { //ONE BOOK
  const book = getBook();
  $('main').html(renderBook(book));
  //$('#favorites').html(renderFavorites());
}

function favorites(){
  
}


function getBooks() {
  //event.preventDefault();

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
      console.log('retornou');
      //console.log(result);
    }
  });
  return result;

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
  //console.log(listBooks);
  console.log("hi");
  return listBooks;
 
}



function error(){
  console.log("erro");
}


/*  $.ajax({
    url,
    method: 'GET',
    error,
    crossDomain: true
  }).done(function(result) {
    result = loadBooks(result);
      console.log(result);
      return result;

  });*/