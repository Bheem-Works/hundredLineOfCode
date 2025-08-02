// this is the structure data;

class Student {
  constructor(name, rank, id) {
    this.name = name;
    this.rank = rank;
    this.id = id;
    this.store = [];
  }
  add(newValue) {
    this.store.push(newValue);
  }

  // can i get the length value of the store;
  getValue() {
    for (let i = 0; i < this.store.length; i++) {
      for (let j = i + 1; j < this.store.length; j++) {
        if (this.store[i] > this.store[j]) {
          let temp = this.store[i];
          this.store[i] = this.store[j];
          this.store[j] = temp;
        }
      }
    }
    // not sure this will work or not.
  }
}

const data = new Student();
data.add("vim");
data.add("magar");
data.add("supriya");
data.store;
data.getValue();
