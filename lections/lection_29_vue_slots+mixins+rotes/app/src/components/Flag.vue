<template>
    <div>
<!--        Flag{{getName}}-->
<!--        <button @click="sayFoo('Hello Flag')">Click Flag Components</button>-->
        <Foo>
            <template v-slot:header>
                another content for header
                <br />
                <button @click="sayFoo('Say something')"> CLick</button>
            </template>

            <template v-slot:body>
                another content for body
                <br />
            </template>

            <template v-slot:footer>
                another content for footer
                <br />
            </template>
        </Foo>
    </div>
</template>

<script>
    import fooMixin from '../mixins/fooMixin';
    import Foo from './Foo';

    console.log(fooMixin , 'fooMixin')

    export  default  {
        name: 'Flag',
        mixins: [fooMixin],
        components: {
            Foo
        }
    }
</script>