<template>
  <div class="ds-filter-controls">
    <h4>Search Filters</h4>
    <p>Search by using the fields below!</p>
    <div
      v-for="filter in filters"
      :key="filter.key"
    >
      <ds-input
        v-if="filter.type === 'input'"
        v-model="filter.value"
        :label="filter.label"
      />
      <ds-select
        v-if="filter.type === 'select'"
        v-model="filter.value"
        :options="filter.options"
        :label="filter.label"
      />
    </div>
    <div class="actions">
      <ds-button @click="clear">
        Clear
      </ds-button>
      <ds-button
        class="ds-primary"
        @click="search"
      >
        Search
      </ds-button>
    </div>
  </div>
</template>

<script>
import DsInput from '@/components/controls/ds-input/DsInput'
import DsButton from '@/components/controls/ds-button/DsButton'
import DsSelect from '@/components/controls/ds-select/DsSelect'
export default {
  name: 'DsFilterControls',
  components: { DsSelect, DsInput, DsButton },
  props: {
    filters: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      params: '?'
    }
  },
  methods: {
    search () {
      const params = this.getParams()
      this.$emit('filterChange', params)
    },
    clear () {
      this.filters.forEach((filter) => {
        filter.value = null
      })
      const params = this.getParams()
      this.$emit('filterChange', params)
    },
    getParams () {
      let params = '?'
      this.filters.forEach((filter) => {
        if (filter.value) {
          params += `${filter.key}=${filter.value}&`
        }
      })
      return params.substr(0, params.length - 1)
    }
  }
}
</script>

<style lang="scss">
  .ds-filter-controls {
    display: grid;
    padding: 1rem;

    h4 {
      margin: 0;
      padding: 1rem 0;
    }

    .ds-input input {
      min-width: 0;
    }

    .actions {
      display: flex;
    }
    .actions > * {
      flex: 1;
    }
  }
</style>
