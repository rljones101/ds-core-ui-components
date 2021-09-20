<template>
  <div id="app">
    <div class="header">
      <h1>Ds Core UI Components</h1>
      <small>theme: soft-ui-theme</small>
    </div>
    <div class="content">
      <side-nav />
      <router-view></router-view>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>

import SideNav from '@/components/SideNav'
export default {
  name: 'App',
  components: {
    SideNav
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
