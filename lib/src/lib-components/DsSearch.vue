<template>
  <div class="ds-search">
    <ds-input
      :value="searchValue"
      placeholder="Search.."
      label="Search"
      v-bind="$attrs"
      @input="onSearch"
    />
    <md-button
      v-show="searchValue"
      class="md-icon-button md-dense md-primary close-icon"
      @click="cancel"
    >
      <md-icon>close</md-icon>
    </md-button>
  </div>
</template>

<script>
import DsInput from '@/lib-components/DsInput'
export default {
  name: 'DsSearch',
  components: {
    DsInput
  },
  inheritAttrs: false,
  model: {
    prop: 'searchValue',
    event: 'search:find'
  },
  props: {
    searchValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    onSearch (evt) {
      this.$emit('search:find', evt.target.value)
    },
    cancel () {
      this.$emit('search:cancel', '')
      this.$emit('search:find', '')
    }
  }
}
</script>

<style lang="scss">

$placeholderFocusColor: rgba(255,255,255,0.1);

    .ds-search {
      position: relative;
      max-height: 36px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: var(--main-view-bg-color);
      min-width: 0;

        .close-icon {
          position: absolute;
          background-color: transparent !important;
          box-shadow: none !important;
          right: 0;
            .md-icon {
                width: 18px !important;
                height: 18px !important;
                min-width: 18px !important;
                max-height: 18px !important;
                font-size: 18px !important;
            }
        }

        .ds-input {
          min-width: 0;
          padding: 0;
          margin: 0;
          input {
            border: none;
            background-color: transparent;
            min-width: inherit;
            width: inherit;

            &:focus {
              outline: none;
            }

            &::-webkit-input-placeholder {
              color: var(--main-font-color);
            }

            &::-ms-input-placeholder {
              color: var(--main-font-color);
            }

            &:-ms-input-placeholder {
              color: var(--main-font-color);
            }
          }
          input:focus {

            &::-webkit-input-placeholder {
              color: $placeholderFocusColor;
            }

            &::-ms-input-placeholder {
              color: $placeholderFocusColor;
            }

            &:-ms-input-placeholder {
              color: $placeholderFocusColor;
            }
          }
        }
    }
</style>
