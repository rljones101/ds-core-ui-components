<template>
  <div
    ref="dsSelect"
    class="ds-select"
  >
    <label>{{ label }}</label>
    <div class="select-container">
      <div
        ref="selectedItem"
        class="selected-item"
        :class="{'active': showList}"
        @click="onShowList()"
      >
        <span>{{ selectedOptionName }}</span>
        <span
          class="material-icons expand-icon"
          :class="{'rotate-icon': showList}"
        >expand_more</span>
      </div>
      <md-menu
        :md-active="showList"
        :md-offset-y="-20"
        md-size="huge"
        @md-closed="showList=false"
      >
        <md-menu-content>
          <md-menu-item
            v-for="(option, i) in selectOptions"
            :key="i"
            :class="{'selected': selectedOption.id === option.id}"
            @click="onSelected(option)"
          >
            {{ option.name }}
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DsSelect',
  model: {
    prop: 'selectedItem',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: 'Favorite Color',
      required: true
    },
    options: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            name: 'Blue'
          },
          {
            id: 2,
            name: 'Red'
          },
          {
            id: 3,
            name: 'Green'
          }
        ]
      },
      required: true
    },
    selectedItem: {
      type: String,
      default: '1'
    },
    placeholder: {
      type: String,
      default: 'Choose...'
    }
  },
  data () {
    return {
      sOption: null,
      showList: false
    }
  },
  computed: {
    selectedOption () {
      return this.getOption(this.selectedItem)
    },
    selectOptions () {
      return this.options
    },
    selectedOptionName () {
      let name = this.placeholder
      if (this.selectedOption && this.selectedOption.name) {
        name = this.selectedOption.name
      }
      return name
    }
  },
  methods: {
    onSelected (item) {
      this.showList = false
      this.$emit('hideList')
      this.$emit('change', String(item.id))
    },
    onShowList () {
      this.showList = !this.showList
      this.$emit((this.showList ? 'showList' : 'hideList'))
      return this.showList
    },
    getOption (searchItem) {
      if (this.options.length) {
        let option = null
        const foundItem = this.options.find((option) => {
          if (String(option.id) === String(searchItem)) {
            return option
          }
          return null
        })
        if (foundItem) {
          option = foundItem
        } else {
          option = this.getFirstOption()
        }
        this.$emit('change', String(option.id))
        return option
      }
      return searchItem
    },
    getFirstOption () {
      if (this.options.length) {
        return this.options[0]
      }
      return ''
    },
    onClose () {
      this.showList = false
      this.$emit('hideList')
    }
  }
}
</script>

<style lang="scss">

    $selectedItemBorderColor: #eeeeee;
    $selectedItemBgColor: #ffffff;

    $selectedItemActiveBgColor: rgba(238, 238, 238, 0.5);
    $selectedItemActiveBxColor: dodgerblue;

    .ds-select {

      .select-container {
        position: relative;
        width: 100%;
        height: 36px;
        line-height: 36px;

        &:focus {
          outline: none;
        }

        .selected-item {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: inherit;
          height: inherit;
          max-width: 100%;
          line-height: 36px;
          cursor: pointer;
          font-weight: normal;
          padding: 0 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border-bottom: none;
          background-color: var(--main-view-bg-color);
          color: var(--primary-color)
        }

        .expand-icon {
          transform: rotate(0deg);
          transition: all .2s ease-in-out;
        }

        .rotate-icon {
          transform: rotate(180deg);
        }

        .selected-item.active {
          background-color: var(--input-focus-color);
          border-color: var(--card-and-table-text-colors)
        }
        .selected-item.active:focus {
          outline: none;
        }

        .select-list {
          background-clip: padding-box;
          font-size: 14px;
          padding-inline-start: 0;
          position: absolute;
          width: 100%;
          min-height: 0;
          z-index: 9;
          list-style: outside none none; max-height: 240px; overflow:auto;
          margin-top: 0;
          background-color: var(--main-view-bg-color);
          border-radius: var(--app-border-radius);
          box-shadow: 0 3px 1px -2px var(--shadow-color), 0 2px 2px 0 var(--shadow-color), 0 1px 5px 0 var(--shadow-color);

          .list-item {
            height: 48px;
            line-height: 48px;
            padding: 0 9px;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: var(--font-color);
          }

          .list-item.selected {
            color: var(--button-color);
            font-weight: bold;
          }

          .list-item:hover {
            background-color: var(--main-color);
            color: var(--font-color);
          }
        }

        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
      }
    }
</style>
