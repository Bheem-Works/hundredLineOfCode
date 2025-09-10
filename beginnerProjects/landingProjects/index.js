const nav = document.createElement("nav");
const logo = document.createElement("div");
const img = document.createElement("img");
const ul = document.createElement("ul");
const li = document.createElement("li");
const buttonOne = document.createElement("button");
const buttonTwo = document.createElement("button");
const buttonThree = document.createElement("button");
const div_button = document.createElement("div");
buttonOne.textContent = "button One";
buttonTwo.textContent = "button two";
buttonThree.textContent = "button three";

// let all_button = { buttonOne, buttonTwo, buttonThree };
// console.log(all_button);

const WhyUs = (document.createElement("a").textContent = "Why us");
const Products = (document.createElement("a").textContent = "Products");
const Features = (document.createElement("a").textContent = "Features");
const Resources = (document.createElement("a").textContent = "Resources");
const Pricing = (document.createElement("a").textContent = "Pricing");

img.setAttribute("src", "bigWebLogo.png");
logo.style.cssText = "display:flex;";
logo.append(img);
li.append(WhyUs);
li.append(Products);
li.append(Features);
li.append(Resources);
li.append(Pricing);
div_button.append(buttonOne, buttonTwo, buttonThree);
bodyAppend(nav);
// Css
nav.style.cssText =
  "background:purple;color:white;margin-top:-20px;margin-left:-10px;margin-right:-10px;padding:20px;";
img.style.cssText = "width:40px; height:50px;border-radius:50%";
ul.style.cssText = "display:flex;align-items:center;gap:20px; justify-content:center;";
li.style.cssText = "";
//for example;
function bodyAppend(input) {
  document.body.append(input);
}

const firstList = document.createElement("li");
const secondList = document.createElement("li");
const thirdList = document.createElement("li");
const fourthList = document.createElement("li");
const fifthList = document.createElement("li");

firstList.append(WhyUs);
secondList.append(Products);
thirdList.append(Features);
fourthList.append(Resources);
fifthList.append(Pricing);

ul.append(firstList, secondList, thirdList, fourthList, fifthList);
nav.append(logo, ul, div_button);
