window.addEventListener('DOMContentLoaded', () => {
  let items = [
    {
      src: "/jpg/accessories/marshall-major-iv-earcushion-black-pos-01.png", 
      name: "acton ii", 
      price: 279.99, 
      fresh: false,
      colors: ["black"]
    },  
     
    {
      src:  "/jpg/accessories/pl-marshall-accessories-audio-cable-l-plug-mic-black-1700x1700.png", 
      name: "acton iii", 
      price: 399.99, 
      fresh: false,
      colors: ["black"]

    },
       
    
    {
      src: "/jpg/accessories/pl-marshall-accessories-monitor-II-anc-earcushion.png", 
      name: "stanmore iii", 
      price: 379.99, 
      fresh: false, 
      colors: ["black"]

    },
       
    {
      src: "./jpg/accessories/speaker-audio-cable-35mm-black.png", 
      name: "stanmore ii", 
      price: 349.99, 
      fresh: false,
      colors: ["black"]

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

  
  


  
    


  
  
  

