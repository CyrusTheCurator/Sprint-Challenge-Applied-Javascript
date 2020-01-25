// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector(".topics");

//component maker
let tabComponent = topic => {
  let tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = topic;

  return tab;
};

//requests array and calls component for each string in array
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(obj => {
    let topicsArray = obj.data.topics;
    topicsArray.forEach(element => {
      topics.appendChild(tabComponent(element));
    });
  })
  .catch(err => {
    console.log("Error encountered: ", err);
  });
