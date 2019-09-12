<template>
  <div id="app">
     <appDashboard/>
  </div>
</template>
<script>
  import Dashboard from './components/Dashboard';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {

      }
    },
    components: {
      appDashboard: Dashboard
    }
  }
</script>
<style lang="scss">
</style>
