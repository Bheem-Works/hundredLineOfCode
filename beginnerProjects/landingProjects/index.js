// Navbar_sections;
{
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
}

// Landing page;

// Creating the elements;
const div_image = document.createElement("div");
const heroSection_image = document.createElement("img");

const Container = document.createElement("div");

const textcontainer = document.createElement("div");
const h1 = document.createElement("h1");
h1.style.fontFamily = "Georgia,serif";
const h3 = document.createElement("h3");
h3.style.fontFamily = "sanserif";
h3.style.fontWeight = "400";

const button_section = document.createElement("div");
const input = document.createElement("input");
const button_orange = document.createElement("button");
const buy_now = document.createElement("button");
button_section.append(input, button_orange, buy_now);

// Inserting the thing's.

heroSection_image.setAttribute("src", "womenPicWithBook.webp");
div_image.append(heroSection_image);

h1.innerHTML = "This year, don't just hit <br> send-send hits.";
h3.innerHTML =
  "Get the email marketing platform that powers  that power small <br> business growth";

input.setAttribute("placeholder", "Enter your email adress");
button_orange.textContent = "Get 14 days free";
buy_now.innerHTML = "Shop"; // add the link;
textcontainer.append(h1, h3, button_section);
Container.append(textcontainer, div_image);
document.body.append(Container);

// Css is remaining;
Container.style.cssText =
  "display:flex; justify-content:space-between; gap:4rem; margin:120px 60px;";
heroSection_image.style.cssText = "width:500px; border-radius:10px;";
button_section.style.cssText = "margin-top:4rem;";

input.style.cssText =
  "border:2px solid orange; padding:20px 10px; width:300px; background:white; border-radius:20px; margin:20px;";

button_orange.style.cssText =
  " background:orange; color:black; border-radius:20px; padding:20px 10px; border:none; font-size:20px; cursor:pointer;";

buy_now.style.cssText =
  "background:orange; border-radius:20px; border:none; cursor:pointer;  font-size:20px; margin:10px 20px; padding:20px 20px;";
