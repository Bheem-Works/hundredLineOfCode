class AddList {
  constructor() {
    this.store = [];
    this.length = 0;
  }

  add(newValue) {
    this.store.push(newValue);
  }

  remove(number) {
    this.store = this.store.filter((value, index) => {
      return index !== number;
    });
  }

  update(index, value) {
    this.store[index] = value;
  }

  read(index) {
    return this.store[index];
  }
}

const Push = new AddList();
console.log(Push.add("new"));
console.log(Push.add("new one"));
console.log([...Push.store]);
console.log(Push.read(1));
