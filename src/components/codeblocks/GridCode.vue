<template>
  <code-viewer>
    <template #header>
      DsGrid
    </template>
    <template #content>
      <p>
        This grid is built using <a
          href="https://www.ag-grid.com/vue-data-grid/getting-started/"
          target="_blank"
        >AgGrid</a>
      </p>
      <div style="display: flex; width: 100%;">
        <ds-grid
          :grid-options="gridOptions"
          :row-data="rowData"
          :total-results="totalResults"
          :loading="isLoading"
          @grid:updated="onGridUpdated"
        />
      </div>
    </template>
    <template #html-code-block>
      <pre>
        &lt;ds-grid
          :grid-options="gridOptions"
          :row-data="rowData"
          :total-results="totalResults"
          @grid:updated="onGridUpdated"
      /&gt;
      </pre>
    </template>
    <template #javascript-code-block>
      <pre>
import DsGrid from '@/components/DsGrid/DsGrid'

export default {
  name: 'GridCode',
  components: {
    DsGrid
  },
  data() {
    return {
      gridOptions: {
        addButtonLabel: 'User',
        columnDefs: [
          {
            field: 'id',
            headerName: 'ID',
          },
          {
            field: 'name',
            headerName: 'Name'
          },
          {
            field: 'gender',
            headerName: 'Gender'
          },
          {
            field: 'email',
            headerName: 'Email'
          },
          {
            field: 'status',
            headerName: 'Status'
          },
        ]
      },
      rowData: [],
      totalResults: 100,
      currentPage: 1,
      isLoading: false
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      this.isLoading = true
      const response = await fetch(`https://gorest.co.in/public/v1/users?page=${this.currentPage}`)
      const users = await response.json()
      this.rowData = users.data
      this.totalResults = users.meta.pagination.total
      this.isLoading = false
    },
    async onGridUpdated(params) {
      this.currentPage = params.page
      await this.getUsers()
    }
  }
}
      </pre>
    </template>
  </code-viewer>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'

export default {
  name: 'GridCode',
  components: {
    CodeViewer
  },
  data() {
    return {
      gridOptions: {
        addButtonLabel: 'User',
        columnDefs: [
          {
            field: 'id',
            headerName: 'ID',
          },
          {
            field: 'name',
            headerName: 'Name'
          },
          {
            field: 'gender',
            headerName: 'Gender'
          },
          {
            field: 'email',
            headerName: 'Email'
          },
          {
            field: 'status',
            headerName: 'Status'
          },
        ]
      },
      rowData: [],
      totalResults: 100,
      currentPage: 1,
      isLoading: false
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      this.isLoading = true
      const response = await fetch(`https://gorest.co.in/public/v1/users?page=${this.currentPage}`)
      const users = await response.json()
      this.rowData = users.data
      this.totalResults = users.meta.pagination.total
      this.isLoading = false
    },
    async onGridUpdated(params) {
      this.currentPage = params.page
      await this.getUsers()
    }
  }
}
</script>

<style scoped>

</style>
