<template>
  <code-viewer>
    <template #header>
      DsIcon
    </template>
    <template #content>
      <p>
        To display icons inside buttons you only need to add a class and you're good to go. And you can also combine it with the raised class.
      </p>
      <div class="row-container">
        <small>Flat</small>
        <ds-button class="ds-icon-button">
          <ds-icon>home</ds-icon>
        </ds-button>
        <ds-button class="ds-icon-button ds-primary">
          <ds-icon>menu</ds-icon>
        </ds-button>
        <ds-button class="ds-icon-button ds-accent">
          <ds-icon>thumb_up</ds-icon>
        </ds-button>
        <ds-button
          class="ds-icon-button"
          disabled
        >
          <ds-icon>add</ds-icon>
        </ds-button>
      </div>
      <div class="row-container">
        <small>Raised</small>
        <ds-button class="ds-raised ds-icon-button">
          <ds-icon>home</ds-icon>
        </ds-button>
        <ds-button class="ds-raised ds-icon-button ds-primary">
          <ds-icon>menu</ds-icon>
        </ds-button>
        <ds-button class="ds-raised ds-icon-button ds-accent">
          <ds-icon>thumb_up</ds-icon>
        </ds-button>
        <ds-button
          class="ds-raised ds-icon-button"
          disabled
        >
          <ds-icon>add</ds-icon>
        </ds-button>
      </div>
      <div class="row-container">
        <small>Dense</small>
        <ds-button class="ds-raised ds-dense ds-icon-button ds-primary">
          <ds-icon>person</ds-icon>
        </ds-button>
        <ds-button class="ds-raised ds-dense ds-icon-button md-raised ds-primary">
          <ds-icon>cached</ds-icon>
        </ds-button>
      </div>
    </template>
    <template #html-code-block>
      <pre>
    &lt;div class="row-container"&gt;
      &lt;small&gt;Flat&lt;/small&gt;
      &lt;ds-button class="ds-icon-button"&gt;
        &lt;ds-icon&gt;home&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
      &lt;ds-button class="ds-icon-button ds-primary"&gt;
        &lt;ds-icon&gt;menu&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
      &lt;ds-button class="ds-icon-button ds-accent"&gt;
        &lt;ds-icon&gt;thumb_up&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
      &lt;ds-button
          class="ds-icon-button"
          disabled
      &gt;
        &lt;ds-icon&gt;add&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
    &lt;/div&gt;
    &lt;div class="row-container"&gt;
      &lt;small&gt;Raised&lt;/small&gt;
      &lt;ds-button class="ds-raised ds-icon-button"&gt;
        &lt;ds-icon&gt;home&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
      &lt;ds-button class="ds-raised ds-icon-button ds-primary"&gt;
        &lt;ds-icon&gt;menu&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
      &lt;ds-button class="ds-raised ds-icon-button ds-accent"&gt;
        &lt;ds-icon&gt;thumb_up&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
      &lt;ds-button
          class="ds-raised ds-icon-button"
          disabled
      &gt;
        &lt;ds-icon&gt;add&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
    &lt;/div&gt;
    &lt;div class="row-container"&gt;
      &lt;small&gt;Dense&lt;/small&gt;
      &lt;ds-button class="ds-raised ds-dense ds-icon-button ds-primary"&gt;
        &lt;ds-icon&gt;person&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
      &lt;ds-button class="ds-raised ds-dense ds-icon-button md-raised ds-primary"&gt;
        &lt;ds-icon&gt;cached&lt;/ds-icon&gt;
      &lt;/ds-button&gt;
    &lt;/div&gt;
      </pre>
    </template>
  </code-viewer>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
export default {
  name: 'ButtonIconCode',
  components: {
    CodeViewer
  }
}
</script>

<style scoped>
  .row-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 100%;
  }
</style>
