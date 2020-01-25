// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector(".cards-container");

//component creator
let cardComponent = data => {
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("div");
  let imgContainer = document.createElement("div");
  let authorImg = document.createElement("img");
  let authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = data.headline;
  authorImg.src = data.authorPhoto;
  authorName.textContent = data.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(authorName);

  console.log("we are returning ", card);

  return card;
};

//call HTTP request
axios.get("https://lambda-times-backend.herokuapp.com/articles").then(obj => {
  //Create array out of object keys (We will use these to programatically reference obj properties)
  let articlesArray = Object.keys(obj.data.articles);

  //iterate over property values and insert them into references to retrieved data
  articlesArray.forEach(element => {
    let article = obj.data.articles[element];

    //once articles are separated and reference the nested arrays, loop over arrays and call component method
    article.forEach(element => {
      cardsContainer.appendChild(cardComponent(element));
    });
  });
});
