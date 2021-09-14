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
import { mapGetters } from 'vuex'

export default {
  name: 'DsSnackBar',
  data () {
    return {
      position: 'center',
      duration: 4000,
      isInfinity: false,
      showSnackbar: false
    }
  },
  computed: {
    ...mapGetters({
      message: 'messages/getMessage',
      getShowMessage: 'messages/getShowMessage',
      messageType: 'messages/type'
    }),
    showMessage: {
      get () {
        return this.getShowMessage && this.message !== ''
      },
      set (value) {
        this.showSnackbar = value
        this.$store.commit('messages/isShowing', value)
      }
    }
  },
  methods: {
    handleClose () {
      this.showMessage = false
    }
  }
}
</script>

<style lang="scss">
.error {
  color: var(--input-error-color);
}
</style>
