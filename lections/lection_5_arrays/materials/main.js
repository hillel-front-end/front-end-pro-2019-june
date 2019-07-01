/*
  Lection 4 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
*/

// mass = [1,2,3,4,5];

// console.log(mass.join('!'), 'join');


// document.write("<ul>");

// for(i = 0; i < mass.length ;i++) {
//   document.write('<li>'+ mass[i] + '</li>')
// }

// document.write("</ul>");
// // ----------------------------- 2

// document.write("<ul><li>");
// document.write(mass.join('</li><li>'));
// document.write("</li></ul>");

// // ------------------ 3
// console.log(mass, 'ДО');

// count = mass.length % 2 ? 1 : 2;
// center = Math.ceil(mass.length / 2) - 1;
// mass.splice(center, count);



// for(;;) {
//   num = prompt('input number');

//   if(num == '&') {
//     break;
// }
  
//   mass.push(+num);
//   mass.unshift(+num);
// }

// console.log(mass, 'mass')

// ---------------------------------

array = [
  [1, 2, 3, 5, 6],
  [1, 2, 3, 5, 6],
  [1, 2, 3, 5, 6]
];

console.log(array, 'array');

size = 5;
mass = new Array(size);

for(i = 0; i < mass.length; i++) {
  mass[i] = new Array(size * (i + 1));

  for (j = 0; j < mass[i].length; j++) {
    mass[i][j] = Math.floor(Math.random() * 10 + 0 - 0);
  }

 }

 console.log(mass, 'mass')
  

for(i = 0; i < mass.length; i++) {
  min = mass[i][0];
  for(j = 1; j < mass[i].length; j++) {
    if (min > mass[i][j]) {
      min = mass[i][j];
    }
  }

  mass[i][0]  = min;
}

console.log(mass, 'mass')
