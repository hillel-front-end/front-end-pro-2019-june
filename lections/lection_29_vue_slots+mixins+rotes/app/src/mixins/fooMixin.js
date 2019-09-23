import { mapActions, mapMutations, mapGetters } from 'vuex';

let mixin = {
    methods: {
        sayFoo(value) {
            console.log(value, 'value');
        },
        ...mapActions(['asyncSetName']),
        ...mapMutations(['setName'])
    },
    computed: {
        ...mapGetters(['getName'])
    }
}

export default mixin;