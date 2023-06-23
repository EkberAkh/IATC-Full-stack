//1.Check if input is array or not

// let variable1 = [];
// let variable2 = { length: 1 };
// let variable3 = new Array(1);

// console.log(
//  "var1: ", Array.isArray(variable1),
//  "var2: ", Array.isArray(variable2),
//  "var3: ", Array.isArray(variable3)
// );
// -----------------------------------------------

//2.Clone Array
// let array1 = [1, 2, 3];

// array1 === array2; // false
// array1[0] === array2[0]; // true

// function copy(array) {
//   let cloneArr = [...array];

//   return cloneArr;
// }
// let array2 = copy(array1);
// console.log(array2);
// console.log(array1 === array2);
// console.log(array1[0] === array2[0]);
//---------------------------------------------------------
//3. Deep clone array using recursive function
// let array1 = [{ name: 'John' }];

// function deepCopy(array) {
//  let cloneArray = [];
//  for (let i = 0; i < array.length; i++) {
//     cloneArray[i] = deepCopy(array[i]);

//  }
//  return cloneArray
// }

// let array2 = deepCopy(array1);
// console.log(array1 === array2) // false
// console.log(array1[0] === array2[0]) // false
// -----------------------------------------------------------
//4 Sort given number array like max, min, max, min...

// let array = [1, -4, 5, 6, -2, 0];

// let positiveNumbers = array.filter(num => num >= 0);
// let negativeNumbers = array.filter(num => num < 0);

// positiveNumbers.sort((a, b) => b - a);
// negativeNumbers.sort((a, b) => a - b);
// console.log(positiveNumbers)
// console.log(negativeNumbers)
// // Combine positive and negative arrays alternately
// let sortedArray = [];
// let maxLength = Math.max(positiveNumbers.length, negativeNumbers.length);

// console.log(maxLength);
// for (let i = 0; i < maxLength; i++) {
//   if (i < positiveNumbers.length) {
//     sortedArray.push(positiveNumbers[i]);
//   }
//   if (i < negativeNumbers.length) {
//     sortedArray.push(negativeNumbers[i]);
//   }
// }

// console.log(sortedArray);

// ------------------------------------------------------------------

//5 Create a function to create array from given parameters
// ??????????????????
// function range(start=1, stop=10, step=1) {
//     let rangedArr = [start, stop, step];
//     return rangedArr
//    }

//    // default start is 1
//    // default stop is 10
//    // default step is 1

//   console.log(range(7))  // [7, 8, 9]
//    range(2020, 2023); // [2020, 2021, 2022]
// -------------------------------------------------------
//6 Create a function to calculate sum of all numbers in a given array or parameters list

// function sum (...arr){
// let nums = []

// if(Array.isArray(arr[0])){
//     nums = arr[0]
// }else{
//     nums = arr
// }
//  let allSum = 0;
//  for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if ( typeof element === 'number') {
//         allSum+= element;
//     }

//  }

// return allSum;
// }
// console.log(sum([1, 2, 3])); // 6
// console.log(sum([1, 2, 3, 'hello', true])); // 6
// console.log(sum(1, 2, 3)); // 6
// ------------------------------------------
//7 Create a function called random to get random integer between min and max

// random(7); // 99
// random(1, 5); // 4
// random(1, 5); // 2
// random(1, 5); // 1
// random(-Infinity, Infinity); // 1_312_221_741

// function random(a = -2_147_483_648, b = 2_147_483_647) {
//   let maxNum = Math.max(a, b);
//   let minNum = Math.min(a, b);
//   let number = Math.round(Math.random() * (maxNum - minNum) + minNum);
//   return number;
// }

// console.log(random(2, 6));

//8 Create a function called round

// function round (num,prec=2){
// let roundNum = num.toFixed(prec)
// return roundNum
// }

// console.log(round(2.1425))
// console.log(round(2.1425, 3))

//9 Create a function called arithmeticMean

// function arithmeticMean(args) {
//   let result = args.reduce((acc, num) => {
//     acc += num

//     return acc
//   },0);

//   return result/args.length

// }
// console.log(arithmeticMean([1, 2, 3, 4, 5]));
// console.log(arithmeticMean([1, 5]));
// console.log(arithmeticMean([3, 3, 3, 3]));

// arithmeticMean([1, 2, 3, 4, 5]); // 3
// arithmeticMean([1, 5]); // 3
// arithmeticMean([3, 3, 3, 3]); // 3
// ---------------------------------------------------
//10 Create a function called geometricMean, which calculates arithmetic mean, and returns rounded value

// function geometricMean(arr){
//     let result = arr.reduce((acc, num) => {
//             acc *= num

//             return acc
//           });

//           return (result**(1/arr.length)).toFixed(2)

//         }

// console.log(geometricMean([1, 2, 3, 4, 5]))
// console.log(geometricMean([5, 5, 5]))

// geometricMean([1, 2, 3, 4, 5]); // 2.61
// geometricMean([1, 5]); // 2.24
// geometricMean([5, 5, 5]); // 5
// -------------------------------------------------
//11 Create a function called unique

// function unique(arr) {
//   let result = arr.reduce((acc, num) => {
//     if (!acc.includes(num)) {
//       acc.push(num);
//     }

//     return acc;
//   }, []);

//   return result;
// }

// console.log(unique([1, 1, 1, 5]));
// console.log(unique([5, 5, 5]));

// unique([1, 1, 1, 5]); // [1, 5]
// unique([5, 5, 5]); // [5]
// unique([1]); // [1]
// ---------------------------------------------
//12 Create a function called naturalSum, it should be recursive function

// function naturalSum(num){
//     if(num ===1){
//         return 1;
//     }
// return num + naturalSum(num-1)
// }

// console.log(naturalSum(3))

// naturalSum(3); // 1 + 2 + 3 => 6
// naturalSum(6); // 1 + ... + 6 => 21
// naturalSum(9); // 1 + ... + 9 => 45

//13 Make a function called flat to falt array of any nested arrays

// function flat (arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         if(Array.isArray(element)) {
//             newArr = newArr.concat(flat(element))

//         }else(newArr.push(element))

//     }
//     return newArr;
// }

// console.log(flat([1, 2, [3, 4]]))

// ; // [1, 2, 3, 4]
// flat([1, 2, [3, 4, [5, 6]]]); // [1, 2, 3, 4, 5, 6]
// flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ------------------------------------------------------
//14 Extend previous function to accept nesting level

// function extendedFlat (arr,level){

//     let newArr = []
//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];

//             if(Array.isArray(element)&&level >1) {
//                 newArr = newArr.concat(extendedFlat(element,level-1))

//             }else(newArr.push(element))

//         }
//         return newArr;

// }

// console.log(extendedFlat([1, 2, [3, 4, [5, 6]]], 1))
// flat([1, 2, [3, 4, [5, 6]]], 1); // [1, 2, 3, 4, [5, 6]]
// flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
// ------------------------------------------------------------------------
//15 Make a function called collectString to collect all strings from nested keys

// function collectStrings(deepObject) {
//     let strArray = []
//     for (let key in deepObject) {
//         if (typeof deepObject[key] === 'string') {
//             strArray.push(deepObject[key])
//         }
//         if(typeof deepObject[key] === 'object') {
//             strArray = strArray.concat(collectStrings(deepObject[key]));
//         }
//     }
//     return strArray
//     }
//     const obj = {
//      stuff: "foo",
//      data: {
//       val: {
//        thing: {
//         info: "bar",
//         moreInfo: {
//          evenMoreInfo: {
//           weMadeIt: "baz"
//          },
//         },
//        },
//       },
//      },
//     };
//    console.log(collectStrings(obj)) ; // ["foo", "bar", "baz"]
// ------------------------------------------------------------
//16 Make random password generator functions

// function passwordGenerator(elements,secondElements=[]){
//     return function generator(length){

//         let password = '';
//         let fullElements = elements.concat(secondElements);
//         for (let i = 0; i < length; i++) {
//             let random = Math.round((Math.random() * fullElements.length));
//             console.log(random);

//             password += fullElements[random]

//         }

//         return password
//     }
// }

// const generator1 = passwordGenerator(['A', 'a', '9', '@', ' '], ['💕', '💣']);
// console.log(generator1(5)); // "@Za9💕"

// console.log(generator1(9));

//17 Make ceaserCipherGenerator and ceaserCipher functions

// function ceaserCipherGenerator(alphabet){
//     return function ceaserCipher(text, shifting){

//         let result = '';
//         for (let i = 0; i < text.length; i++) {

//             if (alphabet.includes(text[i])) {
//                 let textIndex = alphabet.indexOf(text[i]);
//                 let shiftingIndex = textIndex + shifting
//                 let shiftingText = alphabet[shiftingIndex]
//                 result += shiftingText
//             }else {result+=text[i]}

//         }
// return result
//     }
// }

// const ceaserCipher = ceaserCipherGenerator('abcdefghijklmnopqrstuvwxyz');

// console.log(ceaserCipher('hello', 4)); // Output: "Lipps"
// console.log(ceaserCipher('attack to roma', 4)); //exxego xs vsqe

//18 Make diff function to find difference between objects

// function diff(arg1, arg2) {
//   if (typeof arg1 === "object" && typeof arg2 === "object") {
//     if (Array.isArray(arg1) && Array.isArray(arg2)) {
//       return arg2.filter((item) => !arg1.includes(item));
//     } else {
//       const result = {};
//       for (let key in arg2) {
//         if (!arg1.hasOwnProperty(key) || arg1[key] !== arg2[key]) {
//           result[key] = arg2[key];
//         }
//       }
//       return result;
//     }
//   } else if (typeof arg1 === "string" && typeof arg2 === "string") {
//     return arg2.slice(arg1.length);
//   } else {
//     return null;
//   }
// }

// console.log(diff({ name: "Jack", age: 22 }, { name: "John", age: 22 }));
// console.log(diff([1, 2, 3], [1, 2, 3, 4, 5])); // Output: [4, 5]

//19 Find missing number in the array

// const array1 = [1, 5, 4, 2];
// const array2 = [10, 3, 5, 9, 7, 1, 2, 6, 4];

// function findMissing(array) {
//     const n = array.length + 1;
//     const totalSum = (n * (n + 1)) / 2;
//     const arraySum = array.reduce((sum, num) => sum + num, 0);
//     return totalSum - arraySum;
//   }
  

  
//   console.log(findMissing(array1)); //  3
//   console.log(findMissing(array2)); //  8
  



//20 Find distance, elevation and angle between given coordinates

// function calculateDistance(coord1, coord2) {
//     let dx = coord2.X - coord1.X;
//     let dy = coord2.Y - coord1.Y;
//     let dz = coord2.Z - coord1.Z;
  
//     let distance = Math.sqrt(dx ** 2 + dy ** 2);
//     let elevation = coord2.Z - coord1.Z;
//     let angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
//     return { distance, elevation, angle };
//     }
    
//     // Coordinates:
//     const coord1 = {
//     X: 5573283,
//     Y: 6309750,
//     Z: 191.5,
//     };
//     const coord2 = {
//     X: 5573791,
//     Y: 6323798,
//     Z: 132.2,
//     };
    
//     const coord3 = {
//     X: 5573283,
//     Y: 6309750,
//     Z: 191.5,
//     };
//     const coord4 = {
//     X: 5573791,
//     Y: 6323798,
//     Z: 132.2,
//     };
    
//     calculateDistance(coord1, coord2); // { distance: 14057, elevation: -59, angle: 88 }
//     calculateDistance(coord3, coord4); // { distance: 19457, elevation: 419, angle: -134 }
