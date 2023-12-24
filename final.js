
document.addEventListener('DOMContentLoaded', () => {
    const number = document.querySelector(".main  .asid2 .number");
     defult = 0;

    number.innerHTML = `products:${localStorage.getItem("order")}`;
    if (localStorage.getItem("order") == null) {
        number.innerHTML=`products: 0`;
    }
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
      cartItemsList.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        const listItem = document.createElement('li');
        const imagef = document.createElement('img');
         imagef.src = `${item.image}`; // استخدام مسار الصورة المحفوظ في كائن المنتج
         listItem.appendChild(imagef);
   const productid = document.createElement('div');
//  productid.innerHTML = `<p>${item.id}</p>`;
//  listItem.appendChild(productid);
 const description = document.createElement('div');
 description.innerHTML=`<p>${item.name} <p/>`
   listItem.appendChild(description);
   const pricee = document.createElement('div');
 pricee.innerHTML=`<p>${item.price} <p/>`
  listItem.appendChild(pricee)
   cartItemsList.appendChild(listItem);
  //  listItem.appendChild()

                    total += item.price;
});
  
       cartTotal.textContent = total + 5;
     }

     displayCartItems();
  
    
  
   });
   let carTotal = document.querySelector("header .total");
let homeorder = localStorage.getItem("order");
// console.log(homeorder)
// carTotal.addEventListener("click", e => {
//     window.location.href = 'final.html';
// })
if (homeorder != null) {
  document.querySelector("header .cont .total span").innerHTML = `${homeorder}`;
  // itemcount=localcountitem
  
}
let button=document.querySelector(".btn-conteiner");
let main=document.querySelector(".main")
button.addEventListener("click",e=>{
let overlay=document.createElement("div");
overlay.className="over";
main.appendChild(overlay);
let paragraph=document.createElement("p");
let icon=document.createElement("i");
icon.className="fa-solid fa-square-check";
paragraph.appendChild(icon);
let text=document.createTextNode("Your request has been completed successfully");
paragraph.appendChild(text);
let span=document.createElement("span")
let textspan=document.createTextNode("X");
span.appendChild(textspan);
paragraph.appendChild(span)
    overlay.appendChild(paragraph);

    span.addEventListener("click",  e => {
        overlay.remove();

        document.querySelector('.cart-items').remove();
        document.querySelector('#cart-total').remove();
        document.querySelector(".main  .asid2 .number").innerHTML=`products: 0`;
      localStorage.removeItem("cart");
      localStorage.removeItem("order");
       document.querySelector("header .total span").innerHTML="0"
      
      
       
      
    
    })
   

})
let user = document.querySelector("header .cont .hid .user");
let userlocal = localStorage.getItem("user-name");
if (userlocal != null) {
    document.querySelector("header .cont .hid .user").innerHTML = ` hello ${userlocal}`;  
};