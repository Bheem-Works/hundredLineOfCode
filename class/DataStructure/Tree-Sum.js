// Start time : 10:53;
const treeSum = (root) => {
  if (root == null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.left);
};

// By using the depth-first-value;

const TreeSum = (root) => {
  if (root == null) return 0;
  let totalSum = 0;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return totalSum;
};
