// arrow function - спеціальний синтаксис визначення функцій
// у змінному increment знаходиться функція, яка приймає 
// один параметр і повертає його значення збільшенне на 1.
var increment = function (x) { return x + 1; };
var incrementArrow1 = function (x) { return x + 1; };
var incrementArrow2 = function (x) { return x + 1; };
var incrementArrow3 = function (x) { return x + 1; };
// варіанти синтаксису стрілочної функції, на 12 стр - неможливо визначити тип
// приклад використання стрілочних функцій як функціїї зворотнього виклику
var myFunc = function (callback) {
    callback(10);
};
myFunc(function (x) { return x + 1; });
//# sourceMappingURL=06-arrow-function.js.map