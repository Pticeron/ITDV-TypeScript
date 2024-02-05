// звичайна функція
function add1(x, y) {
    return x + y;
}
var result1 = add1({}, 2);
console.log(result1);
// Типізована функція. Приймає два аргументи типу number та повертає значення типу number
function add2(x, y) {
    return x + y;
    // return "hello world"
}
var result2 = add2(10, 20);
// const result2: number = add2(10); // очікується два параметри
// const result2: number = add2(10, "text"); // другий аргумент має бути числовим
// const result2: string = add2(10, 20); // результат роботи функції не може бути наданий рядковою змінною
console.log(result2);
//# sourceMappingURL=01-functions.js.map