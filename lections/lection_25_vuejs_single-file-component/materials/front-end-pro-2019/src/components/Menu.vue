<template> 
    <div class="container"> 

        <br> 
       Inner child : {{sometext}}
        <input type="text" @input="getValue" v-bind:value="sometext">
    </div>
</template>


<script>
    export default {
      name: 'Menu',
      props: ['sometext'],
      data () {
          return {
              name: 'Valera',
              lastName: 'PasdASD',
              list: [1,2,4],
              menuList: [5,6,7]
          }
      },
      methods: {
        getValue ({target}) {
            console.log('input getValue method');

           this.$emit('transfer', target.value);
        }
      },
      computed: {
          getFullName () {
              return `${this.name}  ${this.lastName}`;
          },
          getData () {
              return this.list.concat(this.menuList);
          }
      }

    }
</script>

<style>
    .container {
        width: 100px;
    }

</style>