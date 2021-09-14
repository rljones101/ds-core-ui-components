<template>
<div class="code-viewer">
  <div class="code-viewer-header">
    <slot name="header"></slot>
    <div><md-button class="md-icon-button md-dense" @click="showCode = !showCode"><md-icon>code</md-icon></md-button> </div>
  </div>
  <div class="code-example" :class="{'show-code': showCode}">
    <vue-code-highlight language="html">
      <pre>
        <code>{{ code }}</code>
      </pre>
    </vue-code-highlight>
  </div>
  <div class="code-viewer-content">
    <slot name="content"></slot>
  </div>
</div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight'
export default {
  name: 'CodeViewer',
  components: {
    VueCodeHighlight
  },
  props: {
    code: {
      type: String,
      default: '<div>add code here...</div>'
    }
  },
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style scoped lang="scss">

@keyframes createBox {
  from {
    transform: scaleY(0)
  }
  to {
    transform: scaleY(1)
  }
}

.code-viewer {
  margin-top: 1rem;
  background-color: var(--main-color);

  .code-viewer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 2px solid var(--main-view-bg-color);
    font-weight: bold;
  }

  .code-example {
    display: none;
    max-height: 450px;
    overflow: auto;
    opacity: 0;
    width: 100%;
    height: 100%;
    animation: createBox 100ms;
    transform-origin: top;

    &.show-code {
      display: block;
      opacity: 1;
    }
  }
  .code-viewer-content {
    padding: 1rem 2rem;
  }

  .row-container {
    gap: 1rem;
  }
}
</style>
