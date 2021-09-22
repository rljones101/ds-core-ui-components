<template>
  <div class="home-page">
    <h2>Introduction</h2>
    <p>This is documentation that will cover how to use the internal components that are used across different projects.</p>
    <h3>Installation</h3>
    <p>How to add the web components to your project</p>
    <vue-code-highlight language="JavaScript">
      <pre>
      <code>
        "core-ui-components": "https://github.com/&lt;user>/core-ui-components.git"
      </code>
    </pre>
    </vue-code-highlight>
    <h3>Usage</h3>
    <p>Add the following import statements:</p>
    <vue-code-highlight language="javascript">
      <pre>
        <code>
        // TIP: Only import the components that you need
        import { HelloWorld } from 'core-coupon-components/dist/vueComponents/core-ui.umd'

        // imports the css styles
        import 'core-coupon-components/dist/vueComponents/core-ui.css'
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
