<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/ds-button">DsButton</router-link>
    <router-link to="/ds-card">DsCard</router-link>
    <router-link to="/ds-advanced-select">DsAdvancedSelect</router-link>
    <router-link to="/ds-pagination">DsPagination</router-link>
    <router-link to="/ds-breadcrumbs">DsBreadcrumbs</router-link>
    <router-link to="/ds-datepicker">DsDatepicker</router-link>
  </div>
</template>

<script>
export default {
  name: 'SideNav'
}
</script>

<style scoped lang="scss">
@use "../styles/mixins";
.nav {

  a {
    text-decoration: none;
    margin: .25rem 0;
    padding: .75rem 1rem;
    border-radius: var(--app-border-radius);
    border: 2px solid transparent;
    transition: all 200ms ease-in-out;
  }

  background-color: var(--main-color);
  padding: 1rem;
  border-radius: var(--app-border-radius);


  a.router-link-exact-active {
    @include mixins.box-inset-soft-shadow('soft-ui-theme');
    color: var(--accent-color);
    background-color: var(--main-view-bg-color);
    border-radius: var(--app-border-radius);
  }

  a:hover {
    border: 2px solid var(--main-view-bg-color);
  }
}
</style>
