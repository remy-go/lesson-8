var storage = (function() {

var books = bookJSON;

(function() {
for (var book in books) {
  books[book].price = Math.round(books[book].price * 100);
}
})();


  if(!localStorage.basket) {
    localStorage.basket = JSON.stringify({});
  }

  if(!localStorage.getItem('amountInBasket')) {
    localStorage.setItem('amountInBasket', 0);
  }

  if(!localStorage.remaining) {
    var remaining = {};
    for(var book in books) {
      remaining[book] = 5;
    }
    localStorage.remaining = JSON.stringify(remaining);
  }

  function getAmountInBasket() {
    return localStorage.getItem('amountInBasket');
  }

  function decreaseAmountInBasket() {
    var amount = parseInt(localStorage.getItem('amountInBasket')) - 1;
    localStorage.setItem('amountInBasket', amount);
  }

  function increaseAmountInBasket() {
    var amount = parseInt(localStorage.getItem('amountInBasket')) + 1;
    localStorage.setItem('amountInBasket', amount);
  }

  function getBasket(item) { 
    var basket = JSON.parse(localStorage.basket);
    return item? basket[item] : basket; 
  }

  function updateBasket(basket) { 
    localStorage.basket = JSON.stringify(basket);
  }

  function getCopiesInBasket(item) {
    return getBasket(item);
  }


  function addToBasket(item) {
    var basket = getBasket();
    if(basket.hasOwnProperty(item))
      basket[item]++;
    else
      basket[item] = 1;
    decreaseRemaining(item);
    increaseCopiesInBasket(item);
    increaseAmountInBasket();
    updateBasket(basket);
  }

  function removeFromBasket(book) {
    var basket = getBasket();
    var returnValue;
    if(--basket[book] === 0) {
      delete basket[book];
      returnValue = 'last';
    }
    increaseRemaining(book);
    decreaseAmountInBasket();
    decreaseCopiesInBasket(book);
    updateBasket(basket);
    return returnValue;
  }

  function increaseCopiesInBasket(item) {
    var basket = getBasket();
    basket[item]++;
    updateBasket(basket);
  }

  function decreaseCopiesInBasket(item) {
    var basket = getBasket();
    basket[item]--;
    updateBasket(basket);
  }

  function getRemaining(item) {
    var remaining = JSON.parse(localStorage.remaining);
    return item? remaining[item] : remaining;
  }

  function updateRemaining(remaining) {
    localStorage.remaining = JSON.stringify(remaining);
  }


  function decreaseRemaining(book) {
    var remaining = JSON.parse(localStorage.remaining);
    if(remaining[book] > 0) {
      var amount = --remaining[book];
      localStorage.remaining = JSON.stringify(remaining);
      return amount;
    }
    return -1;
  }


  function increaseRemaining(book) {
    var remaining = getRemaining();
    remaining[book]++;
    updateRemaining(remaining);
    return remaining[book];
  }

  return {
    getBasket: getBasket,
    getAmountInBasket: getAmountInBasket,
    getCopiesInBasket: getCopiesInBasket,
    getRemaining: getRemaining,
    removeFromBasket: removeFromBasket,
    addToBasket: addToBasket
  };
}
)();
