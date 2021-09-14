<template>
  <div class="ds-input">
    <div style="display: flex;">
      <label
        :for="inputId"
        :class="{'hide-label': hideLabel}"
      >{{ label }}</label> <span
        v-if="isOptional"
        class="optional"
      > (Optional)</span>
    </div>
    <span
      v-if="instructions"
      class="instructions"
    >{{ instructions }}</span>
    <input
      :id="inputId"
      v-bind="$attrs"
      :placeholder="placeholderText"
      :type="type"
      :name="inputName"
      :value="value"
      :minlength="minlength"
      :class="{'error': isInvalid}"
      @input="handleInput"
      @keypress="handleKeypress"
      @focus="updatePlaceHolderText"
    >
  </div>
</template>

<script>
export default {
  name: 'DsInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    inValid: Boolean,
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    isInvalid: Boolean,
    minlength: {
      type: Number,
      default: 0
    },
    hideLabel: Boolean,
    instructions: {
      type: String,
      default: ''
    },
    isOptional: Boolean
  },
  data () {
    return {
      placeholderText: ''
    }
  },
  computed: {
    inputName () {
      if (this.label === undefined) {
        throw new Error('Label is undefined')
      }

      return 'ds-' + this.label.split(' ').join('-')
    },
    inputId () {
      if (this.label === undefined) {
        throw new Error('DsInput Label must be defined')
      }

      let idVal = 'ds-input'
      const rValue = '-' + Math.ceil(Math.random() * Date.now())
      if (!this.id) {
        idVal = 'ds-' + this.label.split(' ').join('-')
      } else {
        idVal = this.id
      }
      return idVal + rValue
    },
    getPlaceHolderText () {
      const text = ''
      if (this.value) {
        return text
      }
      return this.placeholder
    }
  },
  created () {
    this.placeholderText = this.placeholder
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleKeypress (e) {
      this.$emit('keypress', e)
    },
    updatePlaceHolderText () {
      this.placeholderText = this.getPlaceHolderText
    }
  }
}
</script>

<style lang="scss">
    .ds-input {
        display: flex;
        flex-direction: column;

      input {
        height: 32px;
        padding: 0 1rem;
        display: block;
        flex: 1;
        border: none;
        background: none;
        font-family: inherit;
        line-height: 32px;
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

      .instructions {
        font-size: 14px;
        padding: 0 0 1rem;
        color: var(--color-link-and-buttons);
      }

      &.validation-error input {
        border-color: var(--input-error-color);
      }

      .hide-label {
        display: none;
      }
    }
</style>
