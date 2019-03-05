var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({ itemName: item, itemPrice: Math.floor((Math.random() * (100 - 1) + 1 ))});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
      if (cart.length === 1) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      } else {
        var newArray = [];
        for (var i = 0; i < (cart.length - 1); i++) {
          newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
        }
        var string = newArray.join(', ');
        return `In your cart, you have ${string}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
      }
    }
}

function total() {
  var prices = []
  for (var i = 0; i < cart.length; i++) {
    prices.push(cart[i].itemPrice)
  }
  return prices.reduce((a, b) => a + b) 
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
