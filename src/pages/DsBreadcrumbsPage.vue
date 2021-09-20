<template>
  <div>
    <BreadcrumbsCode />
    <api-details :title="cPropTitle" :c-props="cProps" :c-events="cEvents" />
  </div>
</template>

<script>
import BreadcrumbsCode from '@/components/codeblocks/BreadcrumbsCode'
import ApiDetails from '@/components/ApiDetails'
export default {
  name: 'DsBreadcrumbsPage',
  components: {
    BreadcrumbsCode,
    ApiDetails
  },
  data() {
    return {
      cPropTitle: 'ds-breadcrumbs',
      cProps: [
        {
          name: 'crumbs',
          type: 'Array',
          description: '(required) An array of objects that have a label, routeName and params',
          default: '[]'
        },
      ],
      cEvents: [
        {
          name: 'selected',
          description: 'Triggered when a breadcrumb is selected',
          value: '{ label, routeName, params }'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
