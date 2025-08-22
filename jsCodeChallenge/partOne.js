// Write a program to find out the extnesion;

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
console.log(getFileExtension("index.css"));

// Write a program to replace ever character to the given string with the character following in the ALPHABHET
const moveStringValue = (str) => {
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
};

//
const findNew = (str) => (str.indexOf("New!") === 0 ? str : "New! " + str);
console.log(findNew("Hello World"));
