// 1. // Create an object named "person" with properties: name, age, and occupation. // Add a method to the object that returns the person's full name.

//  let person ={
//     name: 'John',
//     age: '22',
//     occupation: 'Full-Stack Developer',

//     returnName(){
//         return person.name
//     }

//     }

//     console.log(person.returnName());
// ---------------------------------------------------------------------------
// 2. // Create an object named "math" with properties: PI, E, SQRT2, and random. // Use the math object to log a random number between 0 and 1 to the console.

// let math = {
//   PI: Math.PI,
//   E: Math.E,
//   random: Math.random().toFixed(1),
// };

// console.log(math.random);
// -----------------------------------------------------------------------------------------
// 3. // Create a string variable and store your full name in it. // Use the string method to convert the string to uppercase.

// let fullName = 'Akhundov Akbar';
// let uppercaseName = fullName.toUpperCase();

// console.log(uppercaseName);
// ---------------------------------------------------------------------------------
// 4. // Create a variable and assign it a number. // Use the Math object to round the number to the nearest integer.

// let num = 5.7;

// let nearestNum = Math.round(num);

// console.log(nearestNum);
// --------------------------------------------------------------------------------------------
// 5. // Create a variable and assign it a large number using BigInt. // Perform a mathematical operation (e.g., addition) on the BigInt number.

// let num1 = BigInt("53247538973922083280238");
// let num2 = BigInt("453249897439802280238");

// let operation1 = num1 + num2;
// let operation2 = num1 * num2;
// let operation3 = num1 / num2;

// console.log(operation1);
// console.log(operation2);
// console.log(operation3);
// ------------------------------------------------------------------------------------------
// 6. // Create a new Date object and store the current date and time. // Use the Date object methods to get the current month and year.

// let date = new Date();
// let currentMonth = date.getMonth();
// let currentYear = date.getFullYear();
// console.log(currentMonth);
// console.log(currentYear);
// -----------------------------------------------------------------------------------------
// 7. // Use the Math object to generate a random number between 1 and 10. // Calculate the square root of a given number using the Math object.

// let randomNum = Math.round(Math.random() * 10);
// let sqrtNum = Math.sqrt(randomNum);

// console.log({ randomNum, sqrtNum });
// --------------------------------------------------------------------------------------
// 8. // Create an object named "car" with properties: make, model, and year. // Add a method to the object that returns the car's full description.

// let car = {
//   make: "Mercedes",
//   model: "Mercedes-Benz C-Class",
//   year: "2016",

//   returnFullDescription() {
//     return `${car.make}, ${car.model}, ${car.year}`;
//   },
// };

// console.log(car.returnFullDescription());
// ---------------------------------------------------------------------------------
// 9. // Create a string variable and store a sentence in it. // Use the string method to check if the sentence contains a specific word.

// let sentence = "Man is the only creature who refuses to be what he is.";

// console.log(sentence.includes("Man"));
// console.log(sentence.includes("Hello"));
// -----------------------------------------------------------------------
// 10. // Create a variable and assign it a negative number. // Use the Math object to get the absolute value of the number.

// let num = -21;

// let absoluteValue = Math.abs(num);

// console.log({ num, absoluteValue });
// ---------------------------------------------------------------------------

// 11. // Create two Date objects representing different dates. // Use the Date object methods to calculate the difference between the two dates in days.

// let date1 = new Date(2003, 7, 15)
// let date2 = new Date(2003, 7, 23)

// let dayDiff = Math.abs((date1 - date2)/86400000 ); //1 day = 86400000 milliseconds

// console.log({dayDiff})
// ------------------------------------------------------------------------
// 12. // Make an object named "date" // Add properties: day, month, year // day: 1-31 => default: today // month: 1-12 => default: today // year: 1970-2023 => default: today // Add methods: getDay, getMonth, getYear // Add methods: setDay, setMonth, setYear // Add method: getFullDate (returns full date in format: DD.MM.YYYY using day, month, year) // Add method: setFullDate (parameter full date in format: DD.MM.YYYY, sets day, month, year) // Add method: toString (returns full date in format: DD.MM.YYYY)

// let date = {
//   day: new Date().getDate(),
//   month: new Date().getMonth() + 1,
//   year: new Date().getFullYear(),

//   getDay() {
//     return date.day;
//   },
//   getMonth() {
//     return date.month;
//   },
//   getYear() {
//     return date.year;
//   },
//   setDay(day) {
//     if (day >= 1 && day <= 31) {
//       date.day = day;
//     }
//   },
//   setMonth(month) {
//     if (month >= 1 && month <= 12) {
//       date.month = month;
//     }
//   },
//   setYear(year) {
//     if (year >= 1970 && year <= 2023) {
//       date.year = year;
//     }
//   },

//   returnFullDate(){
//     let monthEdit = String(this.month).padStart(2, '0');
//     let dayEdit = String(this.day).padStart(2, '0');
//     return `${dayEdit}.${monthEdit}.${date.year}`
//   },
//   setFullDate(inputDate){

//     let fullDate = inputDate.split('.');
//     let day = parseInt(fullDate[0], 10);
//     let month = parseInt(fullDate[1], 10);
//     let year = parseInt(fullDate[2], 10)

// this.setDay(day)
// this.setMonth(month)
// this.setYear(year)

//   },

//   toString(){
// return this.returnFullDate()
//   }
// };
// console.log(date.getMonth())
// console.log(date.setDay(5))
// console.log(date.setMonth(8))
// console.log(date.setYear(1987))

// console.log(date.returnFullDate());
// ----------------------------------------------------------------------
// 13. // Make an object named "math" // Add properties: PI, E, SQRT2 // Add methods: random (returns random number between 0 and 1)

// let math = {
//     PI: Math.PI,
//     E: Math.E,
//     SQRT2: Math.SQRT2,

//     getNumber(){
//         return (Math.random()).toFixed(1)
//     }
// }

// console.log(math.getNumber())
// ------------------------------------------------------------------------------------------
// 14. // create 5 objects with properties: title, count, price // ex: const product1 = { title: 'Pen', count: 1, price: 2 }; // create an array named "products" and add 5 objects to it // create an object named "cart" with property "products" (empty array) // add methods: addToCart, removeFromCart, getTotalPrice, getTotalCount // cart.addToCart(product1); returns: total count of products in cart // cart.addToCart(product1); returns: total count of products in cart // you can add same product maximum product.count times // cart.getTotalCount(); returns: 2 // cart.getTotalPrice(); returns: total price of all products in cart

// let product1 = {
//     title: 'Computer',
//     count: 5,
//     price: 1400
// }
// let product2 = {
//     title: 'Book',
//     count: 20,
//     price: 12
// }
// let product3 = {
//     title: 'Phone',
//     count: 30,
//     price: 800
// }
// let product4 = {
//     title: 'Tshirt',
//     count: 3,
//     price: 30
// }
// let product5 = {
//     title: 'Headphone',
//     count: 2,
//     price: 60
// }


// let products = [product1, product2, product3, product4,product5];

// let cart = {
//     products: [],
//      addToCart(product){
//         cart.products.push(product);
//         return cart.products

//     },
//     removeFromCart(product){
//         cart.products.pop(product);
//         return cart.products

//     },
//     getTotalCount(){
//         return cart.products.length
//     },
//     getTotalPrice(){
//         let totalPrice = 0;
//         for (const product of this.products) {
//             totalPrice += product.count * product.price
//         }
//         return totalPrice;
//     }
// }

// console.log(cart.addToCart(product1))
// console.log(cart.addToCart(product2))
// console.log(cart.addToCart(product3))
// console.log(cart.removeFromCart(product1))
// console.log(cart.getTotalCount())
// console.log(cart.getTotalPrice())

