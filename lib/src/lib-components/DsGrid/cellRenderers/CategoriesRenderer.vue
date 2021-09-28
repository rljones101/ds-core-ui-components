<template>
  <div style="display: flex; flex-direction: row; gap: 4px; justify-content: center; align-items: center; height: 100%;">
    <div
      v-for="category in categories"
      :key="category.id"
      class="item-category"
    >
      {{ category.name }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'CategoriesRenderer',
  data() {
    return {
      categories: []
    }
  },
  created () {
    this.categories = this.params.value
  }
})
</script>

<style lang="scss">
@use '../../../../../src/styles/app-theme';
.item-category {
  display: inline-block;
  padding: 1px 4px;
  background-color: var(--main-view-bg-color);
  border-radius: 4px;
  height: max-content;
  line-height: 20px;
}
</style>
