// function Car(mark, model) {
//   this.mark = mark;
//   this.model = model;
//   if(mark == 'anifibiya') {
//       this.sweaming = function() {
//         console.log(this.model + ' sweaming');
//       }
//   }
// }

// Car.prototype.drive = function() {

// }

// console.log(Car.prototype);


// var mersedes = new Car('Mercedes', 'e200');
// var seat = new Car('seat', 'cordoba');
// var vw = new Car('VW', 'passat');
// var a = new Car('anifibiya', 's200');

// console.log(mersedes, 'mersedes');
// console.log(seat, 'seat');
// console.log(vw, 'vw');
// console.log(a, 'a')
// Array.prototype.myPush = function () {
//   console.log('My push');
// };

// console.log(Array.prototype)

//------------



function Animal() {
  function sendAjax(adress) {
    console.log('sending... ' + adress);
  }

}

Animal.prototype.eat = function () {

}

Animal.prototype.walk = function () {
  console.log(this.type + ' ' + this.name + ' is ...walking');
}

function Cat(type, name) {
  var maxAge = 30;

 function foo() {

 }

 //getter -- readonly

 Cat.prototype.getMaxAge = function() {
   return maxAge;
 }

 //setter 

 Cat.prototype.setMaxAge = function(value) {
   if(value  && value < maxAge && value > 0){
    maxAge = value;
   }
  
}

 this.type = type;
 this.name = name;
}

function Dog() {

}

console.log(Cat.prototype, 'Cat.prototype');



// Cat.prototype.__proto__ = new Animal('google.com'); // bad practice
Cat.prototype = Object.create(Animal.prototype); // -> {__proto__: Animal.prototyp}
Cat.prototype.constructor = Cat;

console.log(Cat.prototype, 'Cat.prototype');

var sharik = new Cat('Cat', 'Шарик');
// console.dir(sharik.hasOwnProperty);

sharik.walk();


console.log(sharik.setMaxAge(10));

console.log(sharik.getMaxAge())

