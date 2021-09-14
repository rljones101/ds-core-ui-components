<template>
  <div
    id="DsDatePicker"
  >
    <ds-menu-dropdown
      :label="label"
      :selected-item="dateValue"
    >
      <template #menu-content>
        <VueCtkDateTimePicker
          :id="_uid"
          v-model="dateValue"
          :format="dateFormat"
          input-size="sm"
          :no-label="true"
          :inline="true"
        />
      </template>
    </ds-menu-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DsMenuDropdown from '@/components/controls/ds-menu-dropdown/DsMenuDropdown'

export default {
  name: 'DsDatepicker',
  components: { DsMenuDropdown },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [Date, String],
      default: ''
    },
    disabled: Boolean,
    isInvalid: Boolean
  },
  data () {
    return {
      isShowingDialog: false
    }
  },
  computed: {
    ...mapGetters({
      appTheme: 'appTheme'
    }),
    inputName () {
      if (this.label === undefined) {
        throw new Error('Label is undefined')
      }
      return 'ds-' + this.label.split(' ').join('-')
    },
    dateFormat () {
      return 'MM-DD-YYYY hh:mm a'
    },
    dateValue: {
      get () {
        let dts = this.value
        if (this.value instanceof Date) {
          dts = this.value.toDateString()
        }
        return dts
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onDialogOpen () {},
    onDialogClose () {}
  }
}
</script>

<style lang="scss">
@use "../../../styles/mixins";
  #DsDatePicker {
    display: flex;
    flex-direction: column;

    .date-value {
      display: flex;
      align-items: center;
      padding: 0 0 0 1rem;
      border-radius: var(--app-border-radius);
      min-height: 36px;
      line-height: 36px;
      @include mixins.box-inset-soft-shadow;

      .date-input {
        flex: 1;
      }
    }

    .date-time-picker {
      font-family: var(--main-font) !important;
    }

    .date-time-picker input.field-input {
      font-family: var(--main-font) !important;
      font-size: 12px !important;
      -webkit-text-fill-color: var(--button-color);
    }

    input.field-input {
      min-width: 320px;
      width: 100%;
      padding: 0 8px;
      border: solid 1px var(--card-and-table-text-colors) !important;
      background-color: var(--main-view-bg-color);
      color: var(--button-color);
      font-size: 1em;
    }

    input.field-input:focus {
      outline: none;
      background-color: var(--input-focus-color);
      box-shadow: 0 0 3px 0 dodgerblue;
    }

    .header-picker {
      background-color: var(--main-view-bg-color) !important;
    }
  }
</style>
