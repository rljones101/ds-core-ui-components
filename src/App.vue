<template>
  <div id="app">
    <div class="app-layout">
      <div class="header">
        <h1>Ds Core UI Components</h1>
        <small>theme: soft-ui-theme</small>
      </div>
      <div class="content">
        <side-nav />
        <div class="page-content">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <div class="footer">
    </div>
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
@use "styles/transitions";
#app {
  background-color: var(--main-view-bg-color);
  min-height: 100vh;

  .app-layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-width: 1100px;
    margin: 0 auto;
    min-height: 100vh;
  }

  .header {
    padding: 2rem;

    h1 {
      margin-bottom: 1rem;
    }
  }

  .content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    padding: 2rem;
  }

  .content .nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
  }
}
</style>
