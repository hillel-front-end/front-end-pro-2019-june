/* 
  1. Работа с экземпляром. Интерполяция, привязка данных
*/
// var app = new Vue({
//   el: '#app',
//   data: {
//     isComplite: false
//   }
// })

// console.log(app);

// setTimeout(() => {
//   console.log(app.message);
// }, 3000)

// ------------- 2. Работа атрибутами v-bind:, v-html: --------------------------
//  id, href, class, style, disabled

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     value: 0,
//     className: 'foo',
//     worn: true,
//     success: false
//     appearence: 'transition: .5s; color: red;',
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   }
// })

// setInterval(() => {
//  app2.value = Math.floor(Math.random() * 60)
// }, 1000)

// Сокращение v-bind: v-bind:style  === :style

//  ------- 3. Директивы ---------------
// v-if

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//     currentPage: 'one' // видимость блоков
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
//     list: [6, 9, 12],
//     calculate(value) {
//       return value + 200;
//     }
//   },
//   methods: {
//     Click(event, value, pos){
//       this.list.splice(pos, 1)
//       console.log('clicked', arguments);
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

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Привет, Vue!',
//     switcher: false,
//   }
// })


// -----------------------------
