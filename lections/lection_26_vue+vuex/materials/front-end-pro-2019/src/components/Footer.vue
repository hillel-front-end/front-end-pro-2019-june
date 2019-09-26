<template>
    <div>
        Footer: {{GET_FULL_NAME}}

        {{getName}}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name:'Footer',
    data() {
        return {
            name: this.$store.state.name
        }
    },
    computed: {
        ...mapGetters(['GET_FULL_NAME', 'getName'])
    },
    methods: {
        ...mapActions(['asycnGetProducts'])
    },
    created() {
        this.asycnGetProducts();
    }
}
</script>