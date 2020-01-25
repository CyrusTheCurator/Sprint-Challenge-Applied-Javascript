/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselContainer = document.querySelector(".carousel-container");
let imagesArray = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

let carouselComponent = arr => {
  let carousel = document.createElement("div");
  let leftButton = document.createElement("div");
  let rightButton = document.createElement("div");

  let imagesSelectors = [];
  arr.forEach(element => {
    let img = document.createElement("img");

    img.src = element;
    imagesSelectors.push(img);
    carousel.appendChild(img);
  });
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.textContent = "<";
  rightButton.textContent = ">";
  let i = 0;
  imagesSelectors[i].style.display = "block";
  rightButton.addEventListener("click", event => {
    let currentImage = imagesSelectors[i];
    currentImage.style.display = "none";
    i++;
    if (i > imagesSelectors.length - 1) {
      i = 0;
    }
    let nextImage = imagesSelectors[i];
    nextImage.style.display = "block";
  });

  leftButton.addEventListener("click", event => {
    let currentImage = imagesSelectors[i];
    currentImage.style.display = "none";
    i--;
    if (i < 0) {
      console.log("i is going to reset because it is ", i);
      i = imagesSelectors.length - 1;
    }
    let nextImage = imagesSelectors[i];
    nextImage.style.display = "block";
  });

  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);

  return carousel;
};

carouselContainer.appendChild(carouselComponent(imagesArray));
