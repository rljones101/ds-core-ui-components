<template>
  <div class="code-viewer">
    <div class="code-viewer-header">
      <slot name="header" />
      <div>
        <md-button
          class="md-icon-button md-dense"
          @click="showCode = !showCode"
        >
          <md-icon>code</md-icon>
        </md-button>
      </div>
    </div>
    <div
      class="code-example"
      :class="{'show-code': showCode}"
    >
      <div>
        <ds-button
          v-if="$slots['html-code-block']"
          @click="showHtmlCode"
        >
          HTML
        </ds-button>
        <ds-button
          v-if="$slots['javascript-code-block']"
          @click="showJavascriptCode"
        >
          Javascript
        </ds-button>
      </div>
      <div class="code-content">
        <div v-show="showHtml">
          <vue-code-highlight
            v-if="hasHtmlCode"
            language="html"
          >
            <slot name="html-code-block" />
          </vue-code-highlight>
        </div>
        <div v-show="showJavascript">
          <vue-code-highlight
            v-if="hasJavaScriptCode"
            language="javascript"
          >
            <slot name="javascript-code-block" />
          </vue-code-highlight>
        </div>
      </div>
    </div>
    <div class="code-viewer-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-okaidia.css'
import DsButton from '@/components/controls/ds-button/DsButton'
export default {
  name: 'CodeViewer',
  components: {
    VueCodeHighlight,
    DsButton
  },
  data() {
    return {
      showCode: false,
      showHtml: false,
      showJavascript: false
    }
  },
  computed: {
    hasHtmlCode() {
      return !!this.$slots['html-code-block']
    },
    hasJavaScriptCode() {
      return !!this.$slots['javascript-code-block']
    }
  },
  mounted () {
    if (this.hasHtmlCode) {
      this.showHtml = true
    }

    if (!this.hasHtmlCode && this.hasJavaScriptCode) {
      this.showJavascript = true
    }
  },
  methods: {
    showHtmlCode() {
      if (this.hasHtmlCode) {
        this.showHtml = true
        this.showJavascript = false
      }
    },
    showJavascriptCode() {
      if (this.hasJavaScriptCode) {
        this.showJavascript = true
        this.showHtml = false
      }
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
  background-color: var(--main-color);
  width: 100%;

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
    opacity: 0;
    width: 100%;
    height: 100%;
    animation: createBox 100ms;
    transform-origin: top;

    &.show-code {
      display: block;
      opacity: 1;
    }

    .code-content {
      max-height: 450px;
      max-width: 800px;
      overflow: auto;
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
