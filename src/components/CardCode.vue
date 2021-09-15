<template>
  <code-viewer>
    <template #header>
      DsCard
    </template>
    <template #content>
      <div class="row-container">
        <ds-card>
          <template #header>
            Card Title Here
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          </template>
        </ds-card>
        <ds-card>
          <template #header>
            Card Title Here
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          </template>
          <template #toolbar>
            <ds-button>Call to action</ds-button>
          </template>
          <template #actions>
            <ds-button>Action 1</ds-button>
            <ds-button>Action 2</ds-button>
          </template>
        </ds-card>
      </div>

    </template>
    <template #code-block>
      <vue-code-highlight language="html">
      <pre>
        <code>
        &lt;ds-card>
          &lt;template #header>
            Card Title Here
          &lt;/template>
          &lt;template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          &lt;/template>
        &lt;/ds-card>
        &lt;ds-card>
          &lt;template #header>
            Card Title Here
          &lt;/template>
          &lt;template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          &lt;/template>
          &lt;template #toolbar>
            &lt;ds-button>Call to action&lt;/ds-button>
          &lt;/template>
          &lt;template #actions>
            &lt;ds-button>Action 1&lt;/ds-button>
            &lt;ds-button>Action 2&lt;/ds-button>
          &lt;/template>
        &lt;/ds-card>
        </code>
      </pre>
      </vue-code-highlight>
    </template>
  </code-viewer>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
import DsCard from '@/components/controls/ds-card/DsCard'
import DsButton from '@/components/controls/ds-button/DsButton'
import { component as VueCodeHighlight } from 'vue-code-highlight'
export default {
  components: {
    CodeViewer,
    DsCard,
    DsButton,
    VueCodeHighlight
  },
  name: 'CardCode'
}
</script>

<style scoped>

</style>
