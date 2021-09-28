<template>
  <ds-select
    v-model="selectedYear"
    label="Year"
    :options="years"
    @change="onChange"
  />
</template>

<script>
import DsSelect from 'lib/src/lib-components/DsSelect'
export default {
  name: 'DsSelectYear',
  components: { DsSelect },
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      years: []
    }
  },
  computed: {
    selectedYear: {
      get () {
        return String(this.selected || new Date().getFullYear())
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  created () {
    const max = new Date().getFullYear()
    const min = max - 9

    for (let i = min; i <= max; i++) {
      this.years.push({ id: i, name: i })
    }
    this.years.reverse()
  },
  methods: {
    onChange (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>

</style>
