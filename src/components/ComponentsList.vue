<template>
  <div class="components-list">
    <h1>Ds Core UI Components</h1>
    <small>theme: soft-ui-theme</small>
    <button-code />
    <card-code />
    <advanced-select-code />
  </div>
</template>

<script>
import ButtonCode from '@/components/ButtonCode'
import CardCode from '@/components/CardCode'
import AdvancedSelectCode from '@/components/AdvancedSelectCode'
export default {
  name: 'ComponentsList',
  components: { CardCode, ButtonCode, AdvancedSelectCode },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.components-list {
  margin: 2rem;
  color: var(--main-font-color);

  h1{
    margin-bottom: 2rem;
    color: var(--main-font-color);
  }
}
</style>
