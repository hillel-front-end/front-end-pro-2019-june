<template>
  <div id="app">

    <div> 
        <input 
        type="text" 
        v-model="foo" />
        <br />
        Outer in parent component: {{foo}}
    </div>
      <Menu 
      :sometext="foo" 
      @transfer="setValue"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  data () {
    return {
      foo: ''
    }
  },
  components: {
    Menu
  },
  methods: {
    setValue (value) {
      console.log(value, 'in parent component');
      this.foo = value;
    }
  }
}
</script>

<style>
</style>
