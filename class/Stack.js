// Link list by using the class;

class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      const pushedNode = new StackNode(val);
      console.log(pushedNode, "pushedNode"); // output : {val:'b',next:null};

      pushedNode.next = this.top;
      console.log("pushed.next", pushedNode.next); // ouput : Stacknode {val:'a',next : null};

      this.top = pushedNode;
      console.log(this.top, "this.top"); // ouptu : {val:'b',next : StackNode{val:'a',next:null}}
    }
    this.size++;
  }

  pop() {
    if (this.size == 0) return null;
    const poppedNode = this.top;
    console.log("poppedNodeValue", poppedNode); 
    this.top = this.top.next; // what about the ,next???
    this.size--;
    return poppedNode.val;
  }

  getTop() {
    return this.top.val;
  }
}

const linkList = new Stack();
linkList.push("a");
linkList.push("b");
console.log(linkList.pop());
console.log(linkList.size, "size");
