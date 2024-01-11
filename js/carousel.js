const arrowLeft = document.querySelector(".arrow-left");
const arrowRigth = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider-block .slider .elements");
const indicatorsArr = document.querySelectorAll(".pagination-block .pagination");
const sliderWidth = document.querySelector(".slider-block .slider .elements .slide").clientWidth;
let arrOfWidths = [0, -sliderWidth, -sliderWidth * 2];
const sliderBlock = document.querySelector(".slider-block .slider");
let clicks = 0;

function restartCarusel(index, count, px) {
  clicks = count;
  slider.style.left = px + "px";
  indicatorsArr.forEach((el) => {
    el.classList.remove("active");
  })
  indicatorsArr[index].classList.add("active");
}

function changePaginationStatus(index) {
  indicatorsArr.forEach((el) => {
    el.classList.remove("active");
  })
  indicatorsArr[index].classList.add("active");
}

function goToSlide(index) {
  slider.style.left = arrOfWidths[index] + "px";
}

function goLeft() {
  clicks--;
  if(clicks == -1) {
    restartCarusel(2, 2, -sliderWidth * 2);
  } else {
    goToSlide(clicks);
    changePaginationStatus(clicks);
  }
  const resetWidth = document.querySelector(".slider-block .slider .elements .slide").clientWidth;
  arrOfWidths = [0, -resetWidth, -resetWidth * 2];
}

function goRight() {
  clicks++;
  if (clicks < 3) {
    goToSlide(clicks);
    changePaginationStatus(clicks);
  } else {
    restartCarusel(0, 0, 0);
  }
  const resetWidth = document.querySelector(".slider-block .slider .elements .slide").clientWidth;
  arrOfWidths = [0, -resetWidth, -resetWidth * 2];
}

arrowRigth.onclick = function() {
  goRight();
}

arrowLeft.onclick = function() {
  goLeft();
}

let timerID;
function runSwitchEffect() {
  timerID = setInterval(() => {
    goRight();
  }, 6300)
}

sliderBlock.onmouseenter = function() {
  clearInterval(timerID);
}
sliderBlock.onmousedown = function() {
  clearInterval(timerID);
}
sliderBlock.onmouseleave = function() {
  runSwitchEffect();
}
sliderBlock.onmouseup = function() {
  runSwitchEffect();
}

runSwitchEffect();