<template>
  <div class="ds-select">
    <label>{{ label }}</label>
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
import { api } from '@/utils/api'
import { ArrayUtils } from '@/utils/ArrayUtils'
import DsLoader from '@/components/controls/ds-loader/DsLoader'
import { StringUtils } from '@/utils/StringUtils'
import DsSearch from '@/components/controls/DsSearch'
import { headerKeys } from '@/constants/headerKeys'
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
    scrollOptions: {
      type: Object,
      default: () => ({
        path: null,
        take: 20,
        sortBy: 'name',
        sortDirection: 'asc',
        mapFn: () => {}
      })
    },
    disabled: {
      type: Boolean,
      infiniteScroll: true
    }
  },
  data () {
    return {
      options: [],
      currentPage: 0,
      totalPages: 0,
      totalResults: 0,
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
          // NOTE: This can return a null value. However on the mounted hook if it null, then it will be set to the
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
      return 'select-list-' + name + '-' + StringUtils.uuidv4()
    },
    filtered () {
      return this.options.filter(option => option.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    },
    allOptions () {
      return this.filtered
    },
    hasNextPage () {
      return this.filtered.length < this.totalResults && this.searchValue === ''
    }
  },
  async mounted () {
    if (this.scrollOptions.take) {
      this.take = this.scrollOptions.take
    }
    // Load options data...
    await this.loadMore()
    // If there is no option selected, then select the first one in the list
    if (this.options.length && !this.selectedOption) {
      this.selectedOption = this.options[0]
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
        foundOption = this.options.find((option) => {
          return option.id === this.selected
        })

        // If the selected value is an object...
      } else if (typeof this.selected === 'object' && this.selected && this.selected.id !== null) {
        foundOption = this.options.find((option) => {
          return option.id === this.selected.id
        })
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
    async loadMore () {
      if (this.scrollOptions && this.scrollOptions.path) {
        if ((this.totalResults === 0 || (this.options.length < this.totalResults)) && !this.loading) {
          this.loading = true
          // Get the response
          const responseData = await this.getResponseData()
          // Set the totalPages value
          this.totalPages = Math.ceil(Number(this.totalResults) / Number(this.take))
          // If the currentPage is less than the totalPages add more options
          if (this.currentPage < this.totalPages) {
            const opts = this.mapData(responseData)
            this.options = this.currentPage === 0 ? opts : this.options.concat(opts)
            // remove duplicate items
            this.options = ArrayUtils.toUniqueArray(this.options)
            this.currentPage++
          }
          this.loading = false
          return true
        }
        // Done
      }
      return false
    },
    async getResponseData () {
      let params = '?'
      if (this.searchValue !== '') {
        const searchParamField = this.searchField ? this.searchField : 'name'
        params += `${searchParamField}=${this.searchValue}`
      }

      params += this.take ? `&take=${this.take}` : ''
      params += this.scrollOptions.sort ? `&sortBy=${this.scrollOptions.sortBy}` : ''
      params += this.scrollOptions.sortDirection ? `&sortDirection=${this.scrollOptions.sortDirection.toUpperCase()}` : ''

      if (this.take) {
        params += `&skip=${this.currentPage * this.take}`
      }

      params = params !== '?' ? params : ''
      const response = await api.get(this.scrollOptions.path + params)
      if (response.headers) {
        this.totalResults = response.headers[headerKeys.PAGINATION_COUNT] || 0
      }
      return response.data
    },
    onSearchCancelled () {
      this.searchValue = ''
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
    async infiniteScroll ([{ isIntersecting }]) {
      if (isIntersecting) {
        await this.loadMore()
      }
    }
  }
}
</script>

<style lang="scss">
@use "../../../styles/variables";
  .ds-select {

    label {
      margin: 0 0 1rem 0;
      padding: 0;
    }

    .select-container {
      position: relative;

      .ds-loader-container {
        position: absolute;
      }

      .selected-item span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .select-container.disabled {
      background-color: transparent;
      color: rgba(255,255,255,0.5);
    }

    .select-container.disabled .selected-item {
      pointer-events: none;
      color: rgba(255,255,255,0.5);
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
