<template>
    <div>
        <Header />
            <div 
                v-for="(person, $index) in getPersonsList"
                :key="$index">
                {{person.name}}
            </div>
         <Footer />
    </div>
</template>

<script>
  import Footer from './Footer';
  import Header from './Header';
  import { mapGetters } from 'vuex';


export default {
    name: 'Dashboard',
    components: {
        Footer,
        Header
    },
    computed: {
        ...mapGetters(['getPersonsList'])
    }
}
</script>


<style lang="scss">
</style>