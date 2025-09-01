// The breadht first value;

const breadhFirstValue = (root) => {
  if (root === 0) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return values;
};

/* 
The breadth-first-value visit all the nodes at the present depth prior to moving on to nodes at the next depth level.

The daigram of it -: 

            a
           / \
          b   c
         / \   \
        d   e   f


        The output : {a,b,c,d,e,f}; 
*/
