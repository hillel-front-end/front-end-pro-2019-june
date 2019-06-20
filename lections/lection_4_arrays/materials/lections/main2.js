/*
Lection 3 - Array

 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
*/



// ----------------------- Array -------------

// console.log(123123213)

// mass = [132, 'sdd', true, 'asdasd', '123213', 213123];

// console.log(mass, 'mass');

// console.log(mass.length, 'mass');

// console.log(mass[mass.length], 'mass - length')

// console.log(mass[mass.length - 1], 'mass - length')

// console.log(mass[0], 'mass[0]');


// mass[mass.length] = 13;
// console.log(mass, mass.length, 'mass, length')

// mass[mass.length] = 131;
// console.log(mass, mass.length, 'mass, length')

// mass[mass.length - 1 ] = '123123';

// console.log(mass, 'mass, length')

// mass = [];

// mass.length = 3;

// // console.log(mass, 'mass length = 100');
// // console.log(mass[4], 'mass length = 100');

// for(i = 0; i < mass.length; i++) {
//     mass[i] = i;
// }

// console.log(mass, 'mass');

// for(i = 0; i <= mass.length; i++) {
//     console.log(mass[i], i);
// }


// mass = [];
// mass.length = 10;

// foo = new Array(10);

// console.log(mass, foo);



// ----------------------- Math -------------

/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.

  Math.random() - получени случайного числа от 0 - 1

  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/


console.log(Math.round(1.3), 'Math.round(1.5)');

console.log(Math.floor(1.5), 'Math.floor(1.5)');

console.log(Math.ceil(1.5), 'Math.ceil(1.5)');

console.log(Math.random(), 'Math.random()');

console.log(Math.ceil(1.5), 'Math.ceil(1.5)');

console.log(Math.ceil(Math.random() * (30 - 10) + 10), 'Math.random()');


// mass = new Array(10);

// for(i = 0; i < mass.length; i++) {
//     mass[i] = Math.ceil(Math.random() * (30 - 10) + 10);
// }

// console.log(mass.length, 'mass');
// mass[mass.length] = 123123;
// console.log(mass.length, 'mass');


// console.log(123123213)

// mass = [];

// console.log([], 'mass');

// a = 1, b = 2, c = 3

// mass = [ a, b, c];


// temp = mass[0];
// mass[0] = mass[mass.length - 1];
// mass[mass.length - 1] = temp;

// console.log(mass)

mass = new Array(30);
negMass = [];
posMass = [];

for (i = 0, sum = 0; i < mass.length; i++) {
  mass[i] = Math.ceil(Math.random() * (15 - (-15)) + (-15));
  if (mass[i] > 0 && mass[i] % 2 == 0) {
    sum += mass[i];
  }

  if (mass[i] != 0 && mass[i] > 0) {
    posMass[posMass.length] = mass[i];
  } else if(mass[i] != 0 && mass[i] < 0) {
    negMass[negMass.length] = mass[i];
  }
}

mass[mass.length - 1] = 0;  

console.log(mass, 'mass')

console.log(sum, 'sum')

console.log(posMass, 'posMass')
console.log(negMass, 'negMass')

min = posMass[0];
max = posMass[0];


for(i = 1; i < posMass.length; i++) {
  if (posMass[i] > max) {
    max = posMass[i]
  }

  if (posMass[i] < min) {
     min = posMass[i];
  }
}


console.log(min, max, posMass);

