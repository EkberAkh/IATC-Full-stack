// Find next greatest letter among given letters after target letter. Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// let letters = ['s', 'z', 'k'];
// let target = 'a';
// result: 'k'

// let letters2 = ['s', 'z', 'k', 'a'];
// let target2 = 'k';
//  result: 's'

// let letters = ['a', 'w', 'k'];
// let target = 's';

// function greatestLetter(array,target){
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     if (target.charCodeAt()<element.charCodeAt()) {
//         return element;
//     }
    
// }
// return letters[0];
// }
// console.log(greatestLetter(letters,target))
// ------------------------------------------
// Find out if the object is empty or not
// let obj1 = {};
// result: object is empty

// let obj1 = {};

// function objectIsEmpty(obj){
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {

//             return false
//         }
//     }
//     return true;
// }

//  console.log(objectIsEmpty(obj1))
// ---------------------------------------------
// Clean nullish values from object

// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };
// result: {
//   key2: 0,
//   key3: 'string'
// }

// let obj = {
//   key1: null,
//   key2: 0,
//   key3: "string",
// };

// function cleanNull(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key) && obj[key] === null) {
//       delete obj[key];
//     }
//   }
//   return obj;
// }

// console.log(cleanNull(obj));
// Clean falsy values from object
// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };
// result: {
//   key3: 'string'
// }
//
// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };

// function cleanFalsy(obj) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key) && !obj[key]) {
//             delete obj[key];
            
//         }
//     }
//     return obj;
// }

// console.log(cleanFalsy(obj))