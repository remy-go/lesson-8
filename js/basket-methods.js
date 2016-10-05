var Basket = (function() {

var storage = Storage;

function decreaseAmountInBasket() {
  var amount = parseInt(storage.getAmountInBasket());
  storage.setAmountInBasket(--amount);
}

function increaseAmountInBasket() {
  var amount = parseInt(storage.getAmountInBasket());
  storage.setAmountInBasket(++amount);
}

function decreaseRemaining(book) {
  var remaining = storage.getRemaining();
  if(--remaining[book] >= 0) {
    storage.updateRemaining(remaining);
  }
}

function increaseRemaining(book) {
  var remaining = storage.getRemaining();
  remaining[book]++;
  storage.updateRemaining(remaining);
}

function addToBasket(book) {
  var basket = storage.getBasket();
  if(basket.hasOwnProperty(book))
    { basket[book]++; }
  else
    { basket[book] = 1; }
  decreaseRemaining(book);
  increaseAmountInBasket();
  storage.updateBasket(basket);
}

function removeFromBasket(book) {
  var basket = storage.getBasket();
  var returnValue;
  if(--basket[book] === 0) {
    delete basket[book];
    returnValue = 'last';
  }
  increaseRemaining(book);
  decreaseAmountInBasket();
  storage.updateBasket(basket);
  return returnValue;
}

return {
  remove: removeFromBasket,
  add: addToBasket
};

})();
