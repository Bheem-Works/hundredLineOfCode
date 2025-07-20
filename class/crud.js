class AddList {
  constructor() {
    this.store = [];
    this.length = 0;
  }

  add(newValue) {
    const value = (this[this.length] = newValue); // 'new'
    const value_container = this.store.push(value); // 1;
    return value, value_container;
  }

  remove(number) {
    const remove = value_container.slice(0, number);
    return remove;
  } // i have to delete the matching vlaue
}

const Push = new AddList();
console.log(Push.add("new"));
console.log("another one\n\n ----");

let items = [1, 2, 3, 4];
let itemIdx = items[1];
function filterItems(items, idx) {
  const filterItem = items.filter((itm) => itm === idx);
  return filterItem;
}

console.log(filterItems(items, itemIdx));
