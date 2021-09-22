<template>
  <div
    class="ds-date-picker"
  >
    <div v-if="inline">
      <VueCtkDateTimePicker
        :id="_uid"
        v-model="dateValue"
        :format="dateFormat"
        input-size="sm"
        :no-label="true"
        :inline="true"
      />
    </div>
    <div v-else>
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
  </div>
</template>

<script>
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
      required: true,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Date, String],
      default: ''
    },
    dateFormat: {
      type: String,
      default: 'MM-DD-YYYY hh:mm a'
    }
  },
  data () {
    return {
      isShowingDialog: false
    }
  },
  computed: {
    inputName () {
      if (this.label === undefined) {
        throw new Error('Label is undefined')
      }
      return 'ds-' + this.label.split(' ').join('-')
    },
    dateValue: {
      get () {
        let dts = this.value
        if (this.value instanceof Date) {
          // MUST format the date value and return it

          // Month
          let month = (1 + this.value.getMonth()).toString()
          month = month.length > 1 ? month : '0' + month

          // Day
          let day = this.value.getDate().toString()
          day = day.length > 1 ? day : '0' + day

          // Year
          const year = this.value.getFullYear()

          dts = `${month}-${day}-${year} ${this.value.toLocaleTimeString()}`
        }
        return dts
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
@use "../../../styles/mixins";
  .ds-date-picker {
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
      @include mixins.box-inset-soft-shadow;
      min-width: 320px;
      width: 100%;
      padding: var(--app-border-radius);
      border: none !important;
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
