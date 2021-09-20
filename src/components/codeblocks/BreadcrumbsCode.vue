<template>
  <code-viewer>
    <template #header>
      DsBreadcrumbs
    </template>
    <template #content>
      <ds-breadcrumbs :crumbs="crumbs" @selected="onSelected" />
      selected: <pre>{{ JSON.stringify(selected) }}</pre>
    </template>
    <template #html-code-block>
      <pre>
        &lt;ds-breadcrumbs
            :crumbs="crumbs"
            @selected="onSelected" /&gt;
      </pre>
    </template>
    <template #javascript-code-block>
      <pre>
export default {
  name: 'BreadcrumbsCode',
  components: {
    DsBreadcrumbs
  },
  data() {
    return {
      crumbs: [
        {
          label: 'Venue',
          routeName: 'venue',
          params: {}
        },
        {
          label: 'Details',
          routeName: 'venueDetails',
          params: {
            id: '1245'
          }
        },
        {
          label: 'Address',
          routeName: 'venueDetailsAddress',
          params: {}
        }
      ],
      selected: null
    }
  },
  methods: {
    onSelected(crumb) {
      // Use this handler to then call this.$route.push()
      this.$route.push({ name: crumb.routeName, params: crumb.params })
    }
  }
}
      </pre>
    </template>
  </code-viewer>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
import DsBreadcrumbs from '@/components/controls/ds-breadcrumbs/DsBreadcrumbs'
export default {
  name: 'BreadcrumbsCode',
  components: {
    DsBreadcrumbs,
    CodeViewer
  },
  data() {
    return {
      crumbs: [
        {
          label: 'Venue',
          routeName: 'venue',
          params: {}
        },
        {
          label: 'Details',
          routeName: 'venueDetails',
          params: {
            id: '1245'
          }
        },
        {
          label: 'Address',
          routeName: 'venueDetailsAddress',
          params: {}
        }
      ],
      selected: null
    }
  },
  methods: {
    onSelected(crumb) {
      this.selected = crumb
    }
  }
}
</script>

<style scoped>

</style>
