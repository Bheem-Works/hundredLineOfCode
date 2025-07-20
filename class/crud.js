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
