//var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {}
 newItem[item] = Math.floor(Math.random() * (100 - 1) + 1)
 cart.push(newItem)
 
 console.log(`${item} has been added to your cart.`)
 
 return cart
}

function viewCart() {
  // write your code here
<<<<<<< HEAD
  var line = "In your cart, you have "
  
  if (cart.length >= 3) {
    var i = 0;
    for (; i < cart.length - 1; i++) {

      var name = Object.keys(cart[i])[0]

      line += `${name} at $${cart[i][name]}, `
    }
    var last = Object.keys(cart[i])[0]
    console.log(line + `and ${last} at $${cart[i][last]}.`)
=======
  var line = "In your cart, "
  if (cart.length > 2) {
    var rest = cart.join(',') + '.'
    
    console.log(line + rest)
>>>>>>> d80266e07a8733f0589f07c109429f96dfd7a01a
  } else if (cart.length === 2) {
    var item1 = Object.keys(cart[0])[0]
    var item2 = Object.keys(cart[1])[0]
    console.log(`${line}${item1} at $${cart[0][item1]} and ${item2} at $${cart[1][item2]}.`)
  } else if (cart.length === 1) {
<<<<<<< HEAD
    var temp = Object.keys(cart[0])
    console.log(`${line}${temp} at $${cart[0][temp]}.`)
=======
    var temp = cart[0]
    console.log(`${line} you have ${temp} at $${temp}.`)
>>>>>>> d80266e07a8733f0589f07c109429f96dfd7a01a
  } else {
    console.log("Your shopping cart is empty.")
  }
}


var cart1 = [{'bananna': 12}, {'apple': 1}]
function total() {
  // write your code here
  var t = 0
  for (let i = 0; i < cart.length; i++) {
<<<<<<< HEAD
    t += parseInt(Object.values(cart[i]))
=======
    var temp = cart[i]
    console.log(temp)
    t += parseInt(temp)
>>>>>>> d80266e07a8733f0589f07c109429f96dfd7a01a
  }
  
  return t
}


function removeFromCart(item) {
  // write your code here
  var flag = false
<<<<<<< HEAD
  for (let i = 0; !flag && i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
=======
  for (let i = 0; flag && i < cart.length; i++) {
    if (cart.hasOwnProperty(item)) {
      delete cart[i]
>>>>>>> d80266e07a8733f0589f07c109429f96dfd7a01a
      flag = true
    }
  }
  if (!flag) {
    console.log("That item is not in your cart.")
    
    return cart
<<<<<<< HEAD
  } else {
    return cart
=======
>>>>>>> d80266e07a8733f0589f07c109429f96dfd7a01a
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
<<<<<<< HEAD
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
=======
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`)
>>>>>>> d80266e07a8733f0589f07c109429f96dfd7a01a
    while(cart.length > 0) {
      cart.pop()
    }
  }
}
