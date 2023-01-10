window.addEventListener('DOMContentLoaded', () => {
  
let items = document.querySelectorAll('.item-specifications');
// var navBurger = document.querySelector('.hamburger-button');
items.forEach(item => {
  let itemToggle = item.querySelector('.item-button');

  item.addEventListener("click", function(evt) {
    if (item.classList.contains('closed')) {
      item.classList.remove('closed');
      item.classList.add('opened');
      itemToggle.style.transform = "rotate(45deg)";
        // navBurger.classList.remove('white');
        // navBurger.classList.add('pink');
    }
    else{
      item.classList.remove('opened');
      item.classList.add('closed');
      itemToggle.style.transform = "rotate(0deg)";

      console.log(1);
        // navBurger.classList.remove('pink');
        // navBurger.classList.add('white');
    }
  });
});

document.querySelectorAll('.slider').forEach(n => {
  let slideIndex = 1;
  let offset = 0;

  let slides = n.querySelectorAll(".slider-container img");
  let slide = n.querySelector(".slider-container img");
  let slidesContainer = n.querySelector('.slider-container');
  let next =  document.querySelector(".next");
  let prev =  document.querySelector(".prev");
  
  let widthWindow = window.getComputedStyle(slidesContainer).width;
  let widthSlider = window.getComputedStyle(n).width;
  let slideWidth = window.getComputedStyle(slide).width;
  slideWidth = +slideWidth.slice(0, slideWidth.length - 2);

  widthSlider = +widthSlider.slice(0, widthSlider.length - 2);
  widthWindow = +widthWindow.slice(0, widthWindow.length - 2);
  console.log(widthSlider);
  console.log(widthWindow);

  next.addEventListener("click", () => {
    if (widthSlider < 1800){
      if(offset == slideWidth * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += slideWidth;
      }
    }
    // else{
    //   if(offset == slideWidth * (slides.length - 5)) {
    //     offset = 0;
    //   } else {
    //     offset += slideWidth;
    //   }
    // }

    slidesContainer.style.transform = `translateX(-${offset}px)`;


    
  });

  prev.addEventListener("click", () => {
    if (widthSlider < 1800){
      if(offset == 0) {
        offset = slideWidth * (slides.length - 1);
      } else {
        offset -= slideWidth;
      }
    }
    // else{
    //   if(offset == 0) {
    //     offset = slideWidth * (slides.length - 5);
    //   } else {
    //     offset -= slideWidth;
    //   }
    // }
    console.log(offset);
    slidesContainer.style.transform = `translateX(-${offset}px)`;

  });



});


});
