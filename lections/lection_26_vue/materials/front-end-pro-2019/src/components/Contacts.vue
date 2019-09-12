<template>
    <div class="contacts">
        <section></section>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import  { url }  from '../constants/constants';

console.log(url, 'url');

export default {
    name: 'Contacts',
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions(["asyncGetContacts"])
    },
    created() {
        this.asyncGetContacts(url('localhost', 3001, 'users'))
    }
}
</script>

<style lang="scss">
    .contacts {
        width: 30%;

        &__item {
            width: 100%;
            border: 1px solid red;
        }
    }
</style>