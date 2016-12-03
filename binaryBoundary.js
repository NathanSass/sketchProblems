/*        5
     4        6
  1    4     5  0
         7  1 3
            9
   // resultArr
   // leftItems 
   // RightItems 6
   
   // loop structure
       
[5, 4, 1, 7, 9, 3, 0, 6, 5]  
   
   
[5, 4, 1, 7, 5, 0, 6, 5]

*/

function getBoundary(root) {
    var leftNodes = [root]
    var rightNodes = []
    var result = []
    
    //get left boundary
    var leftBoundary = root;
    while(leftBoundary != null) {
        result.push(leftBoundary.value);
        
        if(leftBoundary.left != null) {
            leftBoundary = leftBoundary.left
        } else if (leftBoundary.right != null) {
            leftBoundary = leftBoundary.right;
        } else {
            break;
        }
    }
    
    var rightItems = []
    var rightBoundary = root.right;
    while (rightBoundary != null) {
        result.push(rightBoundary.value);
        if(rightBoundary.right != null) {
            rightBoundary = rightBoundary.right
        } else if (rightBoundary.left != null) {
            rightBoundary = rightBoundary.left;
        } else {
            break;
        }
    }
    result.pop();
    
    // get leaf nodes
    while(leftNodes.length > 0 && rightNodes.length > 0) {
        var currentNode = null;
        if (leftNodes.length > 0) {
            currentNode = leftNodes.pop();
        } else {
            currentNode = rightNodes.pop();
        }
        
        if(currentNode.left != null) {
            leftNodes.push(currentNode.left);
        }
        
        if (currentNode.right != null) {
            rightNodes.push(currentNode.right)
        }
        
        if (currentNode.left == null && currentNode.right == null) {
            result.push(currentNode.value)
        }
        
    }
    result.pop();
    
    // add in right boundary items.
    return result.concat(rightItems.reverse());
}