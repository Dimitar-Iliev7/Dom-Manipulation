document.getElementById("app-title");

document.getElementById("app-title").getAttribute("id");

//Set attributes
document.getElementById("app-title").id = "new-id";

document.getElementById("app-title").title = "Shopping List";

document.getElementById("app-title").setAttribute("class", "title"); // className => title

//Get/change content
const title = document.getElementById("app-title");
title.textContent = "Hello World";
title.innerText = "Hello again";
title.innerHTML = "<strong>Shopping List</strong>";

//Change styles
title.style.color = "red";
title.style.backgroundColor = "red"; //camel case if two words
title.style.padding = "10px";
title.style.borderRadius = "10px";

//document.querySelector()
document.querySelector("h1"); // select silngle elements
document.querySelector("#app-title");
document.querySelector(".container");
document.querySelector('input[type="text"]');
document.querySelector("li:nth-child(2)"); // select the second li item

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "App;e Juice";
secondItem.style.color = "red";

// Use these methods on other elements
const list = document.querySelector("ul");
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
