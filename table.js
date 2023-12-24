let cartItem = document.querySelectorAll(".product .cont  .pro .box1 .alone");
let carTotal = document.querySelector("header .total");
let itemcount = 0;
carTotal.addEventListener("click", e => {
    window.location.href = 'final.html';
})

let localcountitem = localStorage.getItem("order");
 console.log(localcountitem)
if (localcountitem != null) {
    document.querySelector("header .cont .total span").innerHTML = `${localcountitem}`;
    itemcount=localcountitem
    
}
let selectedProducts = [];
cartItem.forEach(e => {

    e.addEventListener("click", e => {
        
        // imageSrc = e.target.parentElement.querySelector("img")
        // selectedProducts.push(imageSrc);
        // localStorage.setItem('cart', `${selectedProducts}`);
        // // console.log(localStorage.getItem('cart'));
        
       
        itemcount++

        if (document.querySelector("header .cont  .total span").innerHTM == null) {
            document.querySelector("header .cont .total  span").innerHTML = `${itemcount}`;
        }
        else {
            document.querySelector("header .cont .total span").innerHTM += `${itemcount}`
        }
        localStorage.setItem("order", `${itemcount}`)
    })

});
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////


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
//////////////////////////////////////////////////////////////////////////////////////////////
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
})
///////////////////////////////////////////////////////////////////////////////////////























// let localcountitem = localStorage.getItem("itemcount");
// let itemCount = 0;
// // console.log(localcountitem)
// if (localcountitem != null) {


//     document.querySelector(".header .cont .card i span").innerHTML = `${localcountitem}`;
//     itemCount=localcountitem
    
// }
// let spancard = document.querySelectorAll(".value .cont .content .box1  .card");
// console.log(spancard);

// spancard.forEach(span => {
     
//     span.addEventListener("click", e => {
//         itemCount++
//         if (document.querySelector(".header .cont  .card i span").innerHTM == null) {
//             document.querySelector(".header .cont .card i span").innerHTML = `${itemCount}`;
//         }
//         else {
//             document.querySelector(".header .cont.card i span").innerHTM+=`${itemCount}`
//         }
//         localStorage.setItem("itemcount", `${itemCount}`);
         
//     })

// });