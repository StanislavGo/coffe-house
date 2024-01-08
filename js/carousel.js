const arrowLeft = document.querySelector(".arrow-left");
const arrowRigth = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider-block .slider .elements");
const indicatorsArr = document.querySelectorAll(".pagination-block .pagination");
const sliderWidth = document.querySelector(".slider-block .slider .elements .slide").clientWidth;
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
  const arr = [0, -sliderWidth, -sliderWidth * 2];
  slider.style.left = arr[index] + "px";
}

arrowRigth.onclick = function() {
  clicks++;
  if (clicks < 3) {
    goToSlide(clicks);
    changePaginationStatus(clicks);
  } else {
    restartCarusel(0, 0, 0);
  }
}

arrowLeft.onclick = function() {
  clicks--;
  if(clicks == -1) {
    restartCarusel(2, 2, -sliderWidth * 2);
  } else {
    goToSlide(clicks);
    changePaginationStatus(clicks);
  }
}