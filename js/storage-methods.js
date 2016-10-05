var Storage = (function() {

function getAmountInBasket() {
  var amount = localStorage.getItem('amountInBasket');
  return amount;
}

function setAmountInBasket(value) {
  localStorage.setItem('amountInBasket', value);
}
  
function getBasket() { 
  return JSON.parse(localStorage.basket);
}

function getCopiesInBasket(book) {
  return getBasket()[book];
}

function updateBasket(basket) { 
  localStorage.basket = JSON.stringify(basket);
}

function getRemaining(book) {
  return book? JSON.parse(localStorage.remaining)[book] : JSON.parse(localStorage.remaining);
}

function updateRemaining(remaining) {
  localStorage.remaining = JSON.stringify(remaining);
}

return {
  getBasket: getBasket,
  getCopiesInBasket: getCopiesInBasket,
  updateBasket: updateBasket,
  getAmountInBasket: getAmountInBasket,
  setAmountInBasket: setAmountInBasket,
  getRemaining: getRemaining,
  updateRemaining: updateRemaining
};

})();
