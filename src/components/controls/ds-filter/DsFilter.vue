<template>
  <div
    class="ds-filter filter"
    :class="{'active': active, 'show' : show, 'disabled' : $attrs.disabled}"
  >
    <div
      class="ds-filter-input"
      @click="showMenu"
    >
      <div style="display: flex; flex-direction: row; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        <span style="margin-right: 10px;"> Search By:</span>
        <span class="filter-name"> {{ selFilter.name }}</span>
      </div>

      <div
        class="material-icons expand-icon"
        :class="{'rotate-icon': show}"
      >
        expand_more
      </div>
    </div>
    <md-menu
      md-size="huge"
      :md-active.sync="show"
      :md-offset-y="-20"
    >
      <md-menu-content>
        <md-menu-item
          v-for="(filter, i) in filters"
          :key="i"
          class="filter-item"
          :class="{'selected': filter.id === selFilter.id}"
          @click="onChange(filter)"
        >
          {{ filter.name }}
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
export default {
  name: 'DsFilter',
  inheritAttrs: false,
  model: {
    prop: 'selectedFilter',
    event: 'change'
  },
  props: {
    filters: {
      type: Array,
      default () {
        return [
          {
            id: null,
            name: 'Choose..'
          }
        ]
      }
    },
    selectedFilter: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      defaultFilter: { id: null, name: 'None' },
      selFilter: null,
      active: false,
      show: false
    }
  },
  created () {
    if (this.filters.length) {
      this.selFilter = this.filters[0]
      this.onChange(this.selFilter)
    } else {
      this.selFilter = this.defaultFilter
    }
  },
  methods: {
    showMenu () {
      if (!this.$attrs.disabled) {
        this.show = true
      }
    },
    onChange (value) {
      this.selFilter = value
      this.$emit('change', this.selFilter.id)
    },
    onShowList () {
      this.active = true
    },
    onHideList () {
      this.active = false
    },
    cancel () {
      this.selFilter = this.defaultFilter
      this.$emit('filter:cancel')
      this.$emit('change', null)
    }
  }
}
</script>

<style lang="scss">

.ds-filter {
  padding: 0;
  height: 36px;
  line-height: 36px;
  background-color: var(--main-view-bg-color);
  width: 280px;
  min-width: 0;

  &.disabled {
    border: 1px solid var(--disabled-color);
    color: var(--disabled-color);
  }

  &.disabled .filter-name {
    color: var(--disabled-color);
  }

  &.disabled .expand-icon {
    color: var(--disabled-color);
  }

  .ds-filter-input {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &.active {
    background-color: var(--input-focus-color)
  }

  .filter-name {
    color: var(--color-link-and-buttons);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .expand-icon {
    color: var(--color-link-and-buttons);
    transform: rotate(0deg);
    transition: all .2s ease-in-out;
  }

  .rotate-icon {
    transform: rotate(180deg);
  }

  .filter-item.selected {
    color: var(--color-link-and-buttons);
  }
}
</style>
