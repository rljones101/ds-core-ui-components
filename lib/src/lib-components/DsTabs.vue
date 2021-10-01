<template>
  <div class="ds-tabs-container">
    <button
      v-for="(tab, i) in getTabs"
      :key="i"
      class="ds-tab"
      :class="{'active': (tab === selectedTab)}"
      @click="selectTab(tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'DsTabs',
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeTab: null
    }
  },
  computed: {
    selectedTab: {
      get () {
        return this.activeTab
      },
      set (tabLabel) {
        this.activeTab = tabLabel
      }
    },
    getTabs () {
      const _tabs = []
      this.tabs.forEach((tab) => {
        if (typeof tab === 'object' && tab.label) {
          _tabs.push(tab.label)
        }
      })

      return _tabs.length ? _tabs : this.tabs
    }
  },
  beforeMount () {
    if (this.tabs.length) {
      const firstTab = this.tabs[0]
      if (typeof firstTab === 'object' && firstTab.label) {
        this.selectedTab = firstTab.label
      } else {
        this.selectedTab = firstTab
      }
      this.$emit('onSelectedTab', this.selectedTab)
    }
  },
  methods: {
    getTab (tabName) {
      return this.tabs.find(tab => tab.label === tabName) || tabName
    },
    selectTab (tab) {
      this.selectedTab = tab
      this.$emit('onSelectedTab', this.getTab(this.selectedTab))
    }
  }
}
</script>

<style lang="scss">

    .ds-tabs-container {
        display: flex;
        flex-direction: row;
        color: var(--font-color);
        border-bottom: 1px solid var(--main-view-bg-color);
        background-color: var(--main-color);

        .ds-tab {
            display: block;
            padding: 20px 21px 40px;
          margin-bottom: -2px;
            font-family: inherit;
            font-size: 14px;
            font-weight: 600;
            height: 1em;
            text-transform: uppercase;
            background-color: var(--main-color);
            border: none;
            color: var(--font-color);

            &.active {
              color: var(--primary-color);
              border-bottom: 2px solid var(--primary-color);
            }

            &:hover:not(.active) {
              background-color: var(--main-view-bg-color);
              color: var(--primary-color);
            }
        }
    }
</style>
