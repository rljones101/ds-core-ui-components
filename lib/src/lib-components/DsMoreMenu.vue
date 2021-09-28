<template>
  <md-menu
    md-align-trigger
    @md-opened="onMenuOpen"
    @md-closed="onMenuClose"
  >
    <md-button
      md-menu-trigger
      class="md-icon-button md-primary"
    >
      <md-icon v-if="!isMenuShowing">
        arrow_drop_down
      </md-icon>
      <md-icon v-if="isMenuShowing">
        arrow_drop_up
      </md-icon>
    </md-button>
    <md-menu-content
      v-if="menuItems.length"
      class="menu-container"
    >
      <div
        v-for="(menuItem, i) in filteredMenuItems"
        :key="i"
        class="info-container"
      >
        <div class="field">
          {{ menuItem.field }}
        </div><div
          class="value"
        >
          {{ menuItem.value }}
        </div>
      </div>
    </md-menu-content>
  </md-menu>
</template>

<script>
export default {
  name: 'DsMoreMenu',
  props: {
    menuItems: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isMenuShowing: false
    }
  },
  computed: {
    filteredMenuItems () {
      return this.menuItems.filter(menuItem => typeof menuItem.value !== 'object' && menuItem.field !== '__v')
    }
  },
  methods: {
    onMenuOpen () {
      this.isMenuShowing = true
    },
    onMenuClose () {
      this.isMenuShowing = false
    }
  }
}
</script>

<style lang="scss">
    .md-menu-size {
        min-width: 100px;
        width: 300px;
    }
    .info-container {
        display: flex;
        flex-flow: column;
        padding: 4px 10px;

        .field {
            flex: 1;
            color: rgba(0,0,0,0.5);
        }
        .value {
            flex: 1;
            font-weight: bold;
            white-space: normal;
            color: var(--main-view-bg-color)
        }
    }
</style>
