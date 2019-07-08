a = {name: 123}

b = a;

console.log(a, 'a');

console.log(b, 'b');


b.name = 'Valera';
b.toDo = function () {

}

console.log(a, 'a');
console.log(b, 'b');

console.log( a == b);


function foo(mass) { // mass = arr
  mass.pop();
  console.log(mass, 'mass');

  console.log(foo.a)
}

foo.a = 123;

arr = [1,2,3];

foo(arr);

console.log(arr, 'arrr');

console.dir(foo, 'foo')
console.log(foo.a)

foo([1,2,3]);


person = { name: 'Valera'}

// obj.a // undefined 


// person['name'] = 'Pety';

arrray = new Array(new Array(5), new Array(5), new Array(new Array(5), new Array(5)));


// function isArr (arr) {
//     if(arr && arr.pop) {
//         return true;
//     }

//     return false;
// }

// console.log(isArr({}));
// console.log(isArr([]))

// [
//     [1,2,3],
//     [
//         [1,2,3],
//         [1,2,3]
//     ]
    
// ]


function arrayFill (arr) { // [].len = 5
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i].pop) {
            arrayFill(arr[i] );
        } else {
            arr[i] = 0
        }
    }
}

arrayFill(arrray);

console.log(arrray, 'arrray')


obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } };


function convert (obj) {
 var newObj = {x:10}; 

    for (key in obj) {
        // console.log(obj[key])

        if(typeof obj[key] == 'object') {
            var o = convert(obj[key]);

            for(key2 in o) {
                newObj[key2] = o[key2];
            }

        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

foo = convert(obj)

console.log(foo, 'foo')