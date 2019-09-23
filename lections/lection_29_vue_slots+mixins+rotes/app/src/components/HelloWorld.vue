<template>
  <div class="hello">
<!--    <Flag></Flag>-->


<!--    <Foo>-->
<!--        <template v-slot:header>-->
<!--          Header-->
<!--          <br />-->
<!--        </template>-->

<!--        <template v-slot:body>-->
<!--          Body-->
<!--          <br />-->
<!--        </template>-->

<!--      <template v-slot:footer>-->
<!--        Footer-->
<!--        <br />-->
<!--      </template>-->
<!--    </Foo>-->


  </div>
</template>

<script>
  import Flag  from "./Flag";
  import Foo from "./Foo";

export default {
  name: 'HelloWorld',
  components: {Foo, Flag},
  props: {
    msg: String
  },
  comments: {
    Flag,
    Foo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
