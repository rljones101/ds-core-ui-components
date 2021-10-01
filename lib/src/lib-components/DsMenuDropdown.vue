<template>
  <div
    ref="dsSelect"
    class="ds-select"
  >
    <label>{{ label }}</label>
    <div class="select-container">
      <div
        ref="selectedItem"
        class="selected-item"
        :class="{'active': showList}"
        @click="showList=true"
      >
        <span>{{ selectedItem }}</span>
        <span
          class="material-icons expand-icon"
          :class="{'rotate-icon': showList}"
        >expand_more</span>
      </div>
      <md-menu
        :md-active="showList"
        :md-offset-y="-20"
        md-size="huge"
        @md-closed="showList=false"
      >
        <md-menu-content>
          <slot name="menu-content" />
        </md-menu-content>
      </md-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DsMenuDropdown',
  props: {
    label: {
      type: String,
      default: ''
    },
    selectedItem: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showList: false
    }
  }
}
</script>

<style lang="scss">
  .md-list {
    .menu-item {
      color: var(--font-color);
    }
  }
</style>
