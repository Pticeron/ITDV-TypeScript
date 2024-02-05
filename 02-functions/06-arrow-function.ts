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


function calculateIceCreamCost(): number {
  const smallIceCreamPrice: number = 10;
  const largeIceCreamPrice: number = 25;
  const toppingPrices: { [key: string]: number } = {
      'шоколад': 5,
      'карамель': 6,
      'ягоди': 10,
      'маршмелоу': 5
  };

  let size: string = prompt("Виберіть розмір морозива: великий або малий") || "";
  size = size.toLowerCase();

  if (size !== 'малий' && size !== 'великий') {
      alert("Невірний вибір розміру морозива!");
      return 0;
  }

  let toppings: string[] = prompt("Виберіть начинку через кому (шоколад, карамель, ягоди)").split(',').map(item => item.trim().toLowerCase());
  let additionalTopping: string = prompt("Чи бажаєте посипати маршмелоу? (так/ні)") || "";
  additionalTopping = additionalTopping.toLowerCase();

  let totalPrice: number = size === 'малий' ? smallIceCreamPrice : largeIceCreamPrice;

  toppings.forEach(topping => {
      if (toppingPrices[topping]) {
          totalPrice += toppingPrices[topping];
      } else {
          alert(`Невідома начинка: ${topping}`);
      }
  });

  if (additionalTopping === 'так') {
      totalPrice += toppingPrices['маршмелоу'];
  }

  return totalPrice;
}

const totalCost: number = calculateIceCreamCost();
alert(`Вартість морозива: ${totalCost} грн`);
