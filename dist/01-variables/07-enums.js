// enum - перелік, тип даних, який дозволяє
// набору цілих значень задати імена.
// За замовчанням перерахування нумерують
// свої елементи починаючи з 0
// Red = 0, Green = 1, Blue = 2
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Green;
console.log(c1);
// кожному елементу перерахування явно встановлюється значення
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Error"] = 5] = "Error";
    Status[Status["Rejected"] = 10] = "Rejected";
})(Status || (Status = {}));
var c2 = Status.Success;
console.log(c2);
// оскільки першому елементу явно встановлено значення 2,
// всі наступні продовжуватимуть нумерацію з 2
// Circle = 2, Triangle = 3, Square = 4
// enum Shape {
//     Circle = 2,
//     Triangle,
//     Square,
// }
// const c3: Shape = Shape.Square;
// console.log(c3);
var Shape;
(function (Shape) {
    Shape["Circle"] = "circle";
    Shape["Triangle"] = "triangle";
    Shape["Square"] = "square";
})(Shape || (Shape = {}));
var c3 = Shape.Square;
console.log(c3);
// звертаючись до перерахування через індексатор та
// вказуючи ціле значення можна отримати рядкове
// представлення цього значення
var c4 = Status[1];
console.log(c4);
///////////////////////////////////////////////////////////////////////
// Приклад використання перерахувань
///////////////////////////////////////////////////////////////////////
function drawImage1(fruit) {
    var domElement = document.createElement('img');
    switch (fruit) {
        case 0:
            domElement.src = '/images/apple.jpg';
            break;
        case 1:
            domElement.src = '/images/orange.jpg';
            break;
        case 2:
            domElement.src = '/images/tomato.jpg';
            break;
    }
    document.body.appendChild(domElement);
}
drawImage1(2); // створити зображення з яблуком (не очевидно)
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Orange"] = 1] = "Orange";
    Fruit[Fruit["Tomato"] = 2] = "Tomato";
})(Fruit || (Fruit = {}));
function drawImage2(fruit) {
    var domElement = document.createElement('img');
    switch (fruit) {
        case Fruit.Apple:
            domElement.src = '/images/apple.jpg';
            break;
        case Fruit.Orange:
            domElement.src = '/images/orange.jpg';
            break;
        case Fruit.Tomato:
            domElement.src = '/images/tomato.jpg';
            break;
    }
    document.body.appendChild(domElement);
}
drawImage2(Fruit.Apple); // створити зображення апельсина (код, що самодокументується)
//  в другому випадку ми пишемо декларативний код, зрозумілий іншим розробникам
//# sourceMappingURL=07-enums.js.map