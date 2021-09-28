<template>
  <div class="ds-textarea">
    <textarea
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'DsTextarea',
  inheritAttrs: false
}
</script>

<style scoped lang="scss">
.ds-textarea {
  textarea {
    min-height: 100px;
    width: 100%;
    padding-top: 10px;
    color: var(--input-color);
  }
}
</style>
