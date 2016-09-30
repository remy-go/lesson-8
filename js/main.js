(function () {
var books = bookJSON,
  bookList = document.getElementById('book-list'),
  bookExample = document.getElementsByClassName('book-example')[0],
  displayOptionsButton = document.querySelector('nav .display-options'),
  amountInBasketField = document.querySelector('nav .amount');

(function renderBookList() { 
  for(var book in books) {
    var bookField = bookExample.cloneNode(true),
        addButton = bookField.children[3], 
        moreLess = bookField.children[1].children[4];
        additional = bookField.children[1].children[6];

    setHTML(bookField, book);
    setMoreLessListener(moreLess, additional);
    setAddToBasketListener(addButton, book);
    bookField.style.display = 'flex';
    bookList.appendChild(bookField);
  }
})();

function setMoreLessListener(moreLess, additional) {
  moreLess.addEventListener('click', function() {
    additional.classList.toggle('additional');
    moreLess.classList.toggle('less');
  });
}

function setAddToBasketListener(button, item) {
  button.addEventListener('click', function() { addToBasketListener(button, item); }); 
}

function addToBasketListener(button, item) {
  var remaining = storage.getRemaining(item);
  if(remaining > 0) {
    storage.addToBasket(item);
    button.parentNode.children[1].children[3].innerHTML = --remaining; 
  }
  amountInBasketField.innerHTML = storage.getAmountInBasket();
}

displayOptionsButton.addEventListener('click', showShorterToogle); 

function showShorterToogle() {
  var hiddenWhenShorter = document.querySelectorAll('.book-cover, .more-less, .additional');
  for(i = 0; i < hiddenWhenShorter.length; i++) {
    hiddenWhenShorter[i].classList.toggle('hidden-when-shorter');
  }
  displayOptionsButton.children[0].classList.toggle('long');
  displayOptionsButton.children[1].classList.toggle('long');
}

function setHTML(bookField, book) {
  bookField.setAttribute('id', book);
  bookField.children[0].setAttribute('src', 'images/' + books[book].image);
  bookField.children[1].children[0].innerHTML = books[book].author;
  bookField.children[1].children[2].innerHTML = books[book].title;
  bookField.children[1].children[3].innerHTML = storage.getRemaining(book);
  bookField.children[1].children[6].innerHTML = books[book].description;
  bookField.children[2].innerHTML = parseFloat(books[book].price/100).toFixed(2).replace('.', ',') + ' €';
  amountInBasketField.innerHTML = storage.getAmountInBasket();
}

})();
