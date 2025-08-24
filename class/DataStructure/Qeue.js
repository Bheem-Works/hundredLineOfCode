// What is queue ?
// |-> A queue is a type of the data structure that store multiple collection of the items;
// -> Add to the back of hte queue (enqueue);
// -> it also remove the last of the queue(dequeue);
// -> Referes to the queue to the fifo;

// What queue actually use case for ?
// -> 1. For the fifo (firs in first out);
// -> 2. Tracking request for the limited resources;
// -> 3. Graph algorithm;

class NodeQueue {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MainQueue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new NodeQueue(val);

    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }

    this.removeNode = this.front;

    if (this.size === 1) {
      this.back = null;
    }

    this.front = this.front.next;
    this.size--;
    this.removeNode.val;
  }
}

const showNode = new MainQueue();
showNode.enqueue("a");
showNode.enqueue("b");
showNode.enqueue("c");
showNode.dequeue();
showNode.dequeue();
console.log(showNode.size); // 1;
