<template>
  <div>
    <grid-code />
    <api-details
      :title="cPropTitle"
      :c-props="cProps"
      :c-events="cEvents"
    />
  </div>
</template>

<script>
import GridCode from '@/components/codeblocks/GridCode'
import ApiDetails from '@/components/ApiDetails'
export default {
  name: 'DsGridPage',
  components: {
    GridCode,
    ApiDetails
  },
  data() {
    return {
      cPropTitle: 'ds-grid',
      cProps: [
        {
          name: 'gridOptions',
          type: 'Object',
          description: '(required) This is an object that defines (addButtonLabel, sortDirection, sortBy, take, and columnDefs)',
          default: '{ addButtonLabel, sortDirection, sortBy, take, columnDefs }'
        },
        {
          name: 'rowData',
          type: 'Array',
          description: '(required) An array of items to display within the grid. Must match the define column definitions.',
          default: '[]'
        },
        {
          name: 'totalResults',
          type: 'Number',
          description: '(required) The total number of items the grid will display',
          default: 0
        },
        {
          name: 'noDataMessage',
          type: 'String',
          description: 'Used to show an empty results message in the grid',
          default: 'No results were found'
        },
        {
          name: 'loading',
          type: 'Boolean',
          description: 'Used to show the loading state in the grid',
          default: 'false'
        }
      ],
      cEvents: [
        {
          name: 'grid:ready',
          description: 'Triggered when the grid is ready',
          value: '{ api, columnApi.. }'
        },
        {
          name: 'grid:updated',
          description: 'Triggered when the grid data updates',
          value: '{ page, take, skip, sortBy, sortDirection }'
        },
        {
          name: 'add:item',
          description: 'Triggered when the Add button is clicked',
          value: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
