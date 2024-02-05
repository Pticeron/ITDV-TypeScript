// під час створення змінної можна вказати
// тип даних який визначає сигнатуру функції.
// параметри => тип, що повертається
// приймає два параметри типу number повертає значення number
var myAdd;
// змінною може бути присвоєно функцію, яка нічого не
// приймає і не повертає значень
var myProc;
function myAddDeclaration(x, y) {
    return x + y;
}
myAdd = myAddDeclaration;
console.log(myAdd(10, 20)); // виклик функції
myProc = function () {
    console.log('Hello world');
};
myProc(); // виклик функції
//# sourceMappingURL=02-function-type.js.map