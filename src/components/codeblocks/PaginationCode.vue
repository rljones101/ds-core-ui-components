<template>
  <code-viewer>
    <template #header>
      DsPagination
    </template>
    <template #content>
      <p>

      </p>
      <ds-pagination :page-size="20" :total-results="100" v-model="page" @change="onChange" />
      <pre>page: {{ page }}</pre>
      <pre>change event: {{ pageChangeResults }}</pre>
    </template>
    <template #html-code-block>
      <pre>
        &lt;ds-pagination
            :page-size="20"
            :total-results="100"
            v-model="page"
            @change="onChange" /&gt;
      </pre>
    </template>
    <template #javascript-code-block>
      <pre>
        onChange (results) {
          this.pageChangeResults = results
        }
      </pre>
    </template>
  </code-viewer>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
import DsPagination from '@/components/controls/ds-pagination/DsPagination'
export default {
  name: 'PaginationCode',
  components: {
    CodeViewer,
    DsPagination
  },
  data() {
    return {
      page: 1,
      pageChangeResults: {}
    }
  },
  methods: {
    onChange (results) {
      this.pageChangeResults = results
    }
  }
}
</script>

<style scoped>

</style>
