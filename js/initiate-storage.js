(function() {

var books = Books;
var MAX_BOOK_LIMIT = 5;

function initiateBasket() {
  if(!localStorage.basket) {
    localStorage.basket = JSON.stringify({});
  }
}

function initiateAmountInBasket() {
  if(!localStorage.getItem('amountInBasket')) {
    localStorage.setItem('amountInBasket', 0);
  }
}

function initiateRemaining() {
  if(!localStorage.remaining) {
    var remaining = {};
    for(var book in books) {
      remaining[book] = MAX_BOOK_LIMIT;
    }
    localStorage.remaining = JSON.stringify(remaining);
  }
}

initiateBasket();
initiateAmountInBasket();
initiateRemaining();

})();
