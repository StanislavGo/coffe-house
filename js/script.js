const burgerMenu = document.querySelector(".burger-menu");
const burgerBlock = document.querySelector(".burger-block");
const body = document.querySelector("body");

function changeBurgerIcon() {
  burgerMenu.classList.toggle("active");
}

const openAndCloseBurger = () => {
  burgerBlock.classList.toggle("active");
}

function onAndOffOverflowHidden() {
  body.classList.toggle("active");
}

burgerMenu.onclick = function() {
  changeBurgerIcon();
  openAndCloseBurger();
  onAndOffOverflowHidden();
}

const allLinksInBurger = document.querySelectorAll(".burger-block .link");
allLinksInBurger.forEach((el) => {
  el.onclick = function() {
    changeBurgerIcon();
    openAndCloseBurger();
    onAndOffOverflowHidden();
  }
})