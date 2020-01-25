// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  let headerContainer = document.querySelector(".header-container");

  let header = document.createElement("div");
  let date = document.createElement("span");
  let title = document.createElement("h1");
  let temperature = document.createElement("span");

  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temperature);

  header.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  date.textContent = "SMARCH 28, 2019";
  title.textContent = "Lambda Times";
  temperature.textContent = "98°";
  return headerContainer.appendChild(header);
}

Header();
