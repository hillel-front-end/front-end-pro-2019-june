<template>
    <div class='footer'>
        Footer
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name:'Footer',
    data() {
        return {

        }
    },
    computed: {
    },
    methods: {

    }
}
</script>


<style lang="scss">
    .footer {
        position: fixed;
        bottom: 0px;
        height: 50px;
        background: black;
        width: 100%;
        color: white;
    }
</style>