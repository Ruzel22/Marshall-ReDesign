window.addEventListener('DOMContentLoaded', () => {
  let sliderConfigNL = [
    {
      src: "./jpg/speakers/marshall-acton-ii-black.jpg",
      name: "action ii",
      price: 279.99,
      fresh: true,
      colors: ["black", "white", "brown"]
    }, 
  
    {    
      src: "./jpg/speakers/marshall-acton-iii-black-01.jpg", 
      name: "action iii", 
      price: 399.99, 
      fresh: true,
      colors: ["black", "white", "brown"]

    },   
    {

      src: "./jpg/speakers/marshall-stanmore-iii-black.jpg", 
      name: "stanmore iii", 
      price:  379.99, 
      fresh:  true,
      colors: ["black", "white", "brown"]

    }, 
    {
      src: "./jpg/speakers/pl-marshall-speakers-stanmore-ii-black-1700x1700.jpg", 
      name:  "stanmore ii", 
      price:  349.99, 
      fresh:  true,
      colors: ["black", "white", "brown"]

    }, 
    {
      src: "./jpg/speakers/marshall-woburn-iii-black.jpg", 
      name:  "woburn iii", 
      price:  399.99, 
      fresh:  true,
      colors: ["black", "white", "brown"]
 
    },

    {
      src: "./jpg/speakers/marshall-woburn-iii-black.jpg", 
      name:  "woburn iii", 
      price:  399.99, 
      fresh:  true,
      colors: ["black", "white", "brown"]
 
    }

  ];

  let sliderConfigSO = [
    {
      src: "./jpg/speakers/pl-marshall-speakers-woburn-ii-black-1700x1700.jpg", 
      name: "woburn ii", 
      price: 369.99, 
      fresh: true,
      colors: ["black", "white", "brown"]

    }, 
    {
      src: "./jpg/accessories/pl-marshall-accessories-monitor-II-anc-earcushion.png", 
      name: "woburn iii", 
      price: 369.99, 
      fresh: false,
      colors: ["black"]
 
    },
    {
      src: "./jpg/accessories/speaker-audio-cable-35mm-black.png", 
      name: "woburn iiii", 
      price: 369.99, 
      fresh: false,
      colors: ["black"]


    },
    {
      src: "./jpg/headphones/plp-marshall-minor-iii-black.jpg", 
      name: "woburn iiiii", 
      price: 369.99, 
      fresh: false,
      colors: ["black", ]

    },

    {
      src: "./jpg/headphones/plp-marshall-minor-iii-black.jpg", 
      name: "woburn iiiii", 
      price: 369.99, 
      fresh: false,
      colors: ["black", ]

    },
    
    {
      src: "./jpg/speakers/marshall-acton-ii-black.jpg",
      name: "action ii",
      price: 279.99,
      fresh: true,
      colors: ["black", "white", "brown"]
    }, 
  ];


  class Card{
    constructor(src, name, price, fresh, colors, parent){
      this.src = src;
      this.name = name;
      this.price = price;
      this.fresh = fresh;
      this.colors = colors;
      this.parent = parent;
      this.isNew();
    }
  
    isNew(){
      if(this.fresh){this.fresh = "new";} else {this.fresh = " ";}
    }

    whichColor(){
      return this.colors.map(color => {
       return `<div class="form_radio">
        <input id="${this.name}-1" type="radio" name="radio" value="1" class="color-item-${color}">
        <label class="item-${color}" for="${this.name}-1"> </label>
      </div>`;
      }).join("");
    }

    render(){
        const elem = document.createElement("div");
        elem.innerHTML = `
        <a class="item-link" href="./product page.html">
          <div class="slide item">
            <p class="fresh">${this.fresh}</p>
            <div class="item-img">
              <img src=${this.src} alt="">
            </div>
            <div class="item-settings">
              <div class="item-info">
                <p>${this.name}</p>
                <p>$ ${this.price}</p>
              </div>
              <div class="item-color">
                ${this.whichColor()}
              </div>
          </div>
        </a>
        `;
        this.parent.append(elem);
    }
  }
  sliderConfigNL.forEach((element) => {
    new Card(
      element.src,
      element.name,
      element.price,
      element.fresh,
      element.colors,
      document.querySelectorAll(".slider-container")[0]
    ).render();
  });

  sliderConfigSO.forEach((element) => {
    new Card(
      element.src,
      element.name,
      element.price,
      element.fresh,
      element.colors,
      document.querySelectorAll(".slider-container")[1]
    ).render();
  });


  // let widthSlider = window.getComputedStyle(document.querySelector('.slider')).width;


 

  document.querySelectorAll('.slider').forEach(n => {
    let slideIndex = 1;
    let offset = 0;

    let slides = n.querySelectorAll(".slide");
    let slidesContainer = n.querySelector('.slider-container');
    let next =  n.querySelector(".next");
    let prev =  n.querySelector(".prev");
    
    let widthWindow = window.getComputedStyle(slidesContainer).width;
    let widthSlider = window.getComputedStyle(n).width;
    widthSlider = +widthSlider.slice(0, widthSlider.length - 2);
    widthWindow = +widthWindow.slice(0, widthWindow.length - 2);
    console.log(widthSlider);
    console.log(widthWindow);

    next.addEventListener("click", () => {
      if (widthSlider < 1800){
        if(offset == 380 * (slides.length - 4)) {
          offset = 0;
        } else {
          offset += 380;
        }
      }
      else{
        if(offset == 380 * (slides.length - 5)) {
          offset = 0;
        } else {
          offset += 380;
        }
      }

      slidesContainer.style.transform = `translateX(-${offset}px)`;


      
    });

    prev.addEventListener("click", () => {
      if (widthSlider < 1800){
        if(offset == 0) {
          offset = 380 * (slides.length - 4);
        } else {
          offset -= 380;
        }
      }
      else{
        if(offset == 0) {
          offset = 380 * (slides.length - 5);
        } else {
          offset -= 380;
        }
      }
      console.log(offset);
      slidesContainer.style.transform = `translateX(-${offset}px)`;

    });



  });

 

});
