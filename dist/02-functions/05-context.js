// this - контекст функції.
// this - змінна, яка встановлюється під час запуску функції.
function test1() {
    console.log(this);
}
test1(); // global object - Window
var someObj = {
    name: 'test',
    testFunc: test1,
};
someObj.testFunc(); // someObj
var someInstance = new test1(); // new instance
console.log(someInstance);
// Встановлення контексту функції, що викликається
function test2(x, y) {
    console.log(x + y);
    console.log(this);
}
var someTestObj = {
    name: 'test object',
};
test2.call(someTestObj, 10, 20); // Встановлення контексту, варіант 1
test2.apply(someTestObj, [30, 40]); // Встановлення контексту, варіант 2
var newFunc = test2.bind(someTestObj); // Встановлення контексту, варіант 3
newFunc(50, 60);
// варіанти синтаксису з методом bind:
// const newFunc = test2.bind(someTestObj, 50); 
// newFunc(60);
// const newFunc = test2.bind(someTestObj, 50, 60); 
// newFunc();
//# sourceMappingURL=05-context.js.map