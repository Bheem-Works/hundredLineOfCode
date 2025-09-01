// Here is the pseudocode.
//
// add(value)
// pre:value is the value to add to the list
// post:value has been placed at the tail of the list.
// n <- node(value)
// if head != 0
// head <-n
// tail <-n
// else
// tail.next <- n
// tail <- n
//

// Step 1. Node class;
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Step 2. linkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Step 3. Add function(converted from the pseudocode)
  add(value) {
    const n = new Node(value); // created a new node with the given value;
    // also passing the value to the node.

    if (this.head == null) {
      // if list is empty
      this.head = n; // set head to the new node
      this.tail = n; // set tail to the new node tooo
    } else {
      this.tail.next = n; // link the old tail to the new node
      this.tail = n; // update tail to be the new node
    }
  }

  // for checking the list.
  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.value);
    }
  }
}

// using it.
const myList = new LinkedList();
myList.add(10);
myList.add(20);
myList.add(30);

myList.print();
