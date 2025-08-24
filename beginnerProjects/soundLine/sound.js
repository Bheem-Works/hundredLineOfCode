let range = document.getElementById("soundRange");
let showInScreen = document.getElementById("screen");
// For check does the range have the value or not ? And yes it has but shocked why does it have value ?
{
  if (range.value) {
    console.log("Range has a value");
  } else {
    console.log("Range does not have a value");
  }
}

range.addEventListener("input", () => {
  showInScreen.innerText = range.value;
});
