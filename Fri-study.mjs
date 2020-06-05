// 5-find-words-that-can-be-formed-by-characters
//   You are given an array of strings words and a string chars.
//   A string is good if it can be formed by characters from chars (each character can only be used once).
//   Return the sum of lengths of all good strings in words.

function countCharacters(words, chars) {
  let length = 0;
  const map = {};
  for (let i = 0; i < chars.length; i += 1) {
    map[chars[i]] = map[chars[i]] ? map[chars[i]] += 1 : 1;
  }

  for (let j = 0; j < words.length; j += 1) {
    let mapCopy = { ...map };

    let possible = true;
    for (let k = 0; k < words[j].length; k += 1) {
      if (mapCopy[words[j][k]]) {
        mapCopy[words[j][k]] -= 1;
      } else {
        possible = false;
        break;
      }
    }

    if (possible) {
      length += words[j].length;
    }
  }


  return length;
}

let words1 = ["cat","bt","hat","tree"];
let chars1 = "atach";

let words2 = ["hello","world","leetcode"];
let chars2 = "welldonehoneyr";

console.log(countCharacters(words1, chars1)); // 6
console.log(countCharacters(words2, chars2)); // 10





// 6-unique-number-of-occurrences
//   Given an array of integers arr, 
//write a function that returns true if and only if the number of occurrences of each value in the array is unique.

function uniqueOccurrences(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i += 1) {
    map[arr[i]] = map[arr[i]] ? map[arr[i]] += 1 : 1;
  }
  const values = Object.values(map);
  const uniqueSet = new Set(values);
  return uniqueSet.size === values.length;
  
}

console.log(uniqueOccurrences([1,2,2,1,1,3])); // true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
console.log(uniqueOccurrences([1,2])); // false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); // true





// 7-lucky-numbers-in-a-matrix
//   Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
//   A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
function luckyNumbers(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let number = matrix[i][0];
    let index = 0;
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] < number) {
        number = matrix[i][j];
        index = j;
      }
    }
    let isMax = true;
    for (let k = 0; k < matrix.length; k += 1) {
      if (matrix[k][index] > number) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      result.push(number);
    }
  }
  return result;
}

let matrix1 = [[3,7,8],[9,11,13],[15,16,17]];
console.log(luckyNumbers(matrix1)); // [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

let matrix2 = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
console.log(luckyNumbers(matrix2)); // [12]
// // Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

let matrix3 = [[7,8],[1,2]]
console.log(luckyNumbers(matrix3)); // [7]

