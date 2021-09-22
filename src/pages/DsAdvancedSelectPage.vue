<template>
  <div>
    <advanced-select-code />
    <api-details
      :title="cPropTitle"
      :c-props="cProps"
      :c-events="cEvents"
    />
  </div>
</template>

<script>
import AdvancedSelectCode from '@/components/codeblocks/AdvancedSelectCode'
import ApiDetails from '@/components/ApiDetails'
export default {
  name: 'DsAdvancedSelectPage',
  components: {ApiDetails, AdvancedSelectCode},
  data () {
    return {
      cPropTitle: 'ds-advanced-select',
      cProps: [
        {
          name: 'label',
          type: 'String',
          description: 'Adds a label',
          default: 'null'
        },
        {
          name: 'selected',
          type: '[String, Number, Object]',
          description: 'The value that is selected',
          default: 'null'
        },
        {
          name: 'options',
          type: 'Array',
          description: 'An array of objects with id, name keys',
          default: 'ex: [{id: 1, name: \'foo\' }]'
        }
      ],
      cEvents: [
        {
          name: 'selectedItem',
          description: 'Returns the selected item in the list',
          value: 'ex: { id: 1, name: \'foo\' }'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
