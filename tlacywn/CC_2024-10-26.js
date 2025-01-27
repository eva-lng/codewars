/* Binary trees comparison

Compare two binary trees to see if they are equal in both shape and structure
*/

function compare(a, b) {

  // structural check
  if (a === null && b === null) {
    return true;
  }

  // structural check
  if (a === null || b === null) {
    return false;
  }

  // value check
  if (a.value !== b.value) {
    return false;
  }

  return compare(a.left, b.left) && compare(a.right, b.right);
}