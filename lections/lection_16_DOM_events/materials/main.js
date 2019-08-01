console.log('Lection_16');


window.onload = function(){
    var box = document.querySelector('.box');

    console.dir(box, 'box');
    function onToDo(e) { //event = {}
        console.log(' e', e);

        // console.log(e.altKey, 'e.altKey');
        // console.log(e.type, 'type');

        // console.log(e.target, 'target');

        // if (e.altKey) {

        // }

    //    console.log(e.clientY, 'clientY');
    //    console.log(e.pageY, 'pageY');
    //    console.log(e.offsetY, 'offsetY');
        console.log('onType');

    }

    // document.onclick = onToDo;

    // box.onmousemove = onToDo;

    // box.onmousedown = function() {
    //     console.log('onmousedown');
    // }

    // box.onmouseup = function() {
    //     console.log('onmouseup');
    // }



    // box.onmouseover = function() {
    //     console.log('onmouseover');
    // }

    // box.onmouseleave = function() {
    //     console.log('onmousleave');
    // }


    // box.onclick = onToDo;

    // box.onclick = function() {
    //     console.log('aaaaaaa');
    // }


    // addEventListener

    box.addEventListener('click', function(event) {
        console.log('event', 'foooooo');
    }); 

    box.addEventListener('click', onToDo); 

    var boxes = document.querySelectorAll('.box');

    for(var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function(e) {
            console.log('213213123');

            console.log(e.clientY, 'clientY');
            console.log(e.pageY, 'clientY');

        });
    }
}

// console.log(222);

