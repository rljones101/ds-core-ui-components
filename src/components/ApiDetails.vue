<template>
  <div class="api-details">
    <h4>API - {{ title }}</h4>
    <ds-tabs
      :tabs="tabs"
      @onSelectedTab="selectedTab"
    />
    <div>
      <div
        v-show="activeTab === 'Props'"
        class="props"
      >
        <div class="props-row props-header">
          <span class="props-name">Name</span>
          <span class="props-description">Description</span>
          <span class="props-default">Default</span>
        </div>
        <div
          v-for="(cProp, i) in cProps"
          :key="i"
          class="props-row"
        >
          <span class="props-name">{{ cProp.name }}<small class="props-type">{{ cProp.type }}</small></span>
          <span class="props-description">{{ cProp.description }}</span>
          <span class="props-default"><code>{{ cProp.default }}</code></span>
        </div>
      </div>
      <div
        v-show="activeTab === 'Events'"
        class="props"
      >
        <div class="props-row props-header">
          <span class="props-name">Name</span>
          <span class="props-description">Description</span>
          <span class="props-default">Value</span>
        </div>
        <div
          v-for="(cEvent, i) in cEvents"
          :key="i"
          class="props-row"
        >
          <span class="props-name">{{ cEvent.name }}</span>
          <span class="props-description">{{ cEvent.description }}</span>
          <span class="props-description"><code>{{ cEvent.value }}</code></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiDetails',
  components: { },
  props: {
    title: {
      type: String,
      default: ''
    },
    cProps: {
      type: Array,
      default() {
        return [
            {
              name: 'label',
              type: 'String',
              description: 'Adds a label',
              default: 'null'
            }
          ]
      }
    },
    cEvents: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      activeTab: 'Props',
      tabs: []
    }
  },
  created () {
    if (this.cProps.length) {
      this.tabs.push('Props')
    }

    if (this.cEvents.length) {
      this.tabs.push('Events')
    }
  },
  methods: {
    selectedTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style scoped lang="scss">

.api-details {
  border: 2px solid var(--main-view-bg-color);
  margin-top: 1rem;


  h4 {
    padding: 1rem 2rem;
  }

  .props {
    display: grid;
    grid-auto-rows: auto auto auto auto;
    border: 2px solid var(--main-color);
    gap: 1rem;

    code {
      color: #ff5252;
    }
  }

  .props-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  .props-row.props-header {
    background-color: var(--main-color);
    font-weight: bold;
  }
  .props-type {
    font-family: sans-serif;
    display: block;
  }
}

</style>
