console.log('Lection_20');

/*
JSON поддерживает следующие типы данных:

    Объекты { ... }
    Массивы [ ... ]
    Примитивы:
    строки,
    числа,
    логические значения true/false,
    null.

*/


window.onload = function() {

    console.log(localStorage["foo"]);

    console.log(localStorage.getItem('foo'));


    localStorage.setItem('foo', [123,6,7,7]);

    console.log(typeof localStorage.getItem('foo'))

    document.body.append(localStorage.getItem('foo') || '');


    var obj = {
        name: 'Valera',
        age: 123,
        isMarried: true,
        foo: null
    }


    var str = JSON.stringify(obj);

    localStorage.setItem('foo', str);
    console.log(str, 'str');


    var foo = JSON.parse(localStorage.getItem('foo'));

    console.log(foo, 'foo');



}


