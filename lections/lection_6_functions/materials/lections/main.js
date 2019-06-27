// /*
//   Lection 6 - Functions
//     * example func declaration
//     * example func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
// */

// console.log(a, 'a');

// a = 12;

// arrayFillRandom();

arrayFillRandom = function () {
  // console.log(array, 'array');
  size = 5;
  array = new Array(size)
  for(i = 0; i < array.length; i++) {
    array[i] = new Array(size);

    for (j = 0; j < array[i].length; j++) {
      array[i][j] = Math.random();
    }
  }

  console.log(array, 'array');
}


arrayFillRandom();
arrayFillRandom();


toDo(); 

function toDo () {
  console.log('213213');
}

toDo();


function sum (a, b) {

  res = a + b;

  // return res;

  //without return undefined
}

// console.log(a ,b ); error

resSum = sum(1, 2, 3);
// console.log(resSum, 'resSum');


function foo (a, b) {
  console.log(a, b, 'a b');
  console.log(arguments, 'arg');
  for(i = 0; i < arguments.length; i++) {
    // console.log(arguments[i], 'arg');
  }
}


foo(213, 213123, 1, 5, 6);

printInLog = function () {
  console.log(arguments, 'arg');
}

// function foo2(callback, callbackSum) {
//   callback();
//   callbackSum(1, 2)
// }

// function foo2(callbackSum, a, b) {
//   callbackSum(a, b)
// }
// console.log(printInLog, 'printInLog')

// console.log(foo2, 'foo2');

// function sum (a, b) {
//   console.log(a + b, 'in SUMM');
// }

// foo2(sum, 1, 2);


// function sendAjax () {
//   console.log('start get Data from server');
// }

// function processing () {
//   console.log('processing  Data from server');
// }

// function render () {
//   onsole.log('rendwer  Data from server');
// }

// function main () {
//   sendAjax();
//   processing()
//   render();
// }

// main();

