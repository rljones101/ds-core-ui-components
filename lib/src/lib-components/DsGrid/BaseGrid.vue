<template>
  <div
    style="overflow:hidden; flex-grow: 1;"
    class="base-grid"
  >
    <ag-grid-vue
      class="ag-grid ag-theme-material"
      :grid-options="gridOptions"
      :row-data="rowData"
      :column-defs="columnDefs"
      :cache-block-size="cacheBlockSize"
      :max-blocks-in-cache="maxBlocksInCache"
      :animate-rows="false"
      :debug="false"
      :framework-components="frameworkComponents"
      :context="context"
      :suppress-row-click-selection="true"
      :row-multi-select-with-click="true"
      row-selection="multiple"
      @grid-ready="onGridReady"
      @row-data-updated="onRowDataUpdated"
      @row-selected="onRowSelected"
      @selection-changed="onSelectionChanged"
      @sort-changed="onSortChanged"
    />
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import EntityDetailsRenderer from '@/lib-components/DsGrid/cellRenderers/EntityDetailsRenderer'
import RouterLinkCellRenderer from '@/lib-components/DsGrid/cellRenderers/RouterLinkCellRenderer'

export default {
  name: 'BaseGrid',
  components: {
    AgGridVue
  },
  props: {
    rowData: {
      type: Array,
      default() {
        return []
      }
    },
    gridOptions: {
      type: Object,
      default() {
        return {
          sortBy: null,
          sortDirection: 'asc'
        }
      }
    },
    columnDefs: {
      type: Array,
      default() {
        return [
          {

          }
        ]
      }
    },
    defaultColDef: {
      type: Object,
      default() {
        return {
          resizable: true,
          flex: 1,
          minWidth: 120,
        }
      }
    },
    cacheBlockSize: {
      type: Number,
      default: 20
    },
    maxBlocksInCache: {
      type: Number,
      default: 100
    },
    frameworkComponents: {
      type: Object,
      default() {
        return {
          entityDetailsRenderer: EntityDetailsRenderer,
          routerLinkCellRenderer: RouterLinkCellRenderer
        }
      }
    },
    paginationPageSize: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      context: { componentParent: this },
      currentSort: this.gridOptions.sortBy || 'name',
      currentSortOrder: this.gridOptions.sortDirection || 'asc',
      gridApi: null,
      columnApi: null
    }
  },
  methods: {
    emitEvent(eventType, data) {
      this.$emit(eventType, data)
    },
    onGridReady(params) {
      this.gridApi = params.api
      this.columnApi = params.columnApi
      const colKeys = params.columnApi.getAllColumns().map(column => column.colId)
      this.columnApi.autoSizeColumns(colKeys, false)
      this.$emit('grid:ready', params)
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
    onSortChanged() {
      const sortState = this.gridApi.getSortModel()
      if (sortState.length) {
        sortState.forEach((item) => {
          this.$emit('grid:sort', { sortBy: item.colId, sortDirection: item.sort.toUpperCase() })
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../../../node_modules/ag-grid-community/dist/styles/ag-theme-material.css";
</style>
