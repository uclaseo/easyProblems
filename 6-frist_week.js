
// No. 1
//Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. 
//The function returns the number which is a duplicate or undefined if there are no duplicates.

const findTheDuplicate = (array) => {
  const result = [];
  const map = {};

  for (let i = 0; i < array.length; i += 1) {
    const currentNumber = array[i];
    const isDuplicate = map[currentNumber];

    if (isDuplicate) {
      result.push(currentNumber);
    } else {
      map[currentNumber] = true;
    }
  }

  return result.length === 0 ? undefined : result;
};

// time complexity: O(N)
// space complexity: O(1) if not assign currentNumber and isDuplicate

// Examples:

console.log(findTheDuplicate([1,2,1,4,3,12])) // 1
console.log(findTheDuplicate([6,1,9,5,3,4,9])) // 9
console.log(findTheDuplicate([2,1,3,4])) // undefined






// No. 2
//Write a function called findGreaterNumbers which accepts an array and returns the number of times a number is followed by a larger number. 

//Note that the numbers don't need to be next to each other in the array. 
//Any pair where the second number comes later in the array and is also the larger number should count.

const findGreaterNumbers = (array) => {
  let count = 0;

  for (let i = 0; i < array.length - 1; i += 1) {
    const currentNumber = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      const comparedNumber = array[j];
      if (currentNumber < comparedNumber) {
        count += 1;
      }
    }

  }

  return count;
};

// time complexity: O(N^2)
// space complexity: O(1) if not assign currentNumber and comparedNumber


console.log(findGreaterNumbers([1,2,3])) // 3 (2 > 1, 3 > 2, and 3 > 1)
console.log(findGreaterNumbers([6,1,2,7])) // 4
console.log(findGreaterNumbers([5,4,3,2,1])) // 0
console.log(findGreaterNumbers([])) // 0





// No. 3
//Dogs don't get along with cats, and cats don't get along with dogs. 
//What they both have in common is that they don't get along with water (baths). 
//Given an array of 'dogs', 'cats', and 'water', write a function called separate, 
//which returns a new array so that the dogs are separated from the cats by water.
// Make sure that cats always come first in the array.

//You can assume that the array will always at least three elements, and 
//that there'll always be at least one dog, one cat, and one water to work with. //

const separate = (array) => {
  const cats = [];
  const water = [];
  const dogs = [];

  for (let i = 0; i < array.length; i += 1) {
    const currentElement = array[i];
    if (currentElement === 'cat') {
      cats.push(currentElement);
    } else if (currentElement === 'water') {
      water.push(currentElement);
    } else if (currentElement === 'dog') {
      dogs.push(currentElement);
    };
  }

  return [ ...cats, ...water, ...dogs ];
};

// time complexity: O(N)
// space complexity: O(1) if not assign currentElement

console.log(separate(['dog','cat','water'])) // ['cat','water','dog']

console.log(separate(['dog','cat','water','cat']))// ['cat', 'cat', 'water', 'dog'])

console.log(separate(['cat','cat','water','dog','water','cat','water','dog'])) 
  // ['cat','cat','cat','water','water','water','dog','dog']

  console.log(separate(
   ['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'dog','water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water'
]))

 // ['cat','cat','cat','cat','cat',
    // 'cat','cat','cat','cat','cat','cat',
    // 'cat','cat','cat','cat','cat','cat','cat',
    // 'water','water','water','water','water',
    // 'water','water','water','water','water','water',
    // 'water','water','water', 'dog']
 




// No.4
// Given a string of words, your goal is to find the highest scoring word in the string. 
//a is worth 1 point, b is worth 2 points, c is worth 3 points, and so on, all the way up until z, which is worth 26 points. 
//You can assume that strings will consist only of lowercase letters and spaces.
// In the event that two words have the same score, return the word that appears first in the string.

const highestScoringWord = (string) => {
  const words = string.split(' ');
  let highestWord = words[0];
  let highestScore = 0;

  for (let i = 0; i < words.length; i += 1) {
    const currentWord = words[i];
    let currentScore = 0;

    for (let j = 0; j < currentWord.length; j += 1) {
      currentScore += currentWord.charCodeAt(j) - 96;
    }

    if (currentScore > highestScore) {
      highestWord = currentWord;
      highestScore = currentScore;
    }
  }

  return highestWord;
};

// time complexity: O(N)
// space complexity: O(1) if not assign currentWord and currentScore

console.log(highestScoringWord("a b c d e f")); // "f"
console.log(highestScoringWord("a b c d e f")); // "f"
console.log(highestScoringWord("hello world")); // "world"
console.log(highestScoringWord("go ahead make my day")); // "my"
console.log(highestScoringWord("there is no place like home")); // "there"
console.log(highestScoringWord("aaaaaa bbb cc f")); // "aaaaaa"
console.log(highestScoringWord("bbb cc f aaaaaa")); // "bbb"
console.log(highestScoringWord("this sentence has two highest scoring words")); // "sentence"

