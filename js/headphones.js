window.addEventListener('DOMContentLoaded', () => {
  let items = [
    {
      src: "./jpg/headphones/cart-marshall-major-iv-black.jpg", 
      name: "acton ii", 
      price: 279.99, 
      fresh: true,
      colors: ["black"]
    },
       
    {
      src: "./jpg/headphones/mh-monitor-II-ANC-medium.jpg", 
      name: "acton iii", 
      price: 279.99, 
      fresh: true,
      colors: ["black"]
    },
    
    {
      src: "./jpg/headphones/pl-marshall-headphones-mode-1700x1700.jpg", 
      name: "stanmore iii", 
      price: 279.99, 
      fresh: true,
      colors: ["black"]
    },
    {
      src: "./jpg/headphones/pl-marshall-headphones-mode-eq-1700x1700.jpg", 
      name: "stanmore ii", 
      price: 279.99, 
      fresh: true,
      colors: ["black"]
    },
    {
      src: "./jpg/headphones/plp-diamond-jubilee-monitor-ii-anc-v2.jpg", 
      name: "woburn iii", 
      price: 279.99, 
      fresh: true,
      colors: ["black"]
    },
    {
      src: "./jpg/headphones/plp-diamond-jubilee-motif-anc-v2.jpg", 
      name: "woburn ii", 
      price: 279.99, 
      fresh: false,
      colors: ["black"]
    },
    {
      src: "./jpg/headphones/plp-marshall-minor-iii-black.jpg", 
      name: "woburn ii", 
      price: 279.99, 
      fresh: false,
      colors: ["black"]
    },
    {
      src: "./jpg/headphones/plp-marshall-motif-anc-black.jpg", 
      name: "woburn ii", 
      price: 279.99, 
      fresh: false,
      colors: ["black"]
    }
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
        console.log(1);
        this.parent.append(elem);
    }
  }
  items.forEach((element) => {
    console.log("ok");
    console.log(document.querySelector(".shop"));

    new Card(
      element.src,
      element.name,
      element.price,
      element.fresh,
      element.colors,
      document.querySelector(".shop")
    ).render();
  });

});

  
  

