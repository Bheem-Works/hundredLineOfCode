/*
    we do have the 17 elemetns; 
    make the div for the logo sections; 
    make the list and the ul anchor tag. 
    there are 3 buttons and each button have thier logo. 
*/
const nav = document.createElement("nav");
const logo = document.createElement("div");
const img = document.createElement("img");
const ul = document.createElement("ul");
const li = document.createElement("li");
const a = document.createElement("a");
const home = document.createElement("a");
const contact = document.createElement("a");
const menu = document.createElement("a");
/* 
    append the list and to the nav; <nav> <ul> </ul> </nav> 
    append the li to the ul <ul> <li> </li> </ul> 
    append the a to the li <li> <a> </a> </li>

*/
// Style Css:
// we need to append it to the document or the html;
nav.append(ul);
ul.append(li);
li.append(a);

bodyAppend(nav);
bodyAppend(ul);
bodyAppend(li);
bodyAppend(a);
//for example;
const paragraph = document.createElement("li");
document.body.append(paragraph);
console.log(paragraph);
function anchor(input) {
  //   const inputValue = (document.createElement("a").textContent = input);
  paragraph.textContent = input;
//   paragraph.append(input);
  // user can get that value;
}
anchor("Why us");
anchor("Product");
anchor("Features");
anchor("Resources");
anchor("Pricing");

nav.style.cssText =
  "background:purple;display:flex;justify-content:space-between;margin:0px 0px";
function bodyAppend(input) {
  document.body.append(input);
}
