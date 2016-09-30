(function() {

var books = bookJSON,
    bookList = document.getElementById('book-list'),
    bookExample = document.getElementsByClassName('book-example')[0],
    amountInBasketField = document.querySelector('nav .amount'),
    sumField = document.querySelector('.sum .book-price');

(function renderBasket() {
  var booksInBasket = storage.getBasket();
  amountInBasketField.innerHTML = storage.getAmountInBasket();
  for(var book in booksInBasket) {
    var bookField = bookExample.cloneNode(true);
    bookField.setAttribute('id', book);
    setHTML(bookField, book);
    setRemoveButtonListener(bookField);
    bookField.style.display = 'flex';
    bookList.appendChild(bookField);
  }
  sumField.innerHTML = getSum(booksInBasket).replace('.', ',') + ' €'; 
})();

function getSum(basket) {
  var sum = 0;
  for(var book in basket) {
  sum = sum + books[book].price * storage.getCopiesInBasket(book); 
  }
  return parseFloat(sum/100).toFixed(2);
}

function setRemoveButtonListener(bookField) {
  var button = bookField.children[3];
  button.addEventListener('click', function() { 
    if(confirm('Ar tikrai?'))
      removeButtonListener(bookField); });
}

function removeButtonListener(bookField) {
  var book = bookField.getAttribute('id');
  if(storage.removeFromBasket(book) === 'last') {
    bookField.parentNode.removeChild(bookField);
  }
  amountInBasketField.innerHTML = storage.getAmountInBasket();
  sumField.innerHTML = getSum(storage.getBasket()).replace('.', ',') + ' €'; 
  setHTML(bookField, book);
}

function setHTML(bookField, book) {
  var number = storage.getCopiesInBasket(book);
  bookField.children[0].children[0].innerHTML = books[book].author;
  bookField.children[0].children[2].innerHTML = books[book].title; 
  bookField.children[0].children[3].innerHTML = number; 
  bookField.children[2].innerHTML = parseFloat(number * books[book].price/100).toFixed(2).replace('.', ',') + ' €';
}

})();
