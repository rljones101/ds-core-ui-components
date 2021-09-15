<template>
  <div>
    <code-viewer>
      <template #header>
        DsAdvancedSelect
      </template>
      <template #content>
        <ds-advanced-select
            label="users"
            v-model="selected"
            :options="options"
            :total-results="totalResults"
            @loadMore="getUsers" />
      </template>
      <template #code-block>
        <vue-code-highlight language="html">
      <pre>
        <code>
        &lt;ds-advanced-select
            label="users"
            v-model="selected"
            :options="options"
            :total-results="totalResults"
            @loadMore="getUsers" /&gt;
        </code>
      </pre>
        </vue-code-highlight>
        <vue-code-highlight language="javascript">
      <pre>
        <code>
          import DsAdvancedSelect from '@/components/controls/ds-select/DsAdvancedSelect'
          export default () {
            name: 'UsersComponent',
            components: {
              'DsAdvancedSelect'
            },
            data () {
              selected: null,
              totalResults: 0,
              options: [],
              currentPage: 1,
              totalPages: 0
            },
            async created () {
              await this.getUsers()
            }
            methods: {
              async getUsers() {
                const response = await fetch(`https://gorest.co.in/public/v1/users?page=${this.currentPage}`)
                const users = await response.json()
                this.options = users.data.map(user => {
                  return { id: user.id, name: user.name }
                })
                this.totalResults = users.meta.pagination.total
                this.totalPages = users.meta.pagination.pages

                if (this.currentPage &lt; this.totalPages) {
                  this.currentPage++
                }
              }
            }
          }
        </code>
      </pre>
        </vue-code-highlight>
      </template>
    </code-viewer>
  </div>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
import DsAdvancedSelect from '@/components/controls/ds-select/DsAdvancedSelect'
import { component as VueCodeHighlight } from 'vue-code-highlight'
export default {
  name: 'AdvancedSelectCode',
  components: {
    CodeViewer,
    DsAdvancedSelect,
    VueCodeHighlight
  },
  data() {
    return {
      selected: null,
      totalResults: 100,
      options: [],
      currentPage: 1,
      totalPages: 0
    }
  },
  async created () {
    await this.getUsers()
  },
  methods: {
    async getUsers() {
      const response = await fetch(`https://gorest.co.in/public/v1/users?page=${this.currentPage}`)
      const users = await response.json()
      this.options = users.data.map(user => {
        return { id: user.id, name: user.name }
      })
      this.totalResults = users.meta.pagination.total
      this.totalPages = users.meta.pagination.pages

      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
