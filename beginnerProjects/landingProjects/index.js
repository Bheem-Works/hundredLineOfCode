/*  
  "hello man are you here right now ?? hello ? "
 */

const nav = document.createElement("nav");
const logo = document.createElement("div");
const img = document.createElement("img");
const ul = document.createElement("ul");
const div_for_list = document.createElement("div");

const buttonOne = document.createElement("button");
const buttonTwo = document.createElement("button");
const buttonThree = document.createElement("button");
const div_button = document.createElement("div");
buttonOne.textContent = "Call";
buttonTwo.textContent = "Log In";
buttonThree.textContent = "Get 14 days Free";

// Workign with the li;
const navLinks = [
  { text: "WhyUs", href: "#" },
  { text: "Products", href: "#" },
  { text: "Features", href: "#" },
  { text: "Resources", href: "#" },
  { text: "Pricing", href: "#" },
];

navLinks.forEach((text) => {
  let list = document.createElement("li");
  list.style.cssText = "cursor:pointer; padding:20px 10px;list-style:none;";
  const a = document.createElement("a");
  a.style.cssText = "text-decoration:none;color:white;";
  a.textContent = text.text;
  a.href = "#";
  list.append(a);
  ul.append(list);
});

// Creating the buttons;
img.setAttribute("src", "bigWebLogo.png");
logo.style.cssText = "display:flex;";
logo.append(img);
div_button.append(buttonOne, buttonTwo, buttonThree);
// Css
nav.style.cssText =
  "background:skyblue;color:white;display:flex; align-items:center;justify-content:space-between;margin-top:-20px;margin-left:-10px;margin-right:-10px;padding:20px;";
img.style.cssText = "width:40px; height:50px;border-radius:50%";
ul.style.cssText =
  "display:flex;align-items:center;gap:20px; justify-content:center;";
div_button.style.cssText = "display:flex; gap:10px";

// Style for the buttons;
{
  buttonOne.style.cssText =
    "background:transparent; border:2px solid white;  padding:10px 15px; cursor:pointer;";

  buttonOne.addEventListener("mouseover", () => {
    buttonOne.style.background = "lightgreen";
    buttonOne.style.color = "white";
    buttonOne.style.transform = "scale(1.1)";
  });
  buttonOne.addEventListener("mouseout", () => {
    buttonOne.style.backgroundColor = "transparent";
    buttonOne.style.color = "";
    buttonOne.style.transform = "scale(1.1)";
  });

  buttonTwo.style.cssText =
    "background:transparent; border:2px solid white; padding:10px 15px; cursor:pointer; ";

  buttonTwo.addEventListener("mouseover", () => {
    buttonTwo.style.background = "blue";
    buttonTwo.style.color = "white";
    buttonTwo.style.transform = "scale(1)";
  });
  buttonTwo.addEventListener("mouseout", () => {
    buttonTwo.style.backgroundColor = "transparent";
    buttonTwo.style.color = "";
    buttonTwo.style.transform = "scale(1)";
  });
  buttonThree.addEventListener("mouseover", () => {
    buttonThree.style.background = "orange";
    buttonThree.style.color = "white";
    buttonThree.style.transform = "scale(1.1)";
  });
  buttonThree.addEventListener("mouseout", () => {
    buttonThree.style.backgroundColor = "transparent";
    buttonThree.style.color = "";
    buttonThree.style.transform = "scale(1)";
  });

  buttonThree.style.cssText =
    "background:transparent; border:2px solid white; padding:10px 15px; cursor:pointer; ";
}
//for example;
function bodyAppend(input) {
  document.body.append(input);
}

// append it to the nav;
nav.append(logo, ul, div_button);
// document.body.append(nav);
bodyAppend(nav);
