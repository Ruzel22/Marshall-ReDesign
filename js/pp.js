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

 

});
