<template>
    <div class="content">
        <Contacts />
    </div>
</template>

<script>
import Contacts from './Contacts'

export default {
    name: 'Content',
    data() {
        return {

        }
    },
    components: {
        Contacts
    }
}
</script>


<style lang="scss">
    .content {
        margin-top: 50px;
        height: calc(100vh - 100px);
    }
</style>