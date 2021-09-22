<template>
  <div>
    <ButtonCode />
    <api-details
      :title="cPropTitle"
      :c-props="cProps"
      :c-events="cEvents"
    />
  </div>
</template>

<script>
import ButtonCode from '@/components/codeblocks/ButtonCode'
import ApiDetails from '@/components/ApiDetails'
export default {
  name: 'DsButtonPage',
  components: {ApiDetails, ButtonCode},
  data () {
    return {
      cPropTitle: 'ds-button',
      cProps: [
        {
          name: 'href',
          type: 'String',
          description: 'Creates an anchor on the button.',
          default: 'null'
        },
        {
          name: 'type',
          type: 'String',
          description: 'Applies a type to the button',
          default: 'button'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disabled the button and prevents it\'s actions',
          default: 'false'
        },
        {
          name: 'md-ripple',
          type: 'Boolean',
          description: 'Enables/Disables the ripple effect',
          default: 'true'
        }
      ],
      cEvents: [
        {
          name: 'click',
          description: 'Triggered after a mouse click',
          value: '$event'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
