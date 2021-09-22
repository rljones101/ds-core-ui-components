<template>
  <router-link
    :to="routeTo"
  >
    {{ cellValue }}
  </router-link>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  components: {},
  data() {
    return {
      cellValue: null,
      routeTo: {
        name: '',
        params: { userId: null }
      }
    }
  },
  beforeMount () {
    this.cellValue = this.getValueToDisplay(this.params)
    this.routeTo = this.getRouterLinkTo(this.params)
  },
  methods: {
    getValueToDisplay(params) {
      return params.value.name
    },
    getRouterLinkTo(params) {
      return params.value.routeTo
    }
  }
})
</script>
