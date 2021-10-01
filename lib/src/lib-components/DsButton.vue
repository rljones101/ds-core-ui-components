<template>
  <md-button
    class="ds-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </md-button>
</template>

<script>

export default {
  name: 'DsButton'
}
</script>

<style lang="scss">

.ds-button:not([disabled]).ds-primary {
  border: 2px solid var(--button-color);
  font-weight: bold;
  font-size: var(--font-size);
  color: var(--button-color);
  border-radius: var(--app-border-radius);
}

.ds-button:not([disabled]).ds-raised {
  border: 2px solid var(--button-color);
  color: var(--button-color);
  box-shadow: 0 3px 1px -2px var(--shadow-color), 0 2px 2px 0 var(--shadow-color), 0 1px 5px 0 var(--shadow-color);
}

.ds-button:not([disabled]) {
  background-color: transparent;
  color: var(--button-color);
}

.ds-button[disabled] {
  border: 2px solid var(--main-view-bg-color);
  background-color: var(--main-color);
  color: var(--main-view-bg-color);
}
</style>
