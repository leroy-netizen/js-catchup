// alert("Hello Access cohort 26 ");
// ?global scope
// var _firstName = "Leroy";
// console.log(_firstName);

// local scope
// function user() {
//   const player = "Ombiji;";
//   console.log(player);
// }
// user();
// console.log(player);

// Math Operators
// +
//

// Var
// possible to redeclare a variable
// possible to rweassign a variable

// let
// impossible to redeclare a variable
// possible to reassign a variable
// const firstName = "Michael";

// firstName = "Isaac";

// console.log(firstName);

// const num1 = 10;
// const num2 = 11;

// const sum = num1 + num2;
// const sub = num1 - num2;
// const rem = num1 % num2;
// const multi = num1 * num2;
// const divide = num1 / num2;

// console.log(sum);
// console.log(sub);
// console.log(multi);
// console.log(divide);
// console.log(rem);

// Logical operators
// AND - && only evaluates to true if both cases are true
// const firstName = "Leroy";
// const lastName = "Ombiji";

// if (firstName && lastName) {
//   console.log("Items Found");
// } else {
//   console.log("False");
// }

// OR - ||  evaluate to true if any of the choices is true
// if (firstName || lastName) {
//   console.log("Items Found");
// } else {
//   console.log("False");
// }
// NOT - !
// let lovesGaming = false;
// let yes = !lovesGaming;
// console.log(yes);

// Arrays - Methods unshift, shift, pop, push,,,, higher order methods forEach, map,for..in, for of loop

// const users = ["Leroy", "Ken", "Jennifer", "Nick", "Lenox", "Whitney"];

// users.map((user, index) => console.log(user));
// Functions

// Arrow function

// const ageCalculator = (birthYear) => {
//   let age = 2022 - birthYear;
//   return age;
// };
// console.log(ageCalculator(1985));
// const leroyAge = ageCalculator(1985);
// const steve = ageCalculator(2005);
// console.log(leroyAge, steve);

// console.log(ageCalculator(1985));  //Hoisting
// function ageCalculator(birthYear) {  //function declaration
//   let age = 2022 - birthYear;
//   return age;
// }
// const leroyAge = ageCalculator(1985);
// console.log(leroyAge);

// const ageCalculator = function (birthYear) { //function expression
//     let age = 2022 - birthYear;
//     return age;
// }
// Ways to target elements in html

// document.getElementById() targets an element by it's Id
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.getElementsByName()

// target element and change text content
// const hello = document.getElementById("hi");
// hello.textContent = "Hello Moringa School";

//
// const divClass = document.getElementById("main__container");
// divClass.innerHTML = `<h4> Niajeni Majamaa </h4>
// <p> Moringa Rocks</p>
// <p> Hakuna stipend this time round. Umieni</p>

// `;
//  const num1 = document.getElementById('num1')
// const num2 = document.getElementById('num2')

// const add = () => {

// }

// events
// mouseEvents
// clickEvents

// create a function

const add = () => {
  return inputItem.textContent + inputItem2.textContent;
};

const inputItem = document.getElementById("num1");
const inputItem2 = document.getElementById("num2");
btn.addEventListener("change", add);

inputItem.addEventListener("change", (e) => {
  console.log(e.target.value, add);
  inputItem.textContent = e.target.value;
  let num1 = inputItem.textContent;
});
// inputItem2.addEventListener('change', add);

// addEventListener("change", (event) => {});

// onchange = (event) => {};
