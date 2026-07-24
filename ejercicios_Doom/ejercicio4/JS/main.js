// 1. Cambiamos el color del car y addToCart button cuando el color es seleccionado
// - Seleccionamos los elementos
const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.querySelector(".gray");
const cartButton = document.getElementById("button");
const itemTag = document.querySelector("h3");

// Modificando Elementos
// - Add Event Listeners
// - Red Color

redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.background = "red";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/cH2pJdny/red-benz.webp")';
});

grayColor.addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.background = "gray";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.background = "black";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/NGRJX8hr/black-benz.jpg")';
});

// - Cart Button
const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - feedback Button
const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);