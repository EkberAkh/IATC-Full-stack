// 1. Write a JavaScript program to display numbers as words using ASCII code.
// example: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// --------------------------------
// let numbers = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
// let word = "";

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   let letters = String.fromCharCode(element);
//   word += letters;
// }
// console.log(word);
// ------------------------------

// let word = "Salam Azerbaycan"

// let ascii = ""

// for (let i = 0; i < word.length; i++) {
//   const element = word[i];
//   let letters = word[i].charCodeAt()
//   ascii += letters + " "

// }
// console.log(ascii.split(" "));

// -------------------------------

// 3. Write a JavaScript program to convert a string to an array of characters.
// example: hello world
// output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
// --------------------------
// let word = 'hello world'
// console.log(word.split(""))

// ----------------------------

// 4. Write a JavaScript program to drop the vowels from a string.
// example: hello world
// output: hll wrld

// let word = "hello world"

// console.log(word.replace(/[aiueo]/gi, ""))
// ---------------------------------------------------
// 5. Write a JavaScript program to check if a string contains only digits.
// example: 1234567890  // true
// example: 1234567890a // false

// function containsDigits(str) {
//     for (var i = 0; i < str.length; i++) {
//       if (isNaN(parseInt(str[i]))) {
//         return false;
//       }
//     }
//     return true;
//   }

//   console.log(containsDigits("13345a7890"));
//   console.log(containsDigits("1234561804"));

// ----------------------------------------

// 6. Write a JavaScript program to check if a string contains only digits and letters.
// example: 1234567890  // true
// example: 1234567890a // true
// example: 1234567890a!@#$%^&*()_+ // false

// function containsDigitLetter(str){
//     if (str.match(/[!@#$%^&*()_+]/gi)) {
//         return false;
//     }

//     return true;
// }

// console.log(containsDigitLetter('1234fs)'))
// console.log(containsDigitLetter('1234fs'))
// console.log(containsDigitLetter('1234'))

// -------------------------------------------

// 7. Write a JavaScript program to check if a string contains only uppercase letters.
// example: HELLO WORLD // true
// example: HELLO WORLD! // true
// example: HELLO WORLD!@#$%^&*()_+ // true
// example: HELLO WORLD!@#$%^&*()_+a // false

// function onlyUppercase(str) {
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];

//     if (element == element.toUpperCase()) {
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(onlyUppercase("HELLO WORLD!@#$%^&*()_+a"));

// ----------------------------------------------------


// 8. Write a JavaScript program to UpperCase the first letter of each word of a given string without spaces.
// example: hello world
// output: HelloWorld
// example: a man who thinks about the end, can not be a hero

// function upperCaseAndNoSpace(str){
//     result = '';
// let stringElements = str.split(" ");

// for (let i = 0; i < stringElements.length; i++) {
//     const element = stringElements[i];
//     let firstLetterUpper = element.charAt(0).toUpperCase();
//     let otherLetters = element.slice(1)
//     result += firstLetterUpper+otherLetters;

    
// }

//     return result;
// }
// console.log(upperCaseAndNoSpace('hello world'))








//--------------------------------------------------------
// 9. Write a JavaScript program to remove duplicate characters from a string.
// example: hello world
// output: helo wrd
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero

// function deleteDuplicates(str){
//     let result = '';
    


// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (result.indexOf(element) === -1) {
//         result  += element
//     }
// }
// return result;
// }
// console.log(deleteDuplicates('hello world'))
// -----------------------------------------------------

// 11. Write a JavaScript program to convert a string into snake case.
// example: hello world
// output: hello_world
// example: a man who thinks about the end, can not be a hero

// function snakeCase(str) {
//    let result = '';

//    for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (element.charCodeAt()==32) {
//         result+=element.replace(" ", "_")
//     }else(result+=element)

//    }

//    return result;
// }

// console.log(snakeCase('hello world'))
// console.log(snakeCase('a man who thinks about the end, can not be a hero'))

// ---------------------------------------------------------------

// 12. Write a JavaScript program to convert a string into kebab case.
// example: hello world
// output: hello-world
// example: a man who thinks about the end, can not be a hero
// example: javascript is bomba

// function kebabCase(str) {
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//      const element = str[i];
//      if (element.charCodeAt()==32) {
//          result+=element.replace(" ", "-")
//      }else(result+=element)

//     }

//     return result;
//  }

//  console.log(kebabCase('hello world'))
//  console.log(kebabCase('a man who thinks about the end, can not be a hero'))
// ---------------------------------------------------------------------------
// 13. Write a JavaScript program to check if a given string is a palindrome.
// palindromes: madam, civic, radar, level, rotor, kayak, reviver, racecar, redder, madam, refer
// example: hello world // false
// example: madam // true
// example: racecar // true

// function polindromeCheck(str) {
//   if (str.split("").join() === str.split("").reverse().join()) {
//     return true;
//   }

//   return false;
// }

// console.log(polindromeCheck("hello world"));
// console.log(polindromeCheck("madam"));
// -----------------------------------------------------------------------
// 14. Write a JavaScript program to check if a given string is a pangram.
// pangram: a sentence containing every letter in the English alphabet.
// example: The quick brown fox jumps over the lazy dog. // true
// example: The quick brown fox jumps over the dog. // false

// function pangramCheck(str) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const lowerCase = str.toLowerCase();

//     for (let i = 0; i < alphabet.length; i++) {
//         const element = alphabet[i];
//         if (lowerCase.includes(element)) {

//         }else{return false;}
//     }
//     return true;
// }

// console.log(pangramCheck('The quick brown fox jumps over the lazy dog'))
// console.log(pangramCheck('The quick brown fox jumps over the dog'))
// ---------------------------------------------------------------------

// 15. Write a JavaScript program to check if a given string is a anagram.
// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// example: cinema // iceman // true
// example: listen // silent // true
// example: hello // world // false

// function isAnagram(str1, str2) {

//    for (let i = 0; i < str2.length; i++) {
//     const element = str2[i];

//     if (str1.includes(element)) {

//     }else {return false}

//    }
// return true;

// }
// console.log(isAnagram('cinema','iceman'))
// console.log(isAnagram('listen','silent'))
// console.log(isAnagram('hello','world'))
