<template>
  <div>
    <pagination-code />
    <api-details :title="cPropTitle" :c-props="cProps" :c-events="cEvents" />
  </div>
</template>

<script>
import PaginationCode from '@/components/codeblocks/PaginationCode'
import ApiDetails from '@/components/ApiDetails'
export default {
  name: 'DsPaginationPage',
  components: {
    PaginationCode,
    ApiDetails
  },
  data() {
    return {
      cPropTitle: 'DsPagination',
      cProps: [
        {
          name: 'totalResults',
          type: 'Number',
          description: '(required) The total number results to page through',
          default: 100
        },
        {
          name: 'pageSize',
          type: 'Number',
          description: '(required) The max number of items to display on a given page',
          default: 20
        },
        {
          name: 'currentPage',
          type: 'Number',
          description: '(required) The current page number that is being displayed',
          default: 1
        }
      ],
      cEvents: [
        {
          name: 'change',
          description: 'Triggered when the page value is initially set and updated',
          value: '{ page, totalPages, pageSize, next, prev }'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
