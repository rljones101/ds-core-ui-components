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
  margin: 0 0 2.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  input:disabled {
    color: var(--disabled-color);
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .ds-helper-text {
    position: absolute;
    margin-top: 1rem;
    top: 90%;
    font-size: 14px;
    color: var(--helper-font-color);
  }

  .ds-error {
    position: absolute;
    top: 85%;
    left: 0;
    opacity: 0;
    transition: all 200ms ease-out;
  }

  &.ds-invalid {

    label {
      color: var(--input-error-color);
    }

    input, .ds-select .selected-item, textarea {
      border: 1px solid var(--input-error-color) !important;
    }

    .ds-error {
      display: block;
      color: var(--input-error-color);
      top: 90%;
      opacity: 1;
    }

    .ds-helper-text {
      display: none;
    }

    #DsDatePicker {
      input.field-input {
        border: solid 1px var(--button-color) !important;
      }
    }
  }
}
</style>
