class AddList {
  constructor() {
    this.store = [];
    this.length = 0;
  }

  add(newValue) {
    const value = (this[this.length] = newValue);
    const value_container = this.store.push(value);
    return value;
  }

  remove(number) {}
}

const Push = new AddList();
console.log(Push.add("new"));
console.log("another one\n\n ----");
          
// let's find out the even and the other's number;
let items = [1, 2, 3, 4];
// i have to do with the index; like this
// [1,2,3,]
// (1) -> gives the the 1 index value which is 2 and it will remove the all unmatching value; 
function filterItems(items, find) {
  const filterItem = items.filter((itm) => itm === find);
  return filterItem;
}

