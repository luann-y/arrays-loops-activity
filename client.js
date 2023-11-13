/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

hobbies = ['sky diving', 'nature', 'fishing', 'boating'];
i = 0;
while (i < hobbies.length){
     console.log(hobbies[i]); i++;
}

console.log('hobbies length', hobbies.length);


//PRACTICE 

// hobbies = ['basketball', 'running', 'climbing', 'cavediving'];
// i = 0;

// while (i <hobbies.length){
//      console.log(hobbies[i]); i++;
// }



// hobbies = ['music', 'adventure', 'game'];
// i = 0;
// while (i<hobbies.length){
//      console.log(hobbies[i]); i++;
// }

//PRACTICE

// let hobbies = ['hiking', 'partying', 'sleeping'];
// console.log(hobbies);

// let i= 0;

// while(i<hobbies.length){
//      console.log(hobbies[i]); i++;
// }
// console.log(hobbies.length);


// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

const colors = ['red', 'purple', 'grey', 'teal', 'teal', 'teal'];
let tealCount = 0;
i = 0;

for (i; i < colors.length; i++){
     if (colors[i] === 'teal'){ // the { } tells you the beginning of the block code that should be run if this condition is true.
          tealCount++; // this counts the teal and increments by 1
     }// this ends the "to do something" if the color is teal
}

console.log('Teal Count', tealCount);

//PRACTICE

// const colors = 'red'; 'blue'; 'green';
// let tealCount = 0;
// i = 0;

// for (i= 0; i < colors.length; i++){
//      if(colors[i] === 'teal');
//      tealCount++; //if the condition is true, increment teal count by 1
// }

// console.log('Teal Count', tealCount);

//PRACTICE

// let colors = ['red', 'teal', 'green'];

// let tealCount = 0;

// i = 0;

// while (i < colors.length){
//      if (colors[i] === 'teal'){
//           tealCount++;

//      };
// i++
// }

// console.log(tealCount);


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

const numbers = [0, 4, 6, 3, 1, 10, 67, 198];
let oddNumbers = [];
let evenNumbers = [];

console.log(numbers);

for (i = 0; i < numbers.length; i++){
     if (numbers[i] % 2 !== 0){
          oddNumbers.push(numbers[i]); //uses .push(numbers[i]) vs oddNumbers++ because odd numbers is an array, not numerical value
     }
     else {
          evenNumbers.push(numbers[i]);
     }
}

console.log('Odd Numbers', oddNumbers);
console.log('Even Numbers', evenNumbers);

///PRACTICE///

// const numbers = [3, 0, 2, 9, 1, 8];
// let oddNumbers= [];
// let evenNumbers= [];

// for (i = 0; i < numbers.length; i++){
//      if (numbers[i] % 2 === 0){
//           evenNumbers++;
//      }
//      else {
//           oddNumbers++;
//      }
// }

// console.log('Even Numbers', evenNumbers);
// console.log('Odd Numbers', oddNumbers); 

//PRACTICE
// let numbers = [1, 5, 8, 0];

// let oddNumbers = [];
// let evenNumbers = [];

// let number = 4; 
// console.log(number%2);

// i = 0;

// while (i < numbers.length){
//      if (numbers[i] % 2 === 1){
//          oddNumbers.push(numbers[i]);
//      }
//      console.log(oddNumbers);
//      else {
//           evenNumbers.push(numbers[i]);
//       }
//       console.log(evenNumbers);
// i++
// }


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


const boolean = [true, false, false, true, false, false];
let toggled = []

for (i = 0; i < boolean.length; i++){
     toggled.push(!boolean[i]); //! means not. you are putting these in the empty toggled array
     }                             // notice we didn't use push++ because it's not a count. 


console.log('Boolean', boolean);
console.log('Opposite Values', toggled);


//PRACTICE
// let boolean = [true,false,false,true,true];
// let toggled = [];
// i = 0;

// for(i =0; i<boolean.length; i++){

//      if (boolean[i] === true){
//         console.log(boolean[i]);
//         toggled.push(boolean[i])
//   }
//   console.log(toggled);
// }



// let boolean = [true,false,false,true,true];
// let toggled = [];
// i = 0;

// for(i =0; i<boolean.length; i++){

//      if (boolean[i] === true){
//         console.log(boolean[i]);
//         toggled.push('false')
//   }
//      else {
//           toggled.push('true');
//      }
//   console.log(toggled);
// }
// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */

const numbers2 = [0, 10, 39, 124, 30, 15, 120, 0, 0];
i = 0;
console.log('Normal numbers list', numbers2);

while (numbers2 [numbers2.length -1] === 0){
     numbers2.pop();
}


console.log('Numbers popped', numbers2);

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
