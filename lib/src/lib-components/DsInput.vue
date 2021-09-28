<template>
  <div class="ds-input">
    <input
      v-bind="$attrs"
      v-on="$listeners"
    >
  </div>
</template>

<script>
export default {
  name: 'DsInput',
  inheritAttrs: false,
}
</script>

<style lang="scss">
    .ds-input {
        display: flex;
        flex-direction: column;

      input {
        height: var(--input-height, 36px);
        line-height: var(--input-height, 36px);
        padding: var(--input-padding, 0 1rem);
        display: block;
        flex: 1;
        border: none;
        background: none;
        font-family: inherit;
      }

      input[type="text"]:disabled {
        border: 1px solid var(--disabled-color);
        &::-webkit-input-placeholder {
          color: var(--disabled-color);
        }

        &::-ms-input-placeholder {
          color: var(--disabled-color);
        }

        &:-ms-input-placeholder {
          color: var(--disabled-color);
        }
      }

      .optional {
        font-style: italic;
        font-size: 12px;
      }

      .hide-label {
        display: none;
      }
    }
</style>
