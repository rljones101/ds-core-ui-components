<template>
<div>
  <code-viewer>
    <template #header>
      DsButton
    </template>
    <template #content>
      <p>
        This button extends MdButton from <a href="https://www.creative-tim.com/vuematerial/components/button" target="_blank">Vue Material</a>
      </p>
      <div class="row-container">
        <small>Flat</small>
        <ds-button>Default</ds-button>
        <ds-button :md-ripple="false">Ripple Off</ds-button>
        <ds-button class="md-primary">Primary</ds-button>
        <ds-button class="md-accent">Accent</ds-button>
        <ds-button :disabled="true">Disabled</ds-button>
      </div>
      <div class="row-container">
        <small>Raised</small>
        <ds-button class="md-raised">Default</ds-button>
        <ds-button class="md-raised" :md-ripple="false">Ripple Off</ds-button>
        <ds-button class="md-raised md-primary">Primary</ds-button>
        <ds-button class="md-raised md-accent">Accent</ds-button>
        <ds-button class="md-raised" :disabled="true">Disabled</ds-button>
      </div>
      <div class="row-container">
        <small>Dense</small>
        <ds-button class="md-dense md-primary">Flat</ds-button>
        <ds-button class="md-dense md-raised md-primary">Raised</ds-button>
      </div>
    </template>
    <template #html-code-block>
      <pre>
          &lt;div&gt;
            &lt;small>Flat&lt;/small>
            &lt;ds-button>Default&lt;/ds-button>
            &lt;ds-button :md-ripple="false">Ripple Off&lt;/ds-button>
            &lt;ds-button class="md-primary">Primary&lt;/ds-button>
            &lt;ds-button class="md-accent">Accent&lt;/ds-button>
            &lt;ds-button :disabled="true">Disabled&lt;/ds-button>
          &lt;/div>
          &lt;div>
            &lt;small>Raised&lt;/small>
            &lt;ds-button class="md-raised">Default&lt;/ds-button>
            &lt;ds-button class="md-raised" :md-ripple="false">Ripple Off&lt;/ds-button>
            &lt;ds-button class="md-raised md-primary">Primary&lt;/ds-button>
            &lt;ds-button class="md-raised md-accent">Accent&lt;/ds-button>
            &lt;ds-button class="md-raised" :disabled="true">Disabled&lt;/ds-button>
          &lt;/div>
          &lt;div>
            &lt;small>Dense&lt;/small>
            &lt;ds-button class="md-dense md-primary">Flat&lt;/ds-button>
            &lt;ds-button class="md-dense md-raised md-primary">Raised&lt;/ds-button>
          &lt;/div>
      </pre>
    </template>
  </code-viewer>

</div>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
import DsButton from '@/components/controls/ds-button/DsButton'
export default {
  components: {
    DsButton,
    CodeViewer,
  },
  name: 'ButtonCode',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
