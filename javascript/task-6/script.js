//1.Make a constructor function. Check it with instanceof operator
// function User(name = "Noname", age = 0) {
//   this.name = name;
//   this.age = age;
// }

// const user = new User("Akbar", 19);
// console.log(user.name, user.age);
// console.log("user instanceof User", user instanceof User); // true

//2.Write two functions, one for constructing User, other for Employee. Employee instance should be instance of User too
// function User(name = "noname", age = 0) {
//   this.name = name;

//   this.age = age;
// }
// function Employee(name = "noname", salary = 0) {
//   this.name = name;
//   this.salary = salary;
// }

// Employee.prototype = Object.create(User.prototype);

// const e = new Employee();

// console.log("e instanceof Employee", e instanceof Employee); // true
// console.log("e instanceof User", e instanceof User); // true

// 3.Make function, which can create a new object with new keyword. But object should be instance of another object
// function User() {}
// function Weirdo() {}
// function createInstance(constructor, instanceOf) {
//     const instance = new constructor();
//     Object.setPrototypeOf(instance, instanceOf.prototype);
//     return instance;
//   }

// const weirdo = createInstance(Weirdo, User);
// console.log('weirdo instanceof Weirdo', weirdo instanceof Weirdo); // false
// console.log('weirdo instanceof User', weirdo instanceof User); // true

//4.Use generator function to generate 'count' numbers from 'start'
// function* rangeGenerator(start, count, step=1   ) {
//     for (let i = 0; i < count; i++) {
//   yield start + i * step;      
// }}

// function range(start=0, count=10, step=1) {
//     return [...rangeGenerator(start, count, step)]
// }

// console.log(range()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(range(1));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(2020,3)); // [2020, 2021, 2022]

//5.Make a function to return array of last 3 years: {years: month[]} or {years: quarters[]} or years[]
//   // type Year = 1970 ...;
//   // type Month = 0 ... 11;
//   // type Quarter = 1 ... 4;

//   function lastThreeYears(date, mode = 'year') {
//     const currentYear = date.getFullYear();
//     const years = Array.from({ length: 3 }, (_, index) => currentYear - index);
  
//     if (mode === 'year') {
//       return years;
//     }
  
//     const result = {};
  
//     years.forEach((year) => {
//       if (mode === 'month') {
//         result[year] = Array.from({ length: 12 }, (_, index) => index);
//       } else if (mode === 'quarter') {
//         result[year] = Array.from({ length: 4 }, (_, index) => index + 1);
//       }
//     });
  
//     return result;
//   }

//   const date = new Date(2023, 5, 30);

//   console.log(lastThreeYears(date,'year'));
//   // const res = [2020, 2021, 2022]

//  console.log(lastThreeYears(date, 'year')) ;
//   // const res = [2020, 2021, 2022]

//   console.log(lastThreeYears(date, 'month'));
//   // const res = {
//   //   2020: [6, 7, 8, 9, 10, 11],
//   //   2021: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//   //   2022: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//   //   2023: [0, 1, 2, 3, 4, 5],
//   // }

//  console.log(lastThreeYears(date, 'quarter')) ;
//   // const res = {
//   //   2020: [2, 3, 4],
//   //   2021: [1, 2, 3, 4],
//   //   2022: [1, 2, 3, 4],
//   //   2023: [1],
//   // }

//   //6.What will we see in console
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     });
//   }).then(() => {
//     console.log('promise');
//   });

//   setTimeout(() => {
//     console.log('timeout');
//   });

//   console.log('hello');

//   requestIdleCallback(() => {
//     console.log('requestIdleCallback');
//   });


//   // we will see: hello,promise,timeout,requestIdleCallback

// 7.What will we see in console
//   setTimeout(() => console.log('timeout 1'));

//   Promise.resolve().then(() => setTimeout(() => console.log('timeout 2')));

//   Promise.resolve().then(() => console.log('promise 1'));

//   Promise.resolve().then(() => console.log('promise 2'));

//   setTimeout(() => console.log('timeout 3'));


  // we will see: promise 1,promise 2,timeout 1 ,timeout 3,timeout 2 

 //8. What will we see in console
  // globalThis.name = 'foo';

  // function log(name) {
  //   debugger
  //   new Function('\tconsole.log(name);')();
  // }

  // log('bar');
  // log('salam');

  // //we will always see 'foo' in console




//9.What will we see in console
//   const obj = {
//     name: 'foo',
//     log: function () {
//       console.log(this.name);
//     },
//   };

//   const log = obj.log;

//   log();

//   //we will see: nothing 

// 10.Write this function to make it work
//   const person = {
//     name: 'foo',
//     age: 20,
//     [Symbol.toPrimitive](hint) {
//       if (hint==='number') {
//         return this.age
//       }
//       if (hint==='string') {
//         return this.name
//       }
//       return `${this.name} is ${this.age > 18 ? 'adult' : 'child'}`;
//     },
//   };

//   console.log(Number(person) + 10); // 30
//   console.log(`${person} is ${Number(person) > 18 ? 'adult' : 'child'}`); // 'foo is adult'