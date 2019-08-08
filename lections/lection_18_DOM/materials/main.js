/*
    /*
   1. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   2. cycles event
   3. Навесить событие на дин-е меню.: for, target 
   4. contextmenu
*/




window.onload = function() {
  var box = document.querySelectorAll('.box');

//   var action = {
//       save: function() {
//           console.log('Save');
//       },
//       edit: function() {
//           console.log('Edit');
//       }
//   }
//   console.log(box)

//   box.foo = '123';

//   box.align = 'right';

//   console.dir(box, 'box');


// //   console.log(box.dataset.action, 'action');    


// for(var i = 0; i < box.length; i++) {
//     box[i].onclick = action[box[i].dataset.action];

//     box[i].hello = '11111';
//     box[i].setAttribute('foo', 'hello world');
// }



// console.log(box[0].getAttribute('foo'),' foo');

// setTimeout(function() {
//     box[0].removeAttribute('foo');
// }, 1500)
    
var list = [
    {title:'save'},
    {title:'edit'},
    {title:'copy'}
];

  var actions = {
      save: function() {
          console.log('Save');
      },
      edit: function() {
          console.log('Edit');
      },
      copy: function() {
          console.log('Copy');
      }
  }

var ul = document.createElement('ul');

ul.addEventListener('click', function(event) {
    var target = event.target;

    if (target.dataset.action && actions[target.dataset.action]) {
       actions[target.dataset.action]();
    }

});

ul.addEventListener('contextmenu', function(event) {
    var target = event.target;

    console.log(123213);

    event.preventDefault();

    if (target.dataset.action && actions[target.dataset.action]) {
       actions[target.dataset.action]();
    }

});



for(var i = 0; i < list.length; i++) {
    var li = document.createElement('li');
        li.dataset.action = list[i].title;
        li.innerHTML = "<span>" + list[i].title  + "</span>";
        ul.append(li);
}


    document.body.append(ul);

    

}



