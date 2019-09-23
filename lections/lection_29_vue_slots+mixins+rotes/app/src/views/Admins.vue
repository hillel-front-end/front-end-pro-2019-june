<template>
    <div>
        <h1>Component Admins </h1>
        <router-link to="/admins/foo1">foo1</router-link>
        <br/>
        <router-link to="/admins/foo2">foo2</router-link>
        <br />
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "Admins"
    }
</script>

<style scoped>

</style>