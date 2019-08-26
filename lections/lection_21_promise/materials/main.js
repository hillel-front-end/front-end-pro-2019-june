console.log('Lection 21');

// sendAjax();

// function foo() {
//     console.log('next code');
// }

// function sendAjax() {
//     let i = 0;

//     setTimeout(() => {
//         while(i < 15000) {
//             i++;
//             console.log(i, 'i async');
//         }
//     });
    
//     foo();

// }

// console.log(213123);
// var a = 122;

// console.log(a, 'a');

// var i = 0;

// while(i < 1500) {
//     i++;
//     console.log(i, 'i sync');
// }

// document.getElementById('me').onclick = sendAjax;


function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function m1() {
    console.log('m1');
}

function m2() {
    console.log('m2');
    m3();
}

function m3() {
    console.log('m3');
    m1();
}

// function sendAjax() {
//     setTimeout(() => {
//         let value = getRandom(-5, 10);
//         console.log(value, 'value');

//         if (value > 0) {
//             cb1();
//             cb2();
//             cb3();
//         } else {
//             cb01();
//             cb02();
//             cb03();
//         }
//     });
// }

// sendAjax();



// var promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let value = getRandom(-5, 10);
//         console.log(value, 'value');

//         if(value > 0) {
//             resolve(value) ;
//         } 
        
//         reject(value);
//     }, 1000);
// });

// promise.then(function(value) {
//     console.log('cb1 resolve', value);
//     return value * 10;
// },
// function(value) {
//     console.log('cb01 reject', value);
//     return Promise.reject(value);
// })

// .then(value => {
//     console.log('cb2 resolve', value);
//     return value + ' cb2 resolve';
// },
// value => {
//     console.log('cb02 reject', value);
//     return Promise.reject(value);
// })


// .then(value => {
//     console.log('resolve     ' +  value);
// },
// value => {
//     console.log('reject     ' +  value);});

// console.log('yohooooooooooooo');


// console.log('yohooooooooooooo');


new Promise((res, rej) => {
    rej('123123123');
})
.then(m1, ()=> console.log(1))
.then(m2)
.then(m3)
.catch(data => console.log(data, 'data'));