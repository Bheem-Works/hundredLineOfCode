const nav = document.createElement("nav");
const ul = document.createElement("ul");
const li = document.createElement("li");
const a = document.createElement("a");

/* 
    append the list and to the nav; <nav> <ul> </ul> </nav> 
    append the li to the ul <ul> <li> </li> </ul> 
    append the a to the li <li> <a> </a> </li>

*/
// Style Css:
// we need to append it to the document or the html;
nav.style.cssText =
  "background:purple;display:flex;justify-content:space-between;";

function bodyAppend(input) {
  document.body.append(input);
}
bodyAppend(nav);
