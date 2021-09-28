<template>
  <nav>
    <ul class="breadcrumb">
      <li
        v-for="(crumb, ci) in crumbs"
        :key="ci"
        class="breadcrumb-item align-items-center"
      >
        <span v-if="ci"> / </span>
        <ds-button
          class="btn btn-link"
          :class="{ disabled: isLast(ci) }"
          :disabled="isLast(ci)"
          @click="selected(crumb)"
        >
          {{ crumb.label }}
        </ds-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import DsButton from '@/lib-components/DsButton'
export default {
  name: 'DsBreadcrumbs',
  components: {
    DsButton
  },
  props: {
    crumbs: {
      type: Array,
      required: true,
      data () {
        return [
          {
            label: 'Crumb 1',
            routeName: 'routeName',
            params: {}
          }
        ]
      }
    }
  },
  methods: {
    isLast (index) {
      return index === this.crumbs.length - 1
    },
    selected (crumb) {
      this.$emit('selected', crumb)
    }
  }
}
</script>

<style lang="scss">

.breadcrumb {
  --disabled-color: rgba(0,0,0, 0.26);

  display: flex;
  align-items: center;
  background-color: var(--main-color);
  border-radius: var(--app-border-radius);
  padding: 0;
}

.breadcrumb-item {
  list-style: none;
  display: flex;
  align-items: center;
}

.align-items-center {
  align-items: center;
}

.btn.btn-link {
  background-color: transparent;
  color: var(--color-link-and-buttons);
  border: none;
  padding: 0;

  &.disabled {
    color: var(--disabled-color);
  }
}

</style>
