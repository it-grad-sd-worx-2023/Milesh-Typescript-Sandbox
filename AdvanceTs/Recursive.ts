interface TreeNode<T> {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
  }
  
  let tree: TreeNode<number> = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
      },
    },
    right: {
      value: 3,
    },
  };
  console.log(tree);
  