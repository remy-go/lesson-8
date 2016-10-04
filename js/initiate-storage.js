(function() {

var books = Books;

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
      remaining[book] = 5;
    }
    localStorage.remaining = JSON.stringify(remaining);
  }
}

initiateBasket();
initiateAmountInBasket();
initiateRemaining();

})();
