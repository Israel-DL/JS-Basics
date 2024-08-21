
//1. Use of Console and comments

/* 
console.log('Heyyy'); 
*/

//2. Variables

/*var name = "Israel";
console.log(name);
*/

//3. Uses of Let & Const
// *****Instead of using "var" we can use "let" or "const"
// *****While using "let" we can update it, but we can't update while using "const"

/*
let age = 90;
age = 'Andrew'

const name = "Sam"
console.log(age, name);
*/

//4. Primitive Data Types

/*
let name = "Israel";
console.log(typeof name);

let age = 72;
console.log(typeof age);

let israel_is_20 = true;
console.log(typeof israel_is_20)

let colors;
console.log(typeof colors);

let selectColor = null;
console.log(typeof selectColor);
*/

//5. Reference Types: Object
/*
let user = {
    name : "Israel",
    age : 40,
    hobby : "Coding",
};

console.log(user);
console.log(user.name);
console.log(user['name']);
*/

//6. Reference Types: Arrays
/*
let vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);
console.log(vowels[0]);
console.log(typeof vowels); 
console.log(typeof vowels[0]); 
console.log(vowels.length); 
*/

//7. Reference Types: Functions

/*
function showMyname(){
    console.log("My name is Israel")
}
showMyname();
*/


//8. Function With Parameters and Arguements

/*
function myName(name){    // Note: 'name' is a Parameter
    console.log(name);
}

myName("Israel")         // Note: 'Israel' and 'Ken' are an arguements
myName("Ken")


function schoolName(name){
    console.log('My School name is '+ name );
}

schoolName("Anchor")   // Note: 'Anchor' and 'Bells' are an arguements
schoolName("Bells")



function addition(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result = addition(40, 10);
console.log(result);



function subtract(a, b){
    const minus = a - b;
    return minus;
}

const output = subtract(3, 4);
console.log(output);
*/

//9. Template Literals

/*
let name = 'Israel';
console.log(`My name is ${name}`);

console.log(`${90 + 100}`);

let message = `Welcome 
onboard 
Soldier`;
console.log(message);
*/





//10. JavaScript Arithimetic Operators

/*
let num1 = 10;
let num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
*/


//11. JavaScript Assignment Operators

let num1 = 10;
let num2 = num1;

console.log(num2);
console.log(num1, num2);
console.log(num1 + num2);
console.log(num2 + 5);