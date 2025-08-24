// what is the binary tree ?
// -> A binary tree is a tree where the every number has the most two children.

class BinaryNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const a = new BinaryNode("a");
const b = new BinaryNode("b");
const c = new BinaryNode("c");
const d = new BinaryNode("d");
const e = new BinaryNode("e");
const f = new BinaryNode("f");

a.right = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     a
//    / \
//   b   c
//  / \   \
// d   e   f
