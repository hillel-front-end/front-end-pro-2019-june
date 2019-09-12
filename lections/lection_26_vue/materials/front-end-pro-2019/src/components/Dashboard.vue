<template>
    <div>
        <Header />
        <Content/>
        <Footer />
    </div>
</template>

<script>
  import Footer from './Footer';
  import Header from './Header';
  import Content from './Content';
  import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'Dashboard',
    components: {
        Header,
        Footer,
        Content
    },
    computed: {
    },
    methods: {
        ...mapMutations(['changeName']),
        onInput(event) {
            this.changeName(event.target.value);
        }
    }
}
</script>


<style lang="scss">
</style>