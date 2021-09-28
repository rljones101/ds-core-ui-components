<template>
  <md-snackbar
    :md-position="position"
    :md-duration="isInfinity ? Infinity : duration"
    :md-active.sync="showMessage"
    @md-closed="handleClose"
  >
    <p :class="{'error': messageType === 'error'}">
      {{ message }}
    </p>
    <md-button
      class="md-primary"
      @click="handleClose"
    >
      Ok
    </md-button>
  </md-snackbar>
</template>

<script>

export default {
  name: 'DsSnackBar',
  props: {
    showMessage: {
      type: Boolean,
      default: false
    },
    messageType: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      position: 'center',
      duration: 4000,
      isInfinity: false
    }
  },
  methods: {
    handleClose () {
      //this.showMessage = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.error {
  color: var(--input-error-color);
}
</style>
