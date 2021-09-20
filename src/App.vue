<template>
  <div id="app">
    <div class="header">
      <h1>Ds Core UI Components</h1>
      <small>theme: soft-ui-theme</small>
    </div>
    <div class="content">
      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/ds-button">DsButton</router-link>
        <router-link to="/ds-card">DsCard</router-link>
        <router-link to="/ds-advanced-select">DsAdvancedSelect</router-link>
        <router-link to="/ds-pagination">DsPagination</router-link>
      </div>
      <router-view></router-view>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  beforeMount () {
    document.documentElement.classList.add('soft-ui-theme')
  }
}
</script>

<style lang="scss">
@use "styles/app-theme";
@use "styles/soft-ui-theme";
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;


  .header {
    padding: 2rem;

    h1 {
      margin-bottom: 1rem;
    }
  }

  .content {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 2rem;
  }

  .content .nav {
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
    > * {
      padding: 5px 0;
    }
  }
}
</style>
