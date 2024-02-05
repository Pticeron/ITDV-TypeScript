// У TypeScript всі параметри функції обов'язкові.
// але якщо після імені параметра вказати символ '?'
// параметр стане опціональним, і якщо під час
// виклику його не надати
// значення цього параметра буде undefined
// Опціональні параметри можуть бути лише останніми
// параметрами у списку параметрів.
// optional parameters
function getFullName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var fullName1 = getFullName('Ivan', 'Ivanov');
var fullName2 = getFullName('Ivan');
console.log(fullName1);
console.log(fullName2);
// Параметри зі значенням за умовчанням - параметри методу,
// котрим у оголошенні функції присвоєно значення,
// яке буде використовуватися, якщо функція буде викликана
// без вказівки значення для даного параметра або
// якщо значення буде передано undefined
// default-iniatialize parametes
function getDisplayName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Ivanov'; }
    return 'Display Name: ' + firstName + ' ' + lastName;
}
var fullName3 = getDisplayName('Ivan', 'Ivanov');
var fullName4 = getDisplayName('Ivan');
var fullName5 = getDisplayName('Ivan', undefined);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
//# sourceMappingURL=03-optional-parametr.js.map