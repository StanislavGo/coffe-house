const arrayOfItemsCoffee = document.querySelectorAll(".menu .item");
const modalForCoffee = document.querySelector(".modal-for-coffee");
const background = document.querySelector(".background");
const x = document.querySelector("body");
const closeButton = document.querySelector(".close-button");
const parent = document.querySelector(".modal-for-coffee .parent");
const nameOfCoffee = document.querySelector(".description .name");
const desc = document.querySelector(".description .desc");
let prise = document.querySelector(".description .prise");
const small = document.querySelector(".sizes .small");
const avg = document.querySelector(".sizes .avarage");
const big = document.querySelector(".sizes .big");
const firstAddictive = document.querySelector(".addictives .first");
const secondAddictive = document.querySelector(".addictives .second");
const thirdAddictive = document.querySelector(".addictives .third");
const arrOfSizes = document.querySelectorAll(".sizes button");
const arrOfAddictives = document.querySelectorAll(".addictives button");

function clearActiveClass(array) {
  array.forEach((el) => {
    el.classList.remove("active");
  });
};

function setActiveStatus(item) {
  item.classList.add("active");
}

function checkMenusType() {
  if (document.querySelector(".tea-button").classList.contains("active")) {
    document.querySelector(".addictives .second").innerText = "Lemon";
  } else if (document.querySelector(".dessert-button").classList.contains("active")) {
    small.innerText = "50 g";
    avg.innerText = "100 g";
    big.innerText = "200 g";
    firstAddictive.innerText = "Berries";
    secondAddictive.innerText = "Nuts";
    thirdAddictive.innerText = "Jam";
  };
};

function openCard() {
  checkMenusType();
  modalForCoffee.classList.add("active");
  background.classList.add("active");
  x.style.overflow = "hidden";

  const text = this.innerText;
  const array = text.split("\n\n");

  nameOfCoffee.innerText = array[0];
  desc.innerText = array[1];
  prise.innerText = array[2];
  setCurrentPrice(array[2]);
  parent.innerHTML = this.children[0].innerHTML.trim();
};


let currentPrise = 0;

function setCurrentPrice(price) {
  currentPrise = price;
}

let finPrice = 0;

function setPrice(price) {
  prise.innerText = price;
  finPrice = price;
}

small.onclick = function() {
  clearActiveClass(arrOfSizes);
  setActiveStatus(small);
  setPrice(currentPrise);
};

avg.onclick = function() {
  clearActiveClass(arrOfSizes);
  setActiveStatus(avg);
  const price = String(currentPrise).replace("$", "").split(".");
  let finalPrice = 0;
  if(price[1] == 50) {
    finalPrice = "$" + String(Number(price[0]) + 1) + ".00";
  } else {
    finalPrice = "$" + price[0] + ".50";
  }
  setPrice(finalPrice);
};

big.onclick = function() {
  clearActiveClass(arrOfSizes);
  setActiveStatus(big);
  const price = String(currentPrise).replace("$", "").split(".");
  const addedPrice = Number(price[0]) + 1;
  const finalPrice = "$" + String(addedPrice) + "." + price[1];
  console.log(finalPrice);
  setPrice(finalPrice);
};


firstAddictive.onclick = function() {
  clearActiveClass(arrOfAddictives);
  setActiveStatus(firstAddictive);
};

secondAddictive.onclick = function() {
  clearActiveClass(arrOfAddictives);
  setActiveStatus(secondAddictive);
};

thirdAddictive.onclick = function() {
  clearActiveClass(arrOfAddictives);
  setActiveStatus(thirdAddictive);
};

function closeCard() {
  modalForCoffee.classList.remove("active");
  background.classList.remove("active");
  x.style.overflow = "auto";
  clearActiveClass(arrOfAddictives);
  clearActiveClass(arrOfSizes);
  setActiveStatus(small);
};

background.onclick = closeCard;
closeButton.onclick = closeCard;

arrayOfItemsCoffee.forEach((el) => {
  el.onclick = openCard;
});