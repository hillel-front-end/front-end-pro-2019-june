<template>
    <div>
<!--        Foo: {{getName}}-->
<!--        <button @click="sayFoo('Hello Foo')">Click Foo Components</button>-->
<!--        <slot name="header"></slot>-->
<!--        <slot name="body"></slot>-->
<!--        <slot name="footer"></slot>-->
<!--        <slot></slot>-->
    </div>
</template>

<script>
    import fooMixin from '../mixins/fooMixin';

    export default {
        name: "Foo",
        mixins: [fooMixin]
    }
</script>

<style scoped>

</style>