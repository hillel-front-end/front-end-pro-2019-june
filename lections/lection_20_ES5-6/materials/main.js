// console.log('Lection_1');


// /*
// - let,const
// - Arrow Functions
// - Template Literals // tag templates

// - Object Properties
// - Destructuring

// */

var x = 10;

function f() {
    console.log(x);
    let x = 1 + 2;

    function foo() {
        console.log(x, 'x');
    }

    return x;
}

// f();

if (true) {

    let i = 12;

    if (true)  {
        let y = 12;
        console.log(i, 'i');
    }

    // console.log(y)Error
}

// console.log(i, 'i'); // Error
// // let, const


// const a = 12;
// const PI = 3.14;
// // a = 13;

// const obj = {
//     a: 12
// }

// obj.a = 13;






// // ----------------------



// // // ------------------- arrow func -----------------



// let arr = [21, 71, 8, 74, 8, 3, 4, 12];

// var a = function () {

// };


// // let foo = (a, b) => a + b;


// let foo = (a, b) => { 

//     console.log(this);// ----> Cвоего нету!!!!!!
//     return a + b 
// };


// var obj = {
//     z: function() {
//         // var this = obj;

//         let foo = (a, b) => { 

//             console.log(this, 'obj');// ----> Cвоего нету!!!!!!
//             return a + b 
//         };

//         foo();
//     }
// }

// console.log(foo(1, 2));


// obj.z(function(){});

// let res = arr.forEach(function(item){
//     return item > 10; // [21, 71, 74]
// })
// .map(function(item){
//     return item < 10;
// })
// .reduce(function(prev, next) {
//     return prev + next;
// }, 0);

// let res = arr.filter(item => item > 10)
//             .map(item => item * 10)
//             .reduce((prev, next) => prev + next, 0);


// console.log(res)




// // ------------------- Template Literals ------------------- 


// let a = 123, b = 'Gggg', c = "Gfff";


// // var str = (a * 10) + 'aasdas' + '@' + 'dasdasdasdaretertertsdasd' +  b + '!' + c + 'px';
// let list = [
//     {title: 'save', color:'red', href:'https://learn.javascript.ru/array-iteration', cost: 100,}, 
//     {title: 'copy', cost: 150, }, 
//     {title: 'edit', cost: 10,}
// ];

// var foo = list.filter(function(item) {
//     return item.cost < 100;
// })

// console.log(foo, 'foo');


// function getMenu(list) {
//     return `<ul> ${list.map(item => 
//                 `<li> 
//                     <a style="color: ${item.color}" href="${item.href}">${item.title} </a>
//                 </li>`).join("")} 
//             </ul>`;
// }
    
// // let menu = getMenu(list);
// // console.log(menu, 'menu');

// window.onload = function() {
//     document.body.innerHTML = getMenu(list);
// }



// // var strFoo = `fasdfdsa sadfdasf -${getList()}- sdaf sdaf sadf `;

// // console.log(strFoo, 'strFoo');



// //






// // -----------------------------------------

// // --------------- defaults params -------------------

// function sum(a, b, data){
//     if (a === undefined || b === undefined) {
//         return console.error('parametr not found')
//     }
//     a = a || 0;
//     b = b || 0;

//     if(!data || !data.x) {
//         data = {
//             x: 0
//         }
//     }

//     return a + b;
// }

// function sum(a=0, b=0, data = {x:'abc'}){
//     return a + b + data.x;
// }

// var s = sum('123', 5,{x:20});

// console.log(s, 's');

// // // ---------------- object method --------------
//     // var obj2 = {
//     //     f: function() {

//     //     }
//     // }

//     var obj2 = {
//         f() {
            
//         }
//     }
// //   

// //  -------------------------------------

// -------------------- Destructuring (obj, arr) ---------------------


var {
    name,
    c,
    b = 20,
    adress: {
        city = "Slavuta"
    }
} = {
    a: 1,
    b: 'abc',
    c: true,
    name: 'Valera',
    adress: {
    }
}

var config = {
    // port: 8080,
    domen: 'vksadasds.com',
    protocol:'https'
}

function getUrl({port=3000, protocol, domen}) {

    console.log(port, protocol, domen);

    return `${protocol}://${domen}/${port}`;
}

let url = getUrl(config);

console.log(url, 'url')


console.log(name, c , b, city, 'name,c , b,');



// var adress = obj.adress.city;
// var a = obj.a;

// console.log(a)

var a = [{name:'Ihor'},2,3,5];

var [a = 10,,c] = mass; // [1,2,3,5]


// console.log(a,c); 

// var buffer = a[0];
// a[0] = a[a.length - 1];
// a[a.length - 1] = buffer;

// [a[0], a[a.length - 1]] = [a[a.length - 1], a[0]];

console.log(a, 'a');

//---------------------------------------------------


