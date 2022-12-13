function hasTargetSum(array, target) {
  // Write your algorithm here
      const dispNumber = {};
  
    for (const number of array) {
      const newNumber = target - number;
      if (newNumber in dispNumber) return true;
      dispNumber[number] = true;
    }
  


return false;
}
/*Runtime: O(number^2)
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const newNumber = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === newNumber) return true;
    }
  }
*/

/* 
    hasTargetSum([1,2,3,4], 6)
  dispNumber = {
    1: true,
    2: true,
    3: true
  }
  create an object to keep track of numbers we've already displayed
  iterate through each number in the array
    for the current number, identify a newNuber that adds to the target (newNumber = target - num)
    check if any key on our object is the newNumber
      if so, return true
      otherwise, add that number to the object
  if we reach the end of the array, return false
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
