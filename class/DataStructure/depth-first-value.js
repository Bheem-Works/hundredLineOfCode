const depthFirstValue = (root) => {
  if (root === 0) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};


/* 
The depth-first-value; 
daigram; 

            a
           / \
          b   c
         / \   \
        d   e   f

        Output: {a,b,d,e,c,f}
*/
