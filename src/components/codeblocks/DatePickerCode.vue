<template>
  <code-viewer>
    <template #header>
      DsDatepicker
    </template>
    <template #content>
      <div class="examples">
        <ds-card>
          <template #header>
            Inline Datepicker
          </template>
          <template #content>
            <ds-datepicker
              v-model="startDate"
              label="Start date"
            />
            <p>start date:</p>
            <p>{{ startDate }}</p>
          </template>
        </ds-card>

        <ds-card>
          <template #header>
            Datepicker
          </template>
          <template #content>
            <ds-datepicker
              v-model="endDate"
              label="End date"
              :inline="true"
            />
            <p>end date:</p>
            <p>{{ endDate }}</p>
          </template>
        </ds-card>
      </div>
    </template>
    <template #html-code-block>
      <pre>
        // dropdown datepicker
        &lt;ds-datepicker
        label="Start date"
        v-model="startDate" />

        // Inline datepicker
        &lt;ds-datepicker
        label="End date"
        :inline="true"
        v-model="endDate" />
      </pre>
    </template>
    <template #javascript-code-block>
      <pre>
      import DsDatepicker from '@/components/controls/ds-datepicker/DsDatepicker'
      export default {
        name: 'DatePickerCode',
        components: {
          DsDatepicker
        },
        data() {
          return {
            startDate: new Date(),
            endDate: new Date()
          }
        }
      }
     </pre>
    </template>
  </code-viewer>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'

export default {
  name: 'DatePickerCode',
  components: {
    CodeViewer
  },
  data() {
    return {
      startDate: new Date(),
      endDate: new Date()
    }
  }
}
</script>

<style scoped lang="scss">
.examples {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  ::v-deep .ds-date-picker .ds-select {
    padding: 0;
  }
}
</style>
