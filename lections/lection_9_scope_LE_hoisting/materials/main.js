
// function foo() {
//     console.log('fooo')
// }
// var foo2 = undefined
// var g = undefined;
// Выше пер-ные которые всплыли(поднялись)
//  -------------------- var


// function foo () {
//     var data = 0;
// }

// foo();

// console.log(data, 'data');

// function sum () {
//     for(var i = 0; i < 5; i++) {
//          console.log('to DO')
//     }
// }

// for(var i = 0; i < 5; i++) {
//     sum();
// }


// ------- hoisting


// function foo () {


//     if (false) {
    //  var g = 100;
//     }

//     console.log(g, 'g');
//     console.log(a, 'a')

//     return;

//     a = 123;
// }


// foo();
// console.log(g)


// var g = 123;


// function foo () {


//     if (false) {
//      var g = 100;
//     }

//     console.log(g, 'g');
//     console.log(a, 'a')

//     return;

//     a = 123;
// }

// console.log(g)

//  g = 123;


// foo(); Error

// var foo = function() {

// }

// foo();

// function foo() {
//     console.log('foo outer')
// }


// function foo2 () {
//     // foo(); error

//     var foo = function() {
//         console.log('hello foo inner');
//     }

//     foo()

//     console.log('hello foo2')
// }

// foo2();


// foo();

function abc() {
    console.log('fooo')
    mul();

    function mul() {

    }

    mul();
}

abc();

// var foo2 = function () {

// }


// ------ LE + Scope

// var g = 123; // window.g = 123;
// function sum () {
//     //var LE = {};
//     //LE = { i: undefined, abc:function() {console.log(123123123)}, z:undefined, g: undefined }
//     var g = 'asdsad';
//     //LE = { i: undefined, abc:function() {console.log(123123123)}, z:undefined, g: 'asdsad' }

//     for(var i = 0; i < 5; i++) {
//         //LE = { i: 0-5,g:'asdsad' , abc:function() {console.log(123123123)}, z:undefined }

//          console.log('to DO')
//     }

//     function abc() {
//         console.log(123123);
//     }
//             //LE = { i: 0-5, g: asdsad, abc:function() {console.log(123123123)}, z:undefined }

//             //LE = { i: 0-5, g:asdsad , abc:function() {console.log(123123123)}, z:undefined }

//     var z = function () {

//     }

//     console.log(g, 'local');
//     console.log(window.g, 'global')
//     //LE = { i: 0-5, g: 'asdsad', abc:function() {console.log(123123123)}, z:function(){} }

// }

// for(var i = 0; i < 5; i++) {
    // sum();
// }


// ---- scope 
// var g = 123; // window.g = 123;

// function abc () {
//     //LE = { scope:window}
//     // [SCOPE] --> window
//     console.log(b) // LE.b
//     // var b = 123;
//     console.log(g); 
// }

// abc();


var g = 1;

function foo () {
 //  LE = { scope: window}
    console.log(g, 'g');1

}


// function foo2() {
    //  LE = { scope: window}
    // g = 'local foo2';

    // function foo () {
        //  //  LE = { scope: LE-FOO2}
            // [SCOPE] -> LE-FOO2
        //     console.log(g, 'g');1
        
        // }
    // foo();
// }


// foo2();

// var gOriginal = 123;


// function foo() {
//
//     function foo2(){

//         function fooOriginal() {
//             console.log(gOriginal)

//         }
        
//         fooOriginal();
//     }

//     foo2()

// }


// foo();



// ---- Замыкание -------



// HW

function initSlider(size) {
    var count = 0;

    function isFinish() {
        return count == size;
    }

    function reset() {

    }

    function up() {
        if (isFinish()) {
            reset();
        }
    }
}

var slider = initSlider(10);

slider.up(); //1
slider.up(); //10
slider.up();//0

slider.down();// 0
slider.down();//10




