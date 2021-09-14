<template>
  <div class="hello">
    <h1 class="hello-world-msg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello-world-msg {
  --hello-world-msg-color: green;
  color: var( --hello-world-msg-color, green);
}
</style>
