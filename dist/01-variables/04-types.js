// Boolean
var isDone = false;
// isDone = 1; // Type 'number' is not assignable to type 'boolean'
isDone = true;
console.log(isDone);
//  Number
var a1_int = 10;
var a2_float = 10.1;
var a3_hex = 0x000a;
var a4_binary = 10;
var a5_octal = 10;
console.log(a1_int);
console.log(a2_float);
console.log(a3_hex);
console.log(a4_binary);
console.log(a5_octal);
// String
var firstName = "Ivan";
var age = 25;
var messageTemplate = "Hello, my name is ".concat(firstName, " I'm ").concat(age, " years old."); // template string
var messageConcat = 'Hello, my name is ' + firstName + " I'm " + age + ' years old.'; // concatenation
console.log(messageTemplate);
console.log(messageConcat);
// age .
// firstName .
//  - звернення до властивості з крапкою показує доступні методи для цього типу властивості
// Symbol
// потрібно додати в tsconfig.json "lib": ["dom", "es2015"]
var mySymbol1 = Symbol('typescript');
console.log(mySymbol1);
var mySymbol2 = Symbol('typescript');
console.log(mySymbol2);
console.log(mySymbol1 === mySymbol2);
//# sourceMappingURL=04-types.js.map