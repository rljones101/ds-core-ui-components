<template>
  <div class="ds-input-file-wrapper">
    <div class="input-container">
      <div
        class="file-value"
        :class="{'hasValue' : (value && value.name)}"
      >
        {{ value ? value.name : 'Choose a file..' }}
      </div>
      <input
        :id="inputName"
        ref="fileInput"
        :placeholder="placeholder"
        type="file"
        :name="inputName"
        :class="{'error': isInvalid}"
        @change="handleFileChange"
      >
    </div>

    <div
      class="upload-btn"
      @click="onButtonClick"
    >
      <i class="material-icons">attach_file</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DsFileInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    inValid: Boolean,
    value: File,
    placeholder: {
      type: String,
      default: ''
    }
  },
  computed: {
    isInvalid () {
      return this.invalid
    },
    inputName () {
      if (this.label === undefined) {
        throw new Error('Label is undefined')
      }

      return 'ds-' + this.label.toLowerCase().split(' ').join('-')
    }
  },
  methods: {
    onButtonClick () {
      // This fires a click event from the file Input
      this.$refs.fileInput.click()
    },
    handleFileChange (e) {
      this.$emit('input', e.target.files[0])
    }
  }
}
</script>

<style lang="scss">
    .ds-input-file-wrapper {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        min-width: 320px;
        font-size: 1em;
        color: var(--main-font-color);

        .upload-btn {
            margin: 0;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            height: 32px;
            padding: 6px 8px;
            color: var(--card-and-table-text-colors);
            font-weight: bold;
            text-transform: uppercase;
        }

        .input-container {
            flex: 1;
            position: relative;

            .file-value {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                width: 100%;
                display: block;
                height: 36px;
                line-height: 36px;
                color: var(--input-label-color);
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 0 8px;
                background-color: var(--main-view-bg-color);
                border-bottom: solid 1px var(--card-and-table-text-colors);
            }

            .file-value.hasValue {
                color: var(--main-font-color);
            }

            input {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                font-size: 100px;
                width: 100%;
                flex: 1;
                opacity: 0;
            }
        }
    }
</style>
