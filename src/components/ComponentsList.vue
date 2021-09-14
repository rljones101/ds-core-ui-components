<template>
  <div class="components-list">
    <h1>Ds Core UI Components</h1>
    <code-viewer :code="dsButtonCode">
      <template #header>
        DsButton
      </template>
      <template #content>
        <p>
          This button extends MdButton from <a href="https://www.creative-tim.com/vuematerial/components/button" target="_blank">Vue Material</a>
        </p>
        <div class="row-container">
          <small>Flat</small>
          <ds-button>Default</ds-button>
          <ds-button :md-ripple="false">Ripple Off</ds-button>
          <ds-button class="md-primary">Primary</ds-button>
          <ds-button class="md-accent">Accent</ds-button>
          <ds-button :disabled="true">Disabled</ds-button>
        </div>
        <div class="row-container">
          <small>Raised</small>
          <ds-button class="md-raised">Default</ds-button>
          <ds-button class="md-raised" :md-ripple="false">Ripple Off</ds-button>
          <ds-button class="md-raised md-primary">Primary</ds-button>
          <ds-button class="md-raised md-accent">Accent</ds-button>
          <ds-button class="md-raised" :disabled="true">Disabled</ds-button>
        </div>
        <div class="row-container">
          <small>Dense</small>
          <ds-button class="md-dense md-primary">Flat</ds-button>
          <ds-button class="md-dense md-raised md-primary">Raised</ds-button>
        </div>

      </template>
    </code-viewer>
    <code-viewer :code="dsCardCode">
      <template #header>
        DsCard
      </template>
      <template #content>
        <div class="row-container">
          <ds-card>
            <template #header>
              Card Title Here
            </template>
            <template #content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </template>
          </ds-card>
          <ds-card>
            <template #header>
              Card Title Here
            </template>
            <template #content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </template>
            <template #toolbar>
              <ds-button>Call to action</ds-button>
            </template>
            <template #actions>
              <ds-button>Action 1</ds-button>
              <ds-button>Action 2</ds-button>
            </template>
          </ds-card>
        </div>

      </template>
    </code-viewer>

  </div>
</template>

<script>
import DsButton from '@/components/controls/ds-button/DsButton'
import CodeViewer from '@/components/CodeViewer'
import DsCard from '@/components/controls/ds-card/DsCard'
export default {
  name: 'ComponentsList',
  components: {DsCard, CodeViewer, DsButton },
  data() {
    return {
      dsButtonCode: '<div>\n' +
          '          <small>Flat</small>\n' +
          '          <ds-button>Default</ds-button>\n' +
          '          <ds-button :md-ripple="false">Ripple Off</ds-button>\n' +
          '          <ds-button class="md-primary">Primary</ds-button>\n' +
          '          <ds-button class="md-accent">Accent</ds-button>\n' +
          '          <ds-button :disabled="true">Disabled</ds-button>\n' +
          '        </div>\n' +
          '         <div>\n' +
          '          <small>Raised</small>\n' +
          '          <ds-button class="md-raised">Default</ds-button>\n' +
          '          <ds-button class="md-raised" :md-ripple="false">Ripple Off</ds-button>\n' +
          '          <ds-button class="md-raised md-primary">Primary</ds-button>\n' +
          '          <ds-button class="md-raised md-accent">Accent</ds-button>\n' +
          '          <ds-button class="md-raised" :disabled="true">Disabled</ds-button>\n' +
          '        </div>\n' +
          '       <div>\n' +
          '          <small>Dense</small>\n' +
          '          <ds-button class="md-dense md-primary">Flat</ds-button>\n' +
          '          <ds-button class="md-dense md-raised md-primary">Raised</ds-button>\n' +
          '        </div>',

      dsCardCode: '<div>\n' +
          '          <ds-card>\n' +
          '            <template #header>\n' +
          '              Card Title Here\n' +
          '            </template>\n' +
          '            <template #content>\n' +
          '              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n' +
          '            </template>\n' +
          '          </ds-card>\n' +
          '          <ds-card>\n' +
          '            <template #header>\n' +
          '              Card Title Here\n' +
          '            </template>\n' +
          '            <template #content>\n' +
          '              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n' +
          '            </template>\n' +
          '            <template #toolbar>\n' +
          '              <ds-button>Call to action</ds-button>\n' +
          '            </template>\n' +
          '            <template #actions>\n' +
          '              <ds-button>Action 1</ds-button>\n' +
          '              <ds-button>Action 2</ds-button>\n' +
          '            </template>\n' +
          '          </ds-card>\n' +
          '        </div>'
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
