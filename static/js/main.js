"use strict";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-year").innerHTML = new Date().getFullYear();
    console.log("test")
});

//Shop slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
}




/*const cartItems= [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1 }
];
let total=0 ;
for (let i=0; i< cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity;
}

total *= 1.08;

console.log(total);

let totalUpdates = 10;

do {
    totalUpdates++;

    console.log(totalUpdates);
}
while (totalUpdates < 10) 

console.log("No longer trackin the user");*/

function getUserCredentials(firstName, lastName, email) {
    return `${firstName} ${lastName} | ${email}`
}

const userCredentials = getUserCredentials('Dylan', 'Israel', 'DylansEmail310@gmail.com');

function getPreTaxTotal(cartItems) {
    let total = 0;

    for (let cartItem of cartItems) {
        total += cartItem.quantity * cartItem.price;
    }

    return total
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1 }
];

const preTaxTotal = getPreTaxTotal(cartItems);

function getTaxedTotal(preTaxTotal) {
    return preTaxTotal *= 1.08;
}

const finalTaxedTotal = getTaxedTotal(preTaxTotal);

console.log(userCredentials)
console.log(preTaxTotal);
console.log(finalTaxedTotal);