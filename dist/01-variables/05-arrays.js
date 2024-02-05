var year;
// let year: (string | number)[];
year = ['January', 'February', 'March', '...'];
// Type 'number' is not assignable to type 'string'.
// year = [1, 'January', 'February', 'March', '...'];
// масив може складатись з різного типу даних, які потрібно вказати через |
console.log(year);
var list = [1, 2, 3]; // визначення числового масиву та його ініціалізація
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
// створення масиву використовуючи generic тип даних Array
var values = [-1, -2, -3];
for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}
// вкладені масиви
// const nested: number[][] = [[1], [2], [3]];
var nested = [[1], [2], [3]];
for (var i = 0; i < nested.length; i++) {
    console.log(nested[i]);
}
//# sourceMappingURL=05-arrays.js.map