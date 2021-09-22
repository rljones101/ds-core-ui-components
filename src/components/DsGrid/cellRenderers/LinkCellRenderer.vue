<template>
  <span><a
    :href="link"
    target="_blank"
  >{{ link }}</a> </span>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'LinkCellRenderer',
  data() {
    return {
      link: null
    }
  },
  created () {
    this.link = this.getLink()
  },
  methods: {
    getLink() {
      return this.params.value
    }
  }
})
</script>

<style scoped>

</style>
