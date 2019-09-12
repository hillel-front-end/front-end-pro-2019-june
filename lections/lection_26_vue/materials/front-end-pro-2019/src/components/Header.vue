<template>
    <div class="header">
        
        Header:{{name}}
    </div>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            name: this.$store.state.name
        }
    },
    created() {
        
    }
}
</script>

