console.log('Lection 12');

function Human(name, age,isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.run = function() {
        
    }
}

// class Human {}


var ihor = new Human('Ihor', 85, true);
var valera = new Human('Valera', 25, true);

Human.prototype.eat = function () {
}

ihor.eat()




// var ihor = new Human();

/*
class Human {
    constructor(name) {
        this.name = name;
    }
}

var valera = new Human('Valera')

*/ 

console.dir(Human, 'human')
console.log(valera, 'valera');
console.log(ihor, 'ihor')