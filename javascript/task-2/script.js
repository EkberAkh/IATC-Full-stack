//1. Write program that will reverse string: 'Hello world' => 'dlrow olleH'

// function reverseString (str){

//     let reversedString = "";
//     for (let i = str.length; i >= 0; i--) {
//         reversedString += str.charAt(i)

//     }
//     return reversedString;
// }

// console.log(reverseString('Hello World'))

// 2.Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'

// function repeat3Times(str){
//     let repeatedString = '';

//     for (let i = 0; i < str.length; i++) {
//         const element = str[i]+str[i]+str[i];
//         repeatedString+= element
//     }
//     return repeatedString;
// }

// console.log(repeat3Times('Hello World!'))

// 3.Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'

// function repeatStr3Times(str,n){
//     let repeatStr =[`${str}`];
// let sumStr = ''
//     for (let i = 0; i < n; i++) {
//         const element = repeatStr[0];

//         sumStr += element
//     }
//     return sumStr
// }

// console.log(repeatStr3Times('Hello world',4))

// 

// 6.Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}


// function countStr(str){
//     count = {};

//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if(count[element]){
//             count[element]++;
//         }else{count[element]=1}
//     }
//     return count;
// }
// console.log(countStr('abacddbec'));


//7. Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'

// function truncateStr (str, n){
//     let truncatedStr = '';
//     let truncatedStrDots = ''

//     for (let i = 0; i < n; i++) {
//         const element = str[i];
//         truncatedStr += element

//     }
//     truncatedStrDots += truncatedStr + "..."
//     return truncatedStrDots;
// }

// console.log(truncateStr('Hello world',8))


// 9.Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15

// let array = [1, 2, 3, 4, 5,];

// function sumElements(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

// result += element

//     }
//     return result;
// }
// console.log(sumElements(array))

//10.Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3

// let array = [1, 2, 3, 4, 5,];

// function averageOfElements(array) {
// let result = 0;
// let averageResult;

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     result += element
//     averageResult = result/array.length;

// }
// return averageResult;
// }

// console.log(averageOfElements(array));

// 11.Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5

// let array = [1, 2, 3, 93,4, 5,9];

// function maxNumber (array) {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         const element = array[i];
//         if (array[i]>max) {
//             max = array[i]
//         }
//     }
//     return max;
// }

// console.log(maxNumber(array))

// 12.Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1

// let array = [1, 2, 3, 4, 5, 9];

// function maxNumber(array) {
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     const element = array[i];
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min;
// }

// console.log(maxNumber(array));

// 13.Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4

// let array = [1, 2, 3, 4, 5,6, 9];

// function secondMaxNumber(array) {
//   let firstMax = array[0];
//   let secondMax = array[0];
//   for (let i = 1; i < array.length; i++) {
//     const element = array[i];
//     if (array[i] > firstMax) {
//       firstMax = array[i];
//     }
//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];
//         if (array[j]>secondMax && array[j] < firstMax) {
//             secondMax = array[j];
//         }
//     }
//   }
//   return secondMax;
// }

// console.log(secondMaxNumber(array));

// 14.Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2

// let array = [1, 2, 3, 4, 5, 6, 9];

// function secondMinNumber(array) {
//   let firstMin =Infinity ;
//   let secondMin = Infinity;
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (array[i] < firstMin) {
//         secondMin == firstMin
//       firstMin = array[i];
//     } else if(array[i]<secondMin && array[i]!==firstMin){
//         secondMin = array[i];
//     }

//   }
//   return secondMin;
// }

// console.log(secondMinNumber(array));

// 15.Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}

// let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// function arrayCount(array) {
//     let arrayCount = {};
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//        if (arrayCount[element]) {
//         arrayCount[element]++;

//        }else{arrayCount[element] =1}

//     }
//     return arrayCount;
// }
// console.log(arrayCount(array))

// 16.Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9

// let array = [1, 2, 3, 4, 5];

// function sumOdd(array) {
//   let result = 0;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     if (element % 2 != 0) {
//       result += element;
//     }
//   }
//   return result;
// }

// console.log(sumOdd(array));

// 17.Create a program to find the sum of the even numbers in an array of numbers: [1, 2, 3, 4, 5] => 6

// let array = [1, 2, 3, 4, 5];

// function sumEven(array) {
//   let result = 0;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     if (element % 2 == 0) {
//       result += element;
//     }
//   }
//   return result;
// }

// console.log(sumEven(array));
