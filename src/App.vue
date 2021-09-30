<template>
  <div id="app">
    <div class="app-layout">
      <div class="header">
        <h1>Ds Core UI Components</h1>
      </div>
      <div class="content">
        <side-nav />
        <div class="page-content">
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view />
          </transition>
        </div>
      </div>
      <div class="footer" />
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
    document.documentElement.classList.add('light-theme')
  }
}
</script>

<style lang="scss">
@use "styles/transitions";
@import '~ds-core-ui-components/dist/ds-core-ui-components.min.css';
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

  .page-content {
    position: relative;
    background-color: var(--main-color);
    padding: 1rem;

    h2 {
      font-size: 21px;
      margin: 2rem 0;
    }

    code {
      padding: 0 4px;
      display: inline-block;
      color: #ff5252;
      background: rgba(0,0,0,.07);
      border-radius: 2px;
      line-height: 1.25em;
    }
  }
}
</style>
