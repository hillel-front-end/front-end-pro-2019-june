/* 
  1. Работа с экземпляром. Интерполяция, привязка данных
*/
// var app = new Vue({
//   el: '#app',
//   data: {
//     isComplite: false,
//     message: 'Hello world',
//     list: [
//       'asd',
//       'asd'
//     ],
//     login: 'Valera',
//     getLogin: function() {
//       return this.login;
//     }
//   }
// })

// // console.log(app);

// setTimeout(() => {
//   console.log(app.message = '123');
// }, 3000)

// ------------- 2. Работа атрибутами v-bind:, v-html: --------------------------
//  id, href, class, style, disabled

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     value: 0,
//     className: 'active',
//     worn: true,
//     success: true,
//     href:'http:/foo.com',
//     appearence: 'transition: .5s; color: red;',
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   }
// });

// app2.className = 'hidden';

// setInterval(() => {
//  app2.value = Math.floor(Math.random() * 60)
// }, 1000)

// Сокращение v-bind: v-bind:style  === :style

//  ------- 3. Директивы ---------------
// v-if

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true,
//     currentPage: 'page1' // видимость блоков
//   }
// })

// setTimeout(() => {
//   app3.seen = false;
// }, 2000)


// // // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     arr: [
//       1, 8, 9, 6
//     ],
//     list: [
//       {
//         text: 'Изучить JavaScript'
//       },
//       {
//         title: 'jasnf'
//       },
//       {
//         text: ''
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ]
//   }
// })




// // // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!',
//     counter: 3,
//     list: [{title: 'save'}, {title: 'edit'}],
//     calculate(value) {
//       return value + 200;
//     }
//   },
//   methods: {
//     foo(event, value, index){
//       console.log('click',event, value, index);

//       this.list.splice(index, 1);

//     },
//     mouseover(ev){
//       this.counter = ev.offsetX;
//     },
//     getValue(){
//       return this.counter;
//     }
//   }
// })

// // // ---------------------------------------

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!',
    switcher: false,
    isActive: 5,
    hasError: true
  }
})


// -----------------------------
