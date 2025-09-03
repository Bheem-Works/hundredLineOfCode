// Start Time : 6:35;
const treeMinValue = (root) => {
  if (root.val === null) return Infinity;
  const leftMinValue = treeMinValue(val.left);
  const righMinValue = treeMinValue(val.right);
  return Math.min(root.val,leftMinValue,righMinValue);
};
