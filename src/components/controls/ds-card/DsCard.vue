<template>
  <div class="ds-card">
    <div
      v-if="$slots.header"
      class="ds-card-header"
    >
      <slot name="header" />
    </div>
    <div
      v-if="$slots.toolbar || $slots.actions"
      class="ds-header-actions"
    >
      <div
        class="row-container"
        style="width: 100%;"
      >
        <div
          v-if="$slots.toolbar"
          class="ds-toolbar-container"
        >
          <slot name="toolbar" />
        </div>
        <div
          v-if="$slots.actions"
          class="ds-card-actions"
        >
          <slot name="actions" />
        </div>
      </div>
    </div>
    <div class="ds-card-content ds-scrollbar">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DsCard',
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>

<style lang="scss">

  .ds-card-container {
    display: block;
  }

    .ds-card {
        display: flex;
        flex-direction: column;
        background-color: var(--main-color);
        box-shadow: 0 3px 1px -2px var(--shadow-color), 0 2px 2px 0 var(--shadow-color), 0 1px 5px 0 var(--shadow-color);
        align-content: stretch;
        height: 100%;
    }

    .ds-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 61px;
      padding: 1rem;
      color: #ffffff;
      font-size: 1.17em;
      font-weight: bold;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(0,0,0,0.10);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      > div {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
      }
    }

    .ds-card-content {
        flex: 1;
        padding: 1rem;
        overflow: auto;
    }

    .ds-toolbar-container {
      flex: 1;
      justify-content: flex-start;
    }

    .ds-card-actions {
        display: flex;
        flex: 1;
        align-self: flex-end;
        justify-content: flex-end;
    }

    .ds-header-actions {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1rem 0;
    }

    .ds-toolbar-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
</style>
