<template>
  <div>
    <ButtonCode />
    <api-details
      :title="cPropTitle"
      :c-props="cProps"
      :c-events="cEvents"
    />
    <ButtonIconCode />
    <api-details
      :title="buttonIcon.title"
      :c-props="buttonIcon.props"
    />
  </div>
</template>

<script>
import ButtonCode from '@/components/codeblocks/ButtonCode'
import ApiDetails from '@/components/ApiDetails'
import ButtonIconCode from '@/components/codeblocks/ButtonIconCode'
export default {
  name: 'DsButtonPage',
  components: { ButtonIconCode, ApiDetails, ButtonCode },
  data () {
    return {
      cPropTitle: 'ds-button',
      cProps: [
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
        }
      ],
      cEvents: [
        {
          name: 'click',
          description: 'Triggered after a mouse click',
          value: '$event'
        }
      ],
      buttonIcon: {
        title: 'ds-icon',
        props: [
          {
            name: 'ds-icon-button',
            description: 'Button class',
            default: ''
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
