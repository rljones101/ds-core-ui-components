<template>
  <div id="app">
    <ComponentsList />
  </div>
</template>

<script>
import ComponentsList from '@/components/ComponentsList'
export default {
  name: 'App',
  components: {
    ComponentsList
  }
}
</script>

<style lang="scss">
@use "styles/app-theme";
</style>
