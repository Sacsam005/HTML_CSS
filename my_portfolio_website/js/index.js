// Popup modal for home page
const popupOpen = document.querySelectorAll(".pop-up");
const popupCloseBtn = document.querySelectorAll(".close");
const popupOpenBtn = document.querySelectorAll(".button");

for (let i = 0; i < popupOpenBtn.length; i++) {
  popupOpenBtn[i].addEventListener("click", () => {
    popupOpen[i].classList.toggle("open");
  });
}

for (let i = 0; i < popupOpenBtn.length; i++) {
  popupCloseBtn[i].addEventListener("click", () => {
    popupOpen[i].classList.remove("open");
  });
}

document.addEventListener("click", function (e) {
  for (let i = 0; i < popupOpen.length; i++) {
    if (
      !popupOpen[i].contains(e.target) &&
      !popupOpenBtn[i].contains(e.target)
    ) {
      popupOpen[i].classList.remove("open");
    }
  }
});

// Card Slider
let index = 0;
let slideIntervalID;

const showSlide = (n) => {
  const cardItems = document.querySelectorAll(".card-slider-container .card");

  for (let i = 0; i < cardItems.length; i++) {
    cardItems[i].style.display = "none";
  }

  // set the current index
  index = n;

  // if index is greater than the amount of cardItems (set it to zero)
  if (index > cardItems.length - 1) {
    index = 0;
  }

  // if index is less than zero (set it to the length of cardItems)
  if (index < 0) {
    index = cardItems.length - 1;
  }

  // only display the image that's next or previous
  cardItems[index].setAttribute(
    "style",
    "display: flex; width: 100%; justify-content: center; align-items: center"
  );
};

// initialize slider
showSlide(index);

const startSlide = () => {
  slideInterval = setInterval(() => {
    showSlide(index + 1);
  }, 4000);
};
startSlide();

