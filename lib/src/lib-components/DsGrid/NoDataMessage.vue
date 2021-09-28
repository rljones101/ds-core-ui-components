<template>
  <div class="message-container">
    <div class="row-container ">
      <i class="material-icons warning-icon">
        announcement
      </i>
    </div>
    <div v-if="message">
      <p class="message-title">
        {{ title }}
      </p>
      <p class="message">
        {{ message }}
      </p>
    </div>
    <div v-else>
      <p class="message-title">
        No results found
      </p>
      <p class="message">
        Create a new item and it will show up here
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoDataMessage',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-font-color);
  font-weight: lighter !important;
  margin: 0 auto;
  max-width: 420px;
  max-height: 420px;
  text-align: center;
  padding: 40px;

    .warning-icon {
      font-size: 80px !important;
      width: 80px;
      height: 80px;
    }

    .message-title {
        font-weight: 600;
        font-size: 18px;
        line-height: 40px;
        margin-top: 0;
        margin-bottom: 0;
    }

    .message {
        font-size: 14px;
        line-height: 24px;
        margin: 0;
    }
}
</style>
