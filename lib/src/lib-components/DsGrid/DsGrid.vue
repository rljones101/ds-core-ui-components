<template>
  <div class="ds-grid">
    <div class="ds-grid-header">
      <div
        class="header-inputs"
      >
        <ds-filter
          v-if="gridOptions.filters && gridOptions.filters.length"
          v-model="selectedFilter"
          :filters="gridOptions.filters"
          :disabled="loading"
          @filter:cancel="onSearchCancelled"
        />
        <ds-search
          v-if="gridOptions.filters && gridOptions.filters.length && selectedFilter !== ''"
          v-model="searchValue"
          :disabled="loading"
          @search:find="onSearchFind"
          @search:cancel="onSearchCancelled"
        />
      </div>
      <div class="actions">
        <div>
          <ds-button
            v-for="(action, i) in headerControls"
            :key="i"
            class="ds-primary"
            :disabled="action.disableButton || loading"
            @click="action.handler(gridScope)"
          >
            {{ action.label }}
          </ds-button>
        </div>
      </div>
    </div>
    <div class="ds-grid-content">
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="loading"
          class="overlay-loading"
        >
          <md-progress-bar
            md-mode="indeterminate"
            class="grid-progress-bar"
          />
        </div>
      </transition>
      <transition
        name="fade"
      >
        <no-data-message
          v-if="!loading && Number(rowData.length) === 0"
          key="no-data-message"
          :title="gridOptions.name"
          :message="emptyMessage"
        />
        <div
          v-else-if="loading || Number(rowData.length) > 0"
          key="grid"
          class="table-content-container"
        >
          <base-grid
            :grid-options="agGridOptions"
            :row-data="rowData"
            :column-defs="columnDefs"
            :default-col-def="defaultColDef"
            :cache-block-size="cacheBlockSize"
            :max-blocks-in-cache="maxBlocksInCache"
            :framework-components="frameworkComponents"
            @edit:item="onEdit"
            @delete:item="onDelete"
            @delete:confirmed="onConfirmDelete"
            @details:item="onDetails"
            @copy:item="onCopy"
            @export-json:item="onExportJson"
            @grid:ready="onGridReady"
            @grid:updated="onRowDataUpdated"
            @grid:rowSelected="onRowSelected"
            @grid:selectionChanged="onSelectionChanged"
            @grid:sort="onSort"
          />
          <ds-pagination-controls
            v-model="page"
            :total-results="totalResults"
            :page-size="paginationPageSize"
            @page-change="onPageChange"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import EntityDetailsRenderer from '@/lib-components/DsGrid/cellRenderers/EntityDetailsRenderer'
import DsSearch from '@/lib-components/DsSearch'
import BaseGrid from '@/lib-components/DsGrid/BaseGrid'
import DsButton from '@/lib-components/DsButton'
import NoDataMessage from '@/lib-components/DsGrid/NoDataMessage'
import DsPaginationControls from '@/lib-components/DsPagination'
import DsFilter from '@/lib-components/DsFilter'
import RouterLinkCellRenderer from '@/lib-components/DsGrid/cellRenderers/RouterLinkCellRenderer'

export default {
  name: 'DsGrid',
  components: {
    DsFilter,
    DsPaginationControls,
    BaseGrid,
    DsSearch,
    DsButton,
    NoDataMessage
  },
  props: {
    gridOptions: {
      type: Object,
      required: true
    },
    rowData: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    totalResults: {
      type: Number,
      required: true
    },
    noDataMessage: {
      type: String,
      default: 'No results were found'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultColDef: {
        resizable: true,
        flex: 1,
        minWidth: 120,
        // simple string comparator
        comparator: (valueA) => {
          return valueA
        }
      },
      cacheBlockSize: null, // this is set in the created hook
      maxBlocksInCache: 100,
      paginationPageSize: null, // this is set in the created hook
      gridApi: null,
      agGridOptions: { rowData: [] },
      gridService: null,
      path: null,
      selectedFilter: null,
      searchValue: null,
      gridScope: null,
      gridResults: {
        resultCount: 0,
        totalResults: 0
      },
      frameworkComponents: {
        entityDetailsRenderer: EntityDetailsRenderer,
        routerLinkCellRenderer: RouterLinkCellRenderer
      },
      page: 1,
      skip: 20,
      sort: {}
    }
  },
  computed: {
    columnDefs() {
      return this.gridOptions.columnDefs
    },
    filters () {
      return this.gridOptions.filters || []
    },
    headerControls() {
      let actions = []

      if (!this.gridOptions.hideAddButton) {
        actions.push({
          label: 'Add ' + (this.gridOptions.addButtonLabel ? this.gridOptions.addButtonLabel : 'Item'),
          handler: this.onAdd
        })
      }

      if (this.gridOptions && this.gridOptions.headerControls) {
        actions = actions.concat(this.gridOptions.headerControls)
      }
      return actions
    },
    emptyMessage () {
      return this.noDataMessage || 'No results were found'
    }
  },
  created() {
    this.gridScope = this
    this.cacheBlockSize = this.gridOptions.take || 20
    this.paginationPageSize = this.cacheBlockSize
  },
  beforeMount() {
    this.agGridOptions = {
      getRowNodeId: (item) => {
        return item.id ? item.id.toString() : item._id.toString()
      },
      pagination: false,
      paginationAutoPageSize: false,
      paginationPageSize: this.paginationPageSize,
      rowData: [],
      animateRows: false,
      defaultColDef: {
        resizable: true,
        flex: 1,
        minWidth: 120,
        ...this.defaultColDef
      }
    }

    if (this.gridOptions && this.gridOptions.frameworkComponents) {
      const frameworkComponentKeys = Object.keys(this.gridOptions.frameworkComponents)
      frameworkComponentKeys.forEach((componentName) => {
        this.frameworkComponents[componentName] = this.gridOptions.frameworkComponents[componentName]
      })
    }
  },
  methods: {
    refreshGrid() {
      // clear the cache of the datasource data and refresh the grid
      this.gridApi.refreshInfiniteCache()
    },
    getParams() {
      const params = {
        sortBy: this.gridOptions.sortBy,
        sortDirection: this.gridOptions.sortDirection,
        take: this.gridOptions.take,
        skip: this.skip
      }

      if (this.selectedFilter !== null && this.searchValue !== null && this.searchValue !== '') {
        params[this.selectedFilter] = this.searchValue
      }
      return params
    },
    onGridReady(params) {
      this.gridApi = params.api
      this.gridApi.sizeColumnsToFit()
      this.$emit('grid:ready', params)
    },
    onPageChange(page) {
      const skip = page * this.paginationPageSize

      this.page = page
      this.skip = skip

      const params = {
        ...this.getParams(),
        ...this.sort,
        page: this.page,
        skip: this.skip
      }
      if (this.page > 1) {
        this.$emit('grid:updated', params)
      }
    },
    /**
     * This method is called from the 'actionsRenderer' to emit the button click events
     *
     * @param eventType The event string name
     * @param data  The event data to emit
     */
    emitEvent(eventType, data) {
      this.$emit(eventType, data)
    },
    onSort(sortOptions) {
      // reset the page to the first page when sorting the data
      this.sort = sortOptions
      const params = { ...this.getParams(), ...this.sort }
      this.$emit('grid:updated', params)
    },
    onRowDataUpdated() {
      this.$emit('grid:updated')
    },
    onRowSelected(event) {
      this.$emit('grid:rowSelected', { node: event.node })
    },
    onSelectionChanged(event) {
      this.$emit('grid:selectionChanged', { count: event.api.getSelectedNodes().length, nodes: event.api.getSelectedNodes() })
    },
    onAdd() {
      if (this.gridOptions?.handlers?.onAdd) {
        this.gridOptions?.handlers?.onAdd()
      } else {
        this.$emit('add:item')
      }
    },
    onEdit(entity) {
      if (this.gridOptions?.handlers?.onEdit) {
        this.gridOptions.handlers.onEdit(entity)
      } else {
        this.$emit('edit:item', entity)
      }
    },
    onDelete(entity) {
      if (this.gridOptions?.handlers?.onDelete) {
        this.gridOptions.handlers.onDelete(entity)
      } else {
        this.$emit('delete:item', entity)
      }
    },
    onConfirmDelete(entity) {
      if (this.gridOptions?.handlers?.onConfirmDelete) {
        this.gridOptions.handlers.onConfirmDelete(entity)
      } else {
        this.$emit('delete:confirmed', entity)
      }
    },
    onDetails(entity) {
      if (this.gridOptions?.handlers?.onDetails) {
        this.gridOptions.handlers.onDetails(entity)
      } else {
        this.$emit('details:item', entity)
      }
    },
    onCopy(entity) {
      if (this.gridOptions?.handlers?.onCopy) {
        this.gridOptions.handlers.onCopy(entity)
      } else {
        this.$emit('copy:item', entity)
      }
    },
    onExportJson(entity) {
      if (this.gridOptions?.handlers?.onExportJson) {
        this.gridOptions.handlers.onExportJson(entity)
      } else {
        this.$emit('export-json:item', entity)
      }
    },
    onSearchFind() {
      this.page = 1
      const params = this.getParams()
      this.$emit('grid:updated', params)
    },
    onSearchCancelled() {
      this.searchValue = ''
      this.page = 1
      const params = this.getParams()
      this.$emit('grid:updated', params)
    }
  }
}
</script>

<style lang="scss">
@use "../../../../src/styles/variables";
.ds-grid {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100%;
  overflow: hidden;
  isolation: isolate;

  .overlay-loading {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    inset: 0;
    background-color: rgba(0,0,0,0.02);
    z-index: 25;
    transition: transform 300ms ease-in-out;
  }

  .overlay-loading .grid-progress-bar {
    position: absolute;
    width: 100%;
    top: 0;
  }

  .overlay-loading .overlay-loading-message {
    color: var(--button-color);
    font-size: 16px;
  }

  .ds-grid-header {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    background-color: var(--main-color);
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-flow: column wrap;

    .header-inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      > * {
        width: 100%;
      }
    }

    > * {
      flex: 1;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }

  .ds-grid-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--main-color);
  }

  .ds-grid-content .table-content-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 500px;
    border: 1px solid var(--main-color);
    background-color: var(--main-color);
  }

  @media screen and (min-width: variables.$appMinWidth1200) {

    .ds-grid-header {
      display: flex;
      flex-flow: row wrap;

      .header-inputs {
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>
