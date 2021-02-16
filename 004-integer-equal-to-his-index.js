// Integer Equal to It's Index
// You are given an array of non-negative integers as an argument. Return the first element found in the array whose index is equal to its value.

// Requirements
// Must return a single integer
// If there are multiple integers found must return only the first occurrence.
// Example #1
// solve([10, 20, 11, 12, 4])
// > 4

// We return 4 since it is also at index 4 of the array

// Example #2
// solve([2, 1, 11, 12, 4])
// > 1

// Both 1 and 4's values match their indexes in the array. We return 1 since it is the first occurrence.

const solve = (intArray) => {
  for (let i = 0; i < intArray.length; i++) {
    if (intArray[i] === i) {
      return intArray[i]
    }
  }
}

console.log(solve([10, 20, 11, 12, 4]))
console.log(solve([2, 1, 11, 12, 4]))
