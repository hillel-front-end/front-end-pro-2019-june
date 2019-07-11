// var foo = 1; 
// function bar() { 
//     if (!foo) { 
//          foo = 10; 
//     } 
//     alert(foo); 
// } 
// bar();



// -- Замыкание ----

function parent() {
    var count = 0;
    //LE_parent = {count: 0, scope: window}
    return function () {
        //LE_child = {scope: LE_parent}
        return count += 1;
    }
}


var child = parent();

parent = null;

console.log(child(), 'child');
console.log(child(), 'child');
console.log(child(), 'child');

// ---- this - контекст вызова ф-ии ------------
var talk = "window say ...";

var human = {
    name: "Valera",
    talk: "Bla bla bla..",
    say: say
}

var cat = {
    name: 'Мурзик',
    talk: "Mяу, Мяу, мяу ...",
    say: say
}

function say() {
    console.log('say something ' + this.talk);
}

human.say()
cat.say()


say(); /// window.say()


var math = {
    x: 10,
    y: 10,
    sum: function() {
        return this.x + this.y
    }
}

console.log(math.sum())

var mass = [1,2,3,4,5];

console.log(mass, 'mass')

mass.myPush = function(value) {
    console.log(this, 'this');
    this[this.length] = value + "  !  ";
}

// mass.myPush('123123');

console.log(mass, 'mass~!!')

mass.myJoin = function(separator) {
    var str = '';
    console.log(this)

    for(var i = 0; i < this.length - 1; i++) {
        str += this[i] + separator
    }

    str += this[this.length - 1];
    
    return str;
}

console.log(mass.myJoin('!'));