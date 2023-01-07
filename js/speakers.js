window.addEventListener('DOMContentLoaded', () => {
  let items = [
    {
      src:"./jpg/speakers/marshall-acton-ii-black.jpg", 
      name: "acton ii", 
      price:  279.99, 
      fresh:true,
      colors: ["black", "white", "brown"]
    },
    
    {
      src:"./jpg/speakers/marshall-acton-iii-black-01.jpg", 
      name: "acton iii", 
      price:  399.99, 
      fresh: true, 
      colors: ["black", "white", "brown"]

    },
      
    
    { 
      src:"./jpg/speakers/marshall-stanmore-iii-black.jpg", 
      name: "stanmore iii", 
      price:   379.99, 
      fresh: true, 
      colors: ["black", "white", "brown"]
    },
     
    {
    src: "./jpg/speakers/pl-marshall-speakers-stanmore-ii-black-1700x1700.jpg", 
    name:"stanmore ii", 
    price: 349.99, 
    fresh:true, 
    colors: ["black", "white", "brown"]
    },
      
    {
      src:"./jpg/speakers/marshall-woburn-iii-black.jpg", 
      name: "woburn iii", 
      price:  399.99, 
      fresh:  true, 
      colors: ["black", "white", "brown"]
    },
      
    {
      src:"./jpg/speakers/pl-marshall-speakers-woburn-ii-black-1700x1700.jpg", 
      name: "woburn ii", 
      price: 369.99, 
      fresh: true, 
      colors: ["black", "white", "brown"]
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

  
  


  
    

