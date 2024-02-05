function showMessage(message) {
    // безпосередньо реалізація функції, не є перевантаженням
    switch (typeof message) {
        case 'number':
            console.log('Hello world');
            break;
        case 'string':
            console.log(message);
            break;
    }
}
showMessage(1);
showMessage('test');
// showMessage(true); // compile error
//# sourceMappingURL=08-overloads.js.map