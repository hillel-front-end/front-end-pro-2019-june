
// Позволяет выбрать определенный алгоритм во время выполнения.
// При этом меняя алгоритм интерфейс объекта, который создан по шаблону стратегия, не меняется
//Главная идея в том, чтобы мы могли добавлять неограниченое количество функционала без изменения кода базовой сущности.


var validator = {
    types: {}, // какие поля будет проверять
    messages: [],
    config: {},
// 
    //Базовая сущьность
    // проверяет корректность значений в объекте data в соответствии с настройками указанными в свойстве config
    // возвращает true при наличии ошибок, false - если свойства объекта заполнены правильно.
    validate: function (data) {
        var i, msg, type, invalid, checker;

        this.messages = [];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config['firstName']; // получаем тип проверки для свойства
                checker = this.types['required']; // получаем объект выполняющий проверку

                if (!type) {
                    continue; // проверка не требуется
                }
                if (!checker) {
                    throw {
                        name: "ValidatorError",
                        messgae: "Не найден валидатор " + type
                    }
                }

                invalid = checker.validate(data[i]);
                
                if (invalid) {
                    msg = "Не правильное значение для " + i + ", " + checker.message;
                    this.messages.push(msg);
                }
            }
        }

        return this.hasErrors();
    },

    hasErrors: function () {
        return this.messages.length !== 0;
    }
};  

// Добавление неограниченое количество функционала (проверок)
// объект выполняет проверку наличия значения в свойстве.
validator.types.required = {
    validate: function (value) {
        return value !== "";
    },
    message: "Обязательное значение"
};

// объект проверяет значение на соответствие целочисленному типу
validator.types.number = {
    validate: function (value) {
        return !/\d+/.test(value);
    },
    message: "Значение должно быть числом"
};

// проверяет формат email адреса
validator.types.email = {
    validate: function (value) {
        return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
    },
    message: "Значение должно быть email адресом"
};

validator.types.foo = {
    validate: function (value) {
        return true || false
    },
    message: "Значение должно быть email адресом"
};


var data1 = {
    firstName: "Ivan",
    lastName: "Ivaonv",
    age: 25,
    email: "i.ivanov@example.com"
};

var data2 = {
    firstName: "Ivan",
    lastName: "",
    age: "qwe",
    email: "example"
};

// настройки объекта для проверки
validator.config = {
    firstName: "required",
    lastName: "required",
    age: "number",
    email: "email",
    country: "foo"
};




var result = validator.validate(data1);
console.log(result); // false

result = validator.validate(data2);
console.log(result); // true

// проверка и вывод ошибок
if (validator.validate(data2)) {
    console.dir(validator.messages);
}

