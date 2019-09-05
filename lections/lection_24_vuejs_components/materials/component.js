
Vue.component('menu-item', {
    props: ["name"],
    data () {
        return {
          }
    },
    template: `
    <div>
        <div>
            <span>{{name}}</span>
        </div>
    </div>
    `
});



Vue.component('navigation', {
    data () {
        return {
            menuList: ['Gallery', 'News', "Contacts", "Blog"],
          }
    },
    template: `
        <div>
            <menu-item v-for="title in menuList"  v-bind:name="title"></menu-item>
        </div>
    `
});

new Vue({
    el:'#app',
    data: {
      name: "Valera",
      list: ["red"]
    }
});

