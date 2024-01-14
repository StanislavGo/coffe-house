const arrayOfItemsCoffee = document.querySelectorAll(".menu .item");
const modalForCoffee = document.querySelector(".modal-for-coffee");
const background = document.querySelector(".background");
const x = document.querySelector("body");
const closeButton = document.querySelector(".close-button");
const parent = document.querySelector(".modal-for-coffee .parent");
const nameOfCoffee = document.querySelector(".description .name");
const desc = document.querySelector(".description .desc");
const prise = document.querySelector(".description .prise");
const small = document.querySelector(".sizes .small");
const avg = document.querySelector(".sizes .avarage");
const big = document.querySelector(".sizes .big");
const firstAddictive = document.querySelector(".addictives .first");
const secondAddictive = document.querySelector(".addictives .second");
const thirdAddictive = document.querySelector(".addictives .third");

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
  }
}

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
  parent.innerHTML = this.children[0].innerHTML.trim();
};

function closeCard() {
  modalForCoffee.classList.remove("active");
  background.classList.remove("active");
  x.style.overflow = "auto";
};

background.onclick = closeCard;
closeButton.onclick = closeCard;

arrayOfItemsCoffee.forEach((el) => {
  el.onclick = openCard;
});