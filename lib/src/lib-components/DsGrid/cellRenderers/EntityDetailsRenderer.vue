<template>
  <span>
    <ds-more-menu
      v-if="item && menuItems.length"
      :menu-items="menuItems"
    />
    <span v-if="item">{{ item.name }}</span>
  </span>
</template>

<script>
import Vue from 'vue'
import DsMoreMenu from '@/lib-components/DsMoreMenu'
export default Vue.extend({
  name: 'EntityDetailsRenderer',
  components: { DsMoreMenu },
  data: function() {
    return {
      item: { name: '' },
      menuItems: []
    }
  },
  mounted() {
    if (this.params) {
      if (typeof this.params.value === 'object') {
        this.item = { ...this.params.value }
        if (this.item) {
          const keys = Object.keys(this.item)

          keys.forEach((field) => {
            this.menuItems.push({
              field: field,
              value: this.item[field]
            })
          })
        }
      } else {
        this.item.name = this.params.value
        this.menuItems = []
      }
    }
  }
})
</script>

<style scoped>

</style>
