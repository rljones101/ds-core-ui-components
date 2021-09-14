<template>
  <div
    class="ds-loader"
  >
    <p class="wait-text">
      Loading...
    </p>
    <md-progress-bar md-mode="indeterminate" />
  </div>
</template>

<script>

export default {
  name: 'DsLoader',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
@use '../../../styles/mixins';

@keyframes bounce {
  from {
    margin-top: 140px;
  }
  to {
    margin-top: 100px;
  }
}
    .ds-loader {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: var(--main-view-bg-color);
      border-radius: var(--app-border-radius);
      text-align: center;
      animation: bounce 500ms linear;

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
