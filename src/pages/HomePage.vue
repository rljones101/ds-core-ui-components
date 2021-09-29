<template>
  <div class="home-page">
    <h2>Introduction</h2>
    <p>This is documentation that will cover how to use the internal components that are used across different projects.</p>
    <h3>Installation</h3>
    <p>How to add the web components to your project</p>
    <vue-code-highlight>
      <pre>
      <code>
        npm i ds-core-ui-components
      </code>
    </pre>
    </vue-code-highlight>
    <h3>Usage</h3>
    <p>Add the following import statements:</p>
    <vue-code-highlight language="javascript">
      <pre>
        <code>
        import Vue from 'vue'
        import DsCoreUiComponents from 'ds-core-ui-components'
        Vue.use(DsCoreUiComponents)
        </code>
      </pre>
    </vue-code-highlight>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight'
export default {
  name: 'HomePage',
  components: {
    VueCodeHighlight
  }
}
</script>

<style scoped lang="scss">
.home-page {
  h3 {
    margin-top: 2rem;
  }
}
</style>
