<template>
  <div
    class="ds-loader"
  >
    <p class="wait-text">
      <slot>
        Loading...
      </slot>
    </p>
    <md-progress-bar
      md-mode="indeterminate"
      v-bind="$attrs"
    />
  </div>
</template>

<script>

export default {
  name: 'DsLoader',
  inheritAttrs: false
}
</script>

<style scoped lang="scss">
@use '../../../src/styles/mixins';
.ds-loader {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  .loading-text {
    font-weight: bold;
    color: var(--color-link-and-buttons);
  }

  .wait-text {
    font-style: italic;
    font-weight: normal;
  }

  .md-progress-bar {
    width: 100%;
  }
}
</style>
