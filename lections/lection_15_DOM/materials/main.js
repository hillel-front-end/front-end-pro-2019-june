/*


+ Глобальные обьекты Window, Document
+ setTimeout,  setInterval
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText


*/

  


// function foo () {
//     console.log(' foooo');
// }

// foo();


// setTimeout(foo, 5000);   

// setInterval(foo, 5000);

// console.log(document, 'document');
// console.dir(document.documentElement);// html

// console.dir(document.body); // body
// document.body.style.height = 300 + 'px';
// document.body.style.backgroundColor = 'red';


// var blocks = document.getElementsByClassName('block');

// var blocks = document.getElementsByTagName('div');


// var blockFoo = document.getElementById('foo');


// console.dir(blockFoo, 'blockFoo');

// console.log(blocks[0], 'blocsk');





// var blocksQueryList = document.querySelectorAll('.block');

// console.log(blocks, 'blocks');
// console.dir(blocksQueryList, 'block');
// console.dir(blocksQueryList[0], 'block');

// blocksQueryList[0].align = 'right';


// blocksQueryList[1].foo = 'right';

// console.dir(block, 'block');

// block.id = 'row';

// block.className += ' foo';

// console.dir(block.classList);

// block.classList.add('foo');

// block.classList.toggle('foo');


// setTimeout(function(){
//     block.classList.toggle('disable');

// }, 2000)

// setTimeout(function(){
//     block.classList.toggle('disable');
// }, 4000)

// block.classList.remove('block');

// console.log(block.classList.contains('block'));



// block.innerText  = '<a>123213</a>';
// block.innerHTML  += '<a>123213</a>';



window.onload = function () {
    var boxes = document.querySelectorAll('.box');
    console.dir(boxes, 'boxes');

    setInterval(function(){
        for(var i = 0; i < boxes.length; i++) {;
            var width = window.innerWidth - boxes[i].clientWidth;
            var height = window.innerHeight - boxes[i].clientHeight;

            console.dir(boxes[i], 'box');

            boxes[i].style.left = getRandom(0, width) + 'px';
            boxes[i].style.top = getRandom(0, height) + 'px';
            boxes[i].style.backgroundColor = getRandomColor();

            boxes[i].style.width = getRandom(100, 500) + 'px';
            boxes[i].style.height = getRandom(100, 500) + 'px';
        }
    }, 1000);


    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }


    function getRandomColor() {
        return 'rgb(' +  getRandom(0, 256) + ',' + getRandom(0, 256) + ',' + getRandom(0, 256) + ')';
    }
}











