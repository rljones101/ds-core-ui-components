<template>
  <div class="ds-select">
    <label class="ds-label">{{ label }}</label>
    <div
      class="select-container"
      :class="[{'disabled': disabled}, {'disabled': loading}]"
    >
      <div
        ref="selectedItem"
        class="selected-item"
        :class="[{'active': showList}, {'disabled': disabled}]"
        @click="onShowList"
      >
        <span>{{ selectedOptionName }}</span>
        <span
          class="material-icons expand-icon"
          :class="{'rotate-icon': showList}"
        >expand_more</span>
      </div>
      <md-menu
        :md-active.sync="showList"
        :md-offset-y="-20"
        md-size="huge"
        @md-closed="onHideList"
      >
        <md-menu-content>
          <div class="menu-content">
            <div style="padding: 1rem;">
              <ds-search
                v-model="searchValue"
                style="width:100%;"
                @search:cancel="onSearchCancelled"
              />
            </div>
            <ul
              :ref="menuRefName"
              class="select-list ds-scrollbar"
            >
              <li
                v-for="(option, i) in allOptions"
                :key="i"
                class="list-item"
                :class="{ 'selected': selectedOption && selectedOption.id === option.id }"
                @click="onSelected(option)"
              >
                {{ option.name }}
              </li>
              <li
                v-show="hasNextPage"
                ref="loader"
                class="list-loading"
                style="justify-content: center; padding: 1rem;"
              >
                <ds-loader />
              </li>
            </ul>
          </div>
        </md-menu-content>
      </md-menu>
    </div>
  </div>
</template>

<script>
import DsLoader from '@/lib-components/DsLoader'
import DsSearch from '@/lib-components/DsSearch'
export default {
  name: 'DsAdvancedSelect',
  components: { DsSearch, DsLoader },
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    searchField: {
      type: String,
      default: null
    },
    selected: {
      type: [String, Number, Object],
      default () {
        return {}
      }
    },
    valueBy: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      infiniteScroll: true
    },
    options: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    totalResults: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      loadedOptions: [],
      currentPage: 0,
      totalPages: 0,
      take: 100,
      showList: false,
      loading: false,
      searchValue: '',
      scrollListenerAdd: false
    }
  },
  computed: {
    selectedOption: {
      get () {
        let sel = null
        if (this.selected && (this.selected._id || this.selected.id)) {
          sel = { id: this.selected._id || this.selected.id, name: this.selected.name }
        } else {
          // NOTE: This can return a null value. However on the created hook if it null, then it will be set to the
          // first option in the options list
          sel = this.findSelectedInOptions()
        }
        return sel
      },
      set (item) {
        this.$emit('change', this.getValue(item))
      }
    },
    selectedOptionName () {
      return this.selectedOption && this.selectedOption.name
    },
    menuRefName () {
      return 'select-list-' + name + '-' + (Math.random() * 10020909109)
    },
    filtered () {
      return this.loadedOptions.filter(option => option.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    },
    allOptions () {
      return this.filtered
    },
    hasNextPage () {
      return this.filtered.length < this.totalResults && this.searchValue === ''
    }
  },
  watch: {
    options(opts) {
      if (opts?.length) {
        // If nothing has been selected then select the first option
        if (!this.selected) {
          this.selectedOption = opts[0]
        }
        this.updateOptions(opts)
      }
    }
  },
  created () {
    this.updateOptions(this.options)
    // If there is no option selected, then select the first one in the list
    if (this.loadedOptions.length && !this.selectedOption) {
      this.selectedOption = this.loadedOptions[0]
    }
  },
  methods: {
    onHideList () {
      this.searchValue = ''
      this.showList = false
    },
    findSelectedInOptions () {
      let foundOption = null
      // If passed in value is the string value of the selected id...
      if (this.selected && (typeof this.selected === 'string')) {
        foundOption = this.loadedOptions.find((option) => {
          return option.id === this.selected
        })

        // If the selected value is an object...
      } else if (typeof this.selected === 'object' && this.selected && this.selected.id !== null) {
        foundOption = this.loadedOptions.find((option) => {
          return option.id === this.selected.id
        })
      } else {
        return foundOption
      }

      // Add the 'id' key to the data object
      if (foundOption && !foundOption.id && foundOption._id) {
        foundOption.id = foundOption._id
        // remove the _id value
        delete foundOption._id
      }
      return foundOption
    },
    onShowList () {
      this.showList = true
      // wait until menu is rendered so it can be referenced...
      this.$nextTick(() => {
        const observer = new IntersectionObserver(this.infiniteScroll)
        observer.observe(this.$refs.loader)
      })
    },
    onSelected (item) {
      this.selectedOption = item
      this.showList = false
      this.$emit('selectedItem', item)
    },
    getValue (item) {
      return this.valueBy && item[this.valueBy] ? item[this.valueBy] : item
    },
    onSearchCancelled () {
      this.searchValue = ''
    },
    async infiniteScroll ([{ isIntersecting }]) {
      if (isIntersecting) {
        if (this.loadedOptions.length < this.totalResults) {
          this.loading = true
          this.$emit('loadMore')
        }
      }
    },
    updateOptions (opts) {
      this.loadedOptions = [...this.loadedOptions, ...opts]
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
  .ds-select {

    .select-container {
      position: relative;
      max-height: 36px;

      .ds-loader-container {
        position: absolute;
      }

      .selected-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: var(--input-padding, 0 1rem);
        height: var(--input-height, 36px);
        line-height: var(--input-height, 36px);
      }

      .selected-item span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .select-container.disabled {
      background-color: transparent;
      color: var(--ds-advanced-selected-disabled-color, rgba(255,255,255,0.5));
    }

    .select-container.disabled .selected-item {
      pointer-events: none;
      color: var(--ds-advanced-selected-item-color, rgba(255,255,255,0.5));
    }
  }

  .menu-content {

    .search-input {
      background-color: rgba(255,255,255,.1);
      margin: 8px;
      padding: 4px;
      display: flex;
      flex-direction: row;

      .search-icon {
        color: var(--main-view-bg-color)
      }

      input, label {
        margin: 0;
      }

      label {
        display: none;
      }

      input {
        width: 100%;
        padding: 4px;
        background: transparent;
        border: none;
        color: var(--main-font-color);
      }

      input:hover {
        outline: none;
      }
      input::placeholder {
        color: var(--main-font-color);
      }

      input::-webkit-search-cancel-button {
        //color: var(--color-link-and-buttons);
        //background-color: var(--color-link-and-buttons)
      }
      input:focus {
        outline: none;
      }
    }

    .select-list {
      background-clip: padding-box;
      font-size: 14px;
      padding-inline-start: 0;
      width: 100%;
      min-height: 0;
      list-style: outside none none; max-height: 240px; overflow:auto;
      margin-top: 0;
      background-color: var(--main-secondary-color);

      .list-item {
        padding: 1rem;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--main-font-color);
        background-color: var(--main-view-bg-color);
      }

      .list-item.selected {
        color: var(--color-link-and-buttons);
        font-weight: bold;
      }

      .list-item:hover {
        background-color: var(--main-color);
        color: var(--main-font-color);
      }

      .list-loading {
        background-color: var(--main-view-bg-color);
      }
    }
  }
</style>
