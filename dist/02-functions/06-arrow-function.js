// arrow function - спеціальний синтаксис визначення функцій
// у змінному increment знаходиться функція, яка приймає
// один параметр і повертає його значення збільшенне на 1.
// const increment = function (x: number) { return x + 1; }
// const incrementArrow1 = (x: number) => { return x + 1; }
// const incrementArrow2 = (x: number) => x + 1;
// const incrementArrow3 = x => x + 1;
// // варіанти синтаксису стрілочної функції, на 12 стр - неможливо визначити тип
// // приклад використання стрілочних функцій як функціїї зворотнього виклику
// const myFunc = (callback: (x: number) => number): void => {
//     callback(10);
// }
// myFunc(x => x + 1)
// Завдання
// Використовуючи TS, створіть наступну функцію, яка розраховує вартість
// морозива: Магазин пропонує 2 розміри морозива:
// • Маленький стаканчик (10грн)
// • Великий стаканчик (25грн)
// • Морозиво доповнюється однією або декількома начинками (мінімум – однією):
// -шоколад (+5грн)
// -карамель (+6грн)
// -ягоди (+10грн)
//  Додатково морозиво (не обов'язково) можна посипати маршмелоу (+5грн).
// Вхідні параметри користувач вводить через prompt.
function calculateIceCreamCost() {
    var smallIceCreamPrice = 10;
    var largeIceCreamPrice = 25;
    var toppingPrices = {
        'шоколад': 5,
        'карамель': 6,
        'ягоди': 10,
        'маршмелоу': 5
    };
    var size = prompt("Виберіть розмір морозива: великий або малий") || "";
    size = size.toLowerCase();
    if (size !== 'малий' && size !== 'великий') {
        alert("Невірний вибір розміру морозива!");
        return 0;
    }
    var toppings = prompt("Виберіть начинку через кому (шоколад, карамель, ягоди)").split(',').map(function (item) { return item.trim().toLowerCase(); });
    var additionalTopping = prompt("Чи бажаєте посипати маршмелоу? (так/ні)") || "";
    additionalTopping = additionalTopping.toLowerCase();
    var totalPrice = size === 'малий' ? smallIceCreamPrice : largeIceCreamPrice;
    toppings.forEach(function (topping) {
        if (toppingPrices[topping]) {
            totalPrice += toppingPrices[topping];
        }
        else {
            alert("\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u043D\u0430\u0447\u0438\u043D\u043A\u0430: ".concat(topping));
        }
    });
    if (additionalTopping === 'так') {
        totalPrice += toppingPrices['маршмелоу'];
    }
    return totalPrice;
}
var totalCost = calculateIceCreamCost();
alert("\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(totalCost, " \u0433\u0440\u043D"));
//# sourceMappingURL=06-arrow-function.js.map