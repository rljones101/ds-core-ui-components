<template>
  <code-viewer>
    <template #header>
      DsLoader
    </template>
    <template #content>
      <p>
        Please reference <a
          href="https://www.creative-tim.com/vuematerial/components/progress-bar"
          target="_blank"
        > MdProgressBar</a>
      </p>
      <ds-loader>
        loading ...please wait
      </ds-loader>
    </template>
    <template #html-code-block>
      <pre>
        &lt;ds-loader&gt;
          loading ...please wait
        &lt;/ds-loader&gt;
      </pre>
    </template>
  </code-viewer>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
import DsLoader from '@/components/controls/ds-loader/DsLoader'

export default {
  name: 'BreadcrumbsCode',
  components: {
    DsLoader,
    CodeViewer
  }
}
</script>

<style scoped>

</style>
