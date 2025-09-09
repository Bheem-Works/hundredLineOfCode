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

// Creating the elements for the anchor;
const WhyUs = (document.createElement("a").textContent = "Why us");
const Products = (document.createElement("a").textContent = "Products");
const Features = (document.createElement("a").textContent = "Features");
const Resources = (document.createElement("a").textContent = "Resources");
const Pricing = (document.createElement("a").textContent = "Pricing");
/* 
    append the list and to the nav; <nav> <ul> </ul> </nav> 
    append the li to the ul <ul> <li> </li> </ul> 
    append the a to the li <li> <a> </a> </li>
 
*/
nav.append(ul);
ul.append(li);
li.append(WhyUs);
li.append(Products);
li.append(Features);
li.append(Resources);
li.append(Pricing);

bodyAppend(nav);
bodyAppend(ul);
bodyAppend(li);

/* 
we need to make the list for the each elements; 
like this
for(let i = 0; i < 5; i ++){
const list = document.createElement('li');
list.append(li);  
}

auta list ma savai kura haru samayesh vako cha. 
*/

// Creating the multiple list.
  for (let i = 0; i < 5; i++) {
    const newList = document.createElement("li");
    newList.textContent = "vim";
  }

nav.append(ul, li);
nav.style.cssText =
  "background:purple;color:white;margin-top:0px;padding:20px;";
//for example;
function bodyAppend(input) {
  document.body.append(input);
}
