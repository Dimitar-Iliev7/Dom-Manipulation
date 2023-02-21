// create dom elements using js
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "my Element");
div.innerText = "Hello";

const text = document.createTextNode("Hello World");
div.appendChild(text);
document.body.appendChild(div);

{
  /* <div
  clas="my-element"
  id="my-element"
  title="My element"
>
  Hello
</div>; */
}

console.log(div);
