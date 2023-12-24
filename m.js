
// function addToCart(seller,id, name, price) {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   const item = {seller,id, name, price};
//   cart.push(item);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   console.log(item)
// }
function addToCart(image, id, name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = { image, id, name, price };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(item);
  

}
let userlocal = localStorage.getItem("user-name");
if (userlocal != null) {
    document.querySelector("header .cont .hid .user").innerHTML = ` hello ${userlocal}`;  
};




