const allButtons = document.querySelectorAll(".menu-block .menu-buttons button");
const allMenusSection = document.querySelectorAll(".menu .section");

const coffeeButton = document.querySelector(".menu-buttons .coffee-button");
const teaButton = document.querySelector(".menu-buttons .tea-button");
const dessertButton = document.querySelector(".menu-buttons .dessert-button");

const coffeeSection = document.querySelector(".menu .coffee-section");
const teaSection = document.querySelector(".menu .tea-section");
const dessertSection = document.querySelector(".menu .dessert-section");

const sectionToHideCoffee = document.querySelector(".coffee-section .item_block-to-hide");
const sectionToHideDessert = document.querySelector("#item-to-hide-dessert");
const refreshButCoffee = document.querySelector(".coffee-section #coffee");
const refreshButDessert = document.querySelector(".dessert-section #dessert");

function clearSelectedButton() {
  allButtons.forEach((el) => {
    el.classList.remove("active");
  });
};

function closeAllSections() {
  allMenusSection.forEach((el) => {
    el.style.display = "none";
  });
};

function openCoffeeBlock() {
  closeAllSections();
  closeAllAdditionSection();
  coffeeSection.style.display = "flex";
};

function openTeaBlock() {
  closeAllSections();
  closeAllAdditionSection();
  teaSection.style.display = "flex";
};

function openDessertBlock() {
  closeAllSections();
  closeAllAdditionSection();
  dessertSection.style.display = "flex";
};

coffeeButton.onclick = function() {
  clearSelectedButton();
  coffeeButton.classList.add("active");
  openCoffeeBlock();
};

teaButton.onclick = function() {
  clearSelectedButton();
  teaButton.classList.add("active");
  openTeaBlock();
};

dessertButton.onclick = function() {
  clearSelectedButton();
  dessertButton.classList.add("active");
  openDessertBlock();
};

function openAdditionalCoffees() {
  sectionToHideCoffee.style.display = "flex";
  refreshButCoffee.style.display = "none";
}

function openAdditionalDesserts() {
  sectionToHideDessert.style.display = "flex";
  refreshButDessert.style.display = "none";
}

function closeAllAdditionSection() {
  if (document.querySelector(".menu-block").clientWidth <= 1352) {
    sectionToHideCoffee.style.display = "none";
    refreshButCoffee.style.display = "block";
  
    sectionToHideDessert.style.display = "none";
    refreshButDessert.style.display = "block";
  }
}

refreshButCoffee.onclick = openAdditionalCoffees;
refreshButDessert.onclick = openAdditionalDesserts;