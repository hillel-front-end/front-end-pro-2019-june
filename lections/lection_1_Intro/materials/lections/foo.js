box = 123; // type integer -> number in js
a = 1.2;// type double -> number in js
str = '12312'// type String;
console.log(box, a);


box = 2.6;

console.log(box);

box = '213213';

console.log(box, 'box');    


//---------------------- + - / * %

/* 
    a = 1;
    b = 2;
*/
a = 1, b = 2, c = 0;


console.log(a + b);

c = a + b;
console.log(c, 'a + b');

c = a - b;

console.log(c, 'a + b');

c = a * b;

console.log(c, 'a * b');

c = a / b;

console.log(c, 'a / b');


a = 9;
b = 4;

c = a % b;

console.log(c, 'a % b');

// ----------------------------

a = 'asdasd ', b = 123, c = 0, g = '100';

c = a + b;// '123'

console.log(c, 'a + b');

console.log(a + g, 'a + g')// конкатенация
// ------------------


z = 0;
g = 10;
b = '100';


c = b - g;

console.log(c, 'c');


str = 'abc';
num = 12;
res = 0;

res = str * num; // 'abc' * 12

console.log(res, 'res');


// ------- parseInt(str)-----------
 str = '123';
 str2 = '123asdasdsadasd';
 str3 = 'asdasd123';
 res = parseInt(str);
 res2 = parseInt(str2);
 res3 = parseInt(str3);

console.log(res, 'res');

console.log(res2, 'res2');

console.log(res3, 'res3');


