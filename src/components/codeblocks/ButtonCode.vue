<template>
  <div>
    <code-viewer>
      <template #header>
        DsButton
      </template>
      <template #content>
        <p>
          The flat button is the default one. No classes or properties needs to be attached to it to make it flat.
          The raised button can be achieved with the <code>ds-raised</code> class.
        </p>
        <div class="row-container">
          <small>Flat</small>
          <ds-button>Default</ds-button>
          <ds-button class="ds-primary">
            Primary
          </ds-button>
          <ds-button class="ds-accent">
            Accent
          </ds-button>
          <ds-button :disabled="true">
            Disabled
          </ds-button>
        </div>
        <div class="row-container">
          <small>Raised</small>
          <ds-button class="ds-raised">
            Default
          </ds-button>
          <ds-button class="ds-raised ds-primary">
            Primary
          </ds-button>
          <ds-button class="ds-raised ds-accent">
            Accent
          </ds-button>
          <ds-button
            class="ds-raised"
            :disabled="true"
          >
            Disabled
          </ds-button>
        </div>
        <div class="row-container">
          <small>Dense</small>
          <ds-button class="ds-dense ds-primary">
            Flat
          </ds-button>
          <ds-button class="ds-dense ds-raised ds-primary">
            Raised
          </ds-button>
        </div>
      </template>
      <template #html-code-block>
        <pre>
          &lt;div class="row-container"&gt;
            &lt;small&gt;Flat&lt;/small&gt;
            &lt;ds-button&gt;Default&lt;/ds-button&gt;
            &lt;ds-button class="ds-primary"&gt;
              Primary
            &lt;/ds-button&gt;
            &lt;ds-button class="ds-accent"&gt;
              Accent
            &lt;/ds-button&gt;
            &lt;ds-button :disabled="true"&gt;
              Disabled
            &lt;/ds-button&gt;
          &lt;/div&gt;
          &lt;div class="row-container"&gt;
            &lt;small&gt;Raised&lt;/small&gt;
            &lt;ds-button class="ds-raised"&gt;
              Default
            &lt;/ds-button&gt;
            &lt;ds-button class="ds-raised ds-primary"&gt;
              Primary
            &lt;/ds-button&gt;
            &lt;ds-button class="ds-raised ds-accent"&gt;
              Accent
            &lt;/ds-button&gt;
            &lt;ds-button
                class="ds-raised"
                :disabled="true"
            &gt;
              Disabled
            &lt;/ds-button&gt;
          &lt;/div&gt;
          &lt;div class="row-container"&gt;
            &lt;small&gt;Dense&lt;/small&gt;
            &lt;ds-button class="ds-dense ds-primary"&gt;
              Flat
            &lt;/ds-button&gt;
            &lt;ds-button class="ds-dense ds-raised ds-primary"&gt;
              Raised
            &lt;/ds-button&gt;
          &lt;/div&gt;
      </pre>
      </template>
    </code-viewer>
  </div>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
export default {
  name: 'ButtonCode',
  components: {
    CodeViewer
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
