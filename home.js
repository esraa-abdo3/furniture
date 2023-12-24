
////////////////////////////////////////////////////////////////////////////////////////////
function filterProducts(type) {
    const products = document.querySelectorAll('.products');
    products.forEach(product => {
        if (type === 'new' && product.getAttribute('data-type') === 'new') {
            product.style.display = 'block';
        } else if (type === 'bestseller' && product.getAttribute('data-type') === 'best-seller') {
            product.style.display = 'block';
        } else if (type === 'all') {
            product.style.display = 'block';
        }
         else {
            product.style.display = 'none';
        }
    });
   
}
////////////////////////////////////////////////////////////////////////////////////////
let list = document.querySelectorAll(".product .cont ul li button");
list.forEach(e => {
    e.addEventListener("click", e => {
        e.target.classList.add("active");
        document.querySelectorAll(".product .cont ul .active").forEach(activeitem => {
            if (activeitem !== e.target) {
                activeitem.classList.remove("active")
            }
        })
    })
});
/////////////////////////////////////////////////////////////////////////////////////////
let carTotal = document.querySelector("header .total");
let homeorder = localStorage.getItem("order");
console.log(homeorder)
carTotal.addEventListener("click", e => {
    window.location.href = 'final.html';
})
if (homeorder != null) {
    document.querySelector("header .cont .total span").innerHTML = `${homeorder}`;
    // itemcount=localcountitem
    
}
////////////////////////////////////////////////////////////////////////////////////////
let user = document.querySelector("header .cont .hid .user");
let userlocal = localStorage.getItem("user-name");
if (userlocal != null) {
    document.querySelector("header .cont .hid .user").innerHTML = ` hello ${userlocal}`;  
};
