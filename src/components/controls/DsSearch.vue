<template>
  <div class="ds-search">
    <ds-input
      v-model="sValue"
      placeholder="Search.."
      label="Search"
      :hide-label="true"
      v-bind="$attrs"
      style="width:100%;"
      @input="onSearch"
    />
    <md-button
      v-show="sValue"
      class="md-icon-button md-dense md-primary close-icon"
      @click="cancel"
    >
      <md-icon>close</md-icon>
    </md-button>
  </div>
</template>

<script>
import DsInput from '@/components/controls/ds-input/DsInput'
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
  data () {
    return {
      sValue: this.searchValue
    }
  },
  watch: {
    searchValue (value) {
      this.sValue = value
    }
  },
  methods: {
    onSearch (value) {
      this.sValue = value
      this.$emit('search:find', this.sValue)
    },
    cancel () {
      this.sValue = ''
      this.$emit('search:cancel', this.sValue)
    }
  }
}
</script>

<style lang="scss">

$placeholderFocusColor: rgba(255,255,255,0.1);

    .ds-search {
      max-height: 36px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: var(--main-view-bg-color);
      width: 280px;
      min-width: 0;

        .close-icon {
            margin-right: -1px;
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
