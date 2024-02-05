function repeatOperation(count, callback) {
    console.log('start');
    for (var i = 0; i < count; i++) {
        callback();
        // Контекст цієї функції - глобальний об'єкт.
        // Якщо в функції callback використовується контекст,
        // він теж буде посилатися на глобальний об'єкт.
    }
    console.log('stop');
}
var settings = {
    displayName: 'test object',
    test1: function () {
        // в даному випадку this вказує на об'єкт settings
        repeatOperation(3, function () {
            console.log(this.displayName);
        }.bind(this));
    },
    test2: function () {
        var _this = this;
        // стрілочна функція захоплює контекст, у якому була створена)
        repeatOperation(2, function () { return console.log(_this.displayName); });
    },
};
// settings.test1();
settings.test2();
//# sourceMappingURL=07-arrow-function-context.js.map