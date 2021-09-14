<template>
  <div
    class="ds-multi-select"
  >
    <ds-filter-controls
      :filters="searchFilters"
      class="search-filters"
      @filterChange="filterChange"
    />
    <div class="ds-multi-select-container">
      <h4>{{ label }}</h4>
      <ul
        v-if="selectOptions"
        ref="menu"
        class="select-list ds-scrollbar"
      >
        <li
          v-if="loading"
          style="padding: 1rem 0;"
        >
          loading...
          <ds-loader />
        </li>
        <li
          v-for="option in selectOptions"
          :key="option.id"
          class="list-item"
        >
          <md-checkbox
            v-model="copyOfSelectedItems"
            :value="option.id"
          >
            <span style="display: flex; flex-direction: column; height: 100%;">{{ option.name }}</span>
          </md-checkbox>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ArrayUtils } from '@/utils/ArrayUtils'
import { api } from '@/utils/api'
import DsLoader from '@/components/controls/ds-loader/DsLoader'
import DsFilterControls from '@/components/controls/ds-filter-controls'
import { headerKeys } from '@/constants/headerKeys'
export default {
  name: 'DsMultiSelect',
  components: { DsLoader, DsFilterControls },
  model: {
    prop: 'selectedItems',
    event: 'selected'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    selectedItems: {
      type: Array,
      default () {
        return []
      }
    },
    options: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: Boolean,
    searchFilters: {
      type: Array,
      default () {
        return []
      }
    },
    scrollOptions: {
      type: Object,
      default: () => ({
        path: null,
        infiniteScroll: true,
        take: 20,
        sortBy: '_id',
        sortDirection: 'asc',
        mapFn: () => {}
      })
    }
  },
  data () {
    return {
      gridOptions: {
        columnDefs: [
          {
            label: '',
            name: 'name'
          }
        ]
      },
      searchValue: '',
      showList: false,
      loading: false,
      selectedOption: { id: '-1', name: 'Choose..' },
      loadedOptions: [],
      currentPage: 0,
      totalPages: 0,
      totalResults: 0,
      take: 20,
      scrollListenerAdd: false,
      query: null
    }
  },
  computed: {
    filteredOptions () {
      return this.options.filter((item) => {
        return !this.searchValue || item.name.toLowerCase().match(this.searchValue.toLowerCase())
      })
    },
    selectOptions: {
      get () {
        return this.loadedOptions
      },
      set (value) {
        this.loadedOptions = value
      }

    },
    copyOfSelectedItems: {
      get () {
        return this.selectedItems
      },
      set (selected) {
        this.$emit('selected', selected)
      }
    }
  },
  async mounted () {
    await this.loadMore()
    const menu = this.$refs.menu
    if (menu && !this.scrollListenerAdd) {
      menu.addEventListener('scroll', () => {
        if (menu.scrollTop + menu.clientHeight >= menu.scrollHeight) {
          this.loadMore()
        }
      })
      this.scrollListenerAdd = true
    }
    if (this.selectOptions.length && !this.selectedOption) {
      this.selectedOption = this.selectOptions[0]
    }
    this.take = this.scrollOptions.take || 20
  },
  methods: {
    async filterChange (params) {
      this.query = params
      this.currentPage = 0
      const responseData = await this.getResponseData()
      this.selectOptions = this.mapData(responseData)
    },
    onScrollEnd () {
      this.$emit('scroll:end')
    },
    removeSelected (removeItem) {
      const selected = [...this.selectedItems]
      selected.splice(selected.findIndex(item => item.id === removeItem.id), 1)
      this.$emit('selected', selected)
    },
    cancel () {
      this.searchValue = null
    },
    async loadMore () {
      if (this.scrollOptions && this.scrollOptions.infiniteScroll && this.scrollOptions.path) {
        if (this.totalResults === 0 || (this.selectOptions.length < this.totalResults)) {
          this.loading = true
          // Get the response
          const responseData = await this.getResponseData()
          // Set the totalPages value
          this.totalPages = Math.ceil(Number(this.totalResults) / Number(this.take))
          // If the currentPage is less than the totalPages add more options
          if (this.currentPage < this.totalPages) {
            const opts = this.mapData(responseData)
            this.loadedOptions = this.currentPage === 0 ? opts : this.loadedOptions.concat(opts)
            // remove duplicate items
            this.loadedOptions = ArrayUtils.toUniqueArray(this.loadedOptions)
            this.currentPage++
          }
          this.loading = false
        }
        // Done
      }
    },
    async getResponseData () {
      let params = this.query ? this.query + '&' : '?'
      params += this.scrollOptions.take ? `take=${this.scrollOptions.take}` : ''
      params += this.scrollOptions.sort ? `&sort=${this.scrollOptions.sort}` : ''
      params += this.scrollOptions.sortDirection ? `&sortDirection=${this.scrollOptions.sortDirection}` : ''
      params += `page=${this.currentPage}`
      const response = await api.get(this.scrollOptions.path + params)
      if (response.headers) {
        this.totalResults = response.headers[headerKeys.PAGINATION_COUNT] || 0
      }
      return response.data
    },
    async onSearch (event) {
      this.searchValue = event.target.value
      this.currentPage = 0
      const responseData = await this.getResponseData()
      this.selectOptions = this.mapData(responseData)
    },
    mapData (responseData) {
      if (typeof this.scrollOptions.mapFn === 'function') {
        return responseData.map(item => this.scrollOptions.mapFn(item))
      }

      return responseData.map(item => ({
        id: item._id || item.id,
        name: item.name
      }))
    },
    onClose () {
      this.showList = false
    }
  }
}
</script>

<style lang="scss">
    .ds-multi-select {
      // md-selected row color
      --md-theme-default-rowvariant: rgba(255,255,255, 0.20) !important;

      width: 100%;
      height: 100%;
      max-width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1rem;

      .options-container {
        border-right: 1px solid var(--main-color);
        flex-basis: 50%;
        height: 100%;
        width: 100%;
        padding: 20px;
      }

      .ds-multiselect-label {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 10px;
        padding: 0 5px;
      }

      .ds-multi-select-container {
        display: grid;
        grid-template-rows: auto 1fr;
        overflow: auto;
        background-color: var(--main-view-bg-color);
        padding: 1rem;

        h4 {
          margin: 0;
          padding: 1rem 0;
        }

        .selected-group {
          display: flex;
          flex-direction: column;
        }

        .grid-select {
          min-height: 350px;
          overflow: auto;
          padding: 10px 0 0;
        }

        .select-option {
          display: flex;
          flex-direction: row;
          align-items: center;
          border-bottom: 1px solid var(--main-color);
          min-height: 62px;
        }

        .select-option:last-child {
          border-bottom: none;
        }

        .selected-group {
          padding: 1rem;
          min-width: 250px;
          overflow: auto;
        }

        .selected-group-item {
          display: inline-flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: var(--card-and-table-text-colors);
          border: 1px solid rgba(255,255,255,0.1);
          background-color: var(--main-color);
          border-radius: 32px;
          margin: 5px;
          cursor: pointer;
          height: 32px;
          line-height: 32px;
          min-width: 50px;
          vertical-align: middle;

          .label {
            padding: 0 6px 0 12px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .close-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background-color: var(--button-color);
            color: var(--main-view-bg-color);
            margin-right: 6px;

            .material-icons {
              font-size: 14px;
            }
          }
        }

        /*  OVERRIDE DEFAULT MD-CHECKBOX STYLES  */
        .md-checkbox.md-theme-default .md-checkbox-container {
          border-color: rgba(255,255,255,0.3);
        }

        .md-checkbox.md-theme-default.md-checked .md-checkbox-container {
          border-color: var(--button-color);
        }
      }

      .search-input {
        background-color: var(--main-view-bg-color);
        margin: 1rem 0;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid var(--main-secondary-color);

        .search-icon {
          color: var(--main-font-color)
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
          color: rgba(255,255,255,0.2);
        }

        input::-webkit-search-cancel-button {
          color: var(--button-color);
          background-color: var(--button-color)
        }
        input:focus {
          outline: none;
        }
      }

      .select-list {
        display: flex;
        flex-direction: column;
        background-clip: padding-box;
        font-size: 1rem;
        padding-inline-start: 0;
        min-height: 0;
        list-style: outside none none;
        max-height: 500px;
        overflow:auto;
        margin: 0;
        width: 100%;
        height: 100%;
        padding: 1rem;

        .list-item {
          display: flex;
          align-items: center;
          padding: 1rem;
          cursor: pointer;
          color: var(--main-font-color);
          background-color: var(--main-view-bg-color);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .md-checkbox {
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
          margin: 0;
          display: flex;
          align-items: center;
          height: auto;

          .md-checkbox-label {
            height: auto;
          }
        }

        .list-item .md-checkbox.md-checked .md-checkbox-label {
          font-weight: bold;
          color: var(--button-color);
        }

        .list-item:hover {
          background-color: rgba(255,255,255,0.1);
          color: var(--button-color);
        }
      }
    }
</style>
