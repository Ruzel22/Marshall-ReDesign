window.addEventListener('DOMContentLoaded', () => {
  const imgPaths = [
    "../jpg/lookbook/1.jpg",
    "../jpg/lookbook/2.jpg",
    "../jpg/lookbook/3.jpg",
    "../jpg/lookbook/4.jpg",
    "../jpg/lookbook/5.jpg",
    "../jpg/lookbook/6.jpg",
    "../jpg/lookbook/7.jpg",
    "../jpg/lookbook/9.jpg",
    "../jpg/lookbook/10.jpg",
    "../jpg/lookbook/11.jpg",
    "../jpg/lookbook/12.jpg",
    "../jpg/lookbook/13.jpg",



  ]; 

  let imageBlocks = document.querySelectorAll(".lookbook-container  div");

  imgPaths.forEach((src, i) => {
    imageBlocks[i].style.backgroundImage = `url(${src})`;
  });

  let modal = document.querySelector(".fixed-overlay");
  let modalContent = document.querySelector(".modal-image");
  let modalButton = document.querySelector(".close-modal");
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");

  let index = 0;
  next.addEventListener("click", () => {

    if(index < (imgPaths.length-1)){
      index+=1;
    }else{
      index = 0;
    }
    modalContent.style.backgroundImage = imageBlocks[index].style.backgroundImage;
  });

  prev.addEventListener("click", () => {
    if(index == 0){
      index = (imgPaths.length-1);
    }else{
      index -= 1;
    }
  modalContent.style.backgroundImage = imageBlocks[index].style.backgroundImage;
  });
  
  imageBlocks.forEach((image, index) => {
    image.addEventListener("click", () => {
      modal.style.display = "block";


      
         
      
      modalContent.style.backgroundImage = imageBlocks[index].style.backgroundImage;
    });

    modalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

   
    modal.addEventListener("click", (e) => {
      if (e.target === modal){
        modal.style.display = "none";
      }
    });


    document.addEventListener('keydown', function (e) {
       console.log(e.key);

      if(e.key === "Escape") {
        modal.style.display = "none";
      }
    });


  });

});

  