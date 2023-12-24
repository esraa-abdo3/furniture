
let imgboxx = document.querySelector(".cart .cont .img");
let imgback = localStorage.getItem("srcimg");
document.addEventListener('DOMContentLoaded', function() {
    const cartImage = imgback; // استرجاع الصورة من Local Storage
    if (cartImage) {
        const cartImgElement = document.createElement('img'); // انشئ عنصر صورة
        cartImgElement.src = cartImage; // قم بتعيين مصدر الصورة
        cartImgElement.alt = 'Added to cart'; // ضع نص بديل للصورة

        imgboxx.appendChild(cartImgElement); // أضف الصورة إلى عنصر الكارت
    }
});
///////////////////////////////////////////////////////////////////////////////////////
const plusButton = document.querySelector('.fa-plus');
const minusButton = document.querySelector('.fa-minus');
const numberElement = document.getElementById('number');

let number = 1;

plusButton.addEventListener('click', function() {
    number++;
    numberElement.textContent = number;
});

minusButton.addEventListener('click', function() {
    if (number > 1) {
        number--;
        numberElement.textContent = number;
    }
});








