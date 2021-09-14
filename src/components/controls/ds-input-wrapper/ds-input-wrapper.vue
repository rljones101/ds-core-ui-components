<template>
  <div class="ds-input-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DsInputWrapper'
}
</script>

<style lang="scss">
.ds-input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex: 1;

  .ds-input {
    padding: 0 0 1rem;
  }

  .ds-select {
    margin: 0 -20px;
  }

  .error-message {
    margin: -30px 5px 0;
    padding-bottom: 10px;
    font-weight: bold;
    font-style: italic;
    color: var(--input-error-color);
    align-self: flex-end;
  }

  &.validation-error {
    input{
      border-color: var(--input-error-color) !important;
    }

    #DsDatePicker {
      input.field-input {
        border: solid 1px var(--button-color) !important;
      }
    }
  }
}
</style>
