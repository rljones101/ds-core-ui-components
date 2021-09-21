<template>
<div>
  <date-picker-code />
  <api-details :title="cPropTitle" :c-props="cProps" :c-events="cEvents" />
</div>
</template>

<script>
import DatePickerCode from '@/components/codeblocks/DatePickerCode'
import ApiDetails from '@/components/ApiDetails'
export default {
  name: 'DsDatepickerPage',
  components: {
    DatePickerCode,
    ApiDetails
  },
  data() {
    return {
      cPropTitle: 'ds-datepicker',
      cProps: [
        {
          name: 'label',
          type: 'String',
          description: '(required) The label to display when not set to inline',
          default: 'null'
        },
        {
          name: 'inline',
          type: 'Boolean',
          description: '(required) Set to \'true\' if you want to always show the calendar',
          default: 'false'
        },
        {
          name: 'value',
          type: '[Date, String]',
          description: 'Set the datetime here. It can be a Date object or a String value (must follow the format that is provided)',
          default: 'null'
        },
        {
          name: 'dateFormat',
          type: 'String',
          description: 'This is the format that is accepted by the component',
          default: 'MM-DD-YYYY hh:mm a'
        }
      ],
      cEvents: [
        {
          name: 'input',
          description: 'Triggered when the page value is initially set and updated',
          value: 'String value that is displayed'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
