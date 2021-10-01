<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {},
  data() {
    return {
      searchValue: null,
      colors: [
        {
          id: 1,
          name: 'Red'
        },
        {
          id: 2,
          name: 'Blue'
        },
        {
          id: 3,
          name: 'Green'
        }
      ],
      selectedColor: '1',
      message: 'I am a message',
      showMessage: false,
      tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
      selectedTab: null,
      gridOptions: {
        addButtonLabel: 'User',
        columnDefs: [
          {
            field: 'id',
            headerName: 'ID',
          },
          {
            field: 'name',
            headerName: 'Name'
          },
          {
            field: 'gender',
            headerName: 'Gender'
          },
          {
            field: 'email',
            headerName: 'Email'
          },
          {
            field: 'status',
            headerName: 'Status'
          },
        ]
      },
      rowData: [],
      totalResults: 100,
      currentPage: 1,
      isLoading: false,
      crumbs: [
        {
          label: 'Users',
          routeName: 'users',
          params: {}
        },
        {
          label: 'Details',
          routeName: 'userDetails',
          params: {}
        },
        {
          label: 'Bob',
          routeName: 'userDetail',
          params: {
            id: '1234'
          }
        }
      ],
      selectedCrumb: null,
      dateValue: new Date(),
      dsAdvancedSelect: {
        selected: null,
        totalResults: 100,
        options: [],
      }
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    onSelectedTab(tab) {
      this.selectedTab = tab
    },
    onSelectedCrumb(crumb) {
      this.selectedCrumb = crumb
    },
    async getUsers() {
      this.isLoading = true
      const response = await fetch(`https://gorest.co.in/public/v1/users?page=${this.currentPage}`)
      const users = await response.json()
      this.rowData = users.data
      this.totalResults = users.meta.pagination.total
      this.isLoading = false

      // DsAdvancedSelect
      this.dsAdvancedSelect.totalResults = this.totalResults
      this.dsAdvancedSelect.options = this.rowData.map(user => {
        return {
          id: user.id,
          name: user.name
        }
      })
    },
    async onGridUpdated(params) {
      this.currentPage = params.page
      await this.getUsers()
    }
  }
});
</script>

<template>
  <div id="app">
    <ds-breadcrumbs
      :crumbs="crumbs"
      @selected="onSelectedCrumb"
    />
    <pre>selected crumb: {{ selectedCrumb }}</pre>
    <div style="display: flex; width: 100%;">
      <ds-grid
        :grid-options="gridOptions"
        :row-data="rowData"
        :total-results="totalResults"
        :loading="isLoading"
        @grid:updated="onGridUpdated"
      />
    </div>
    <div class="row-container">
      <small>Flat</small>
      <ds-button>Default</ds-button>
      <ds-button class="ds-primary">
        Primary
      </ds-button>
      <ds-button class="ds-accent">
        Accent
      </ds-button>
      <ds-button :disabled="true">
        Disabled
      </ds-button>
    </div>
    <div class="row-container">
      <small>Raised</small>
      <ds-button class="ds-raised">
        Default
      </ds-button>
      <ds-button class="ds-raised ds-primary">
        Primary
      </ds-button>
      <ds-button class="ds-raised ds-accent">
        Accent
      </ds-button>
      <ds-button
        class="ds-raised"
        :disabled="true"
      >
        Disabled
      </ds-button>
    </div>
    <div class="row-container">
      <small>Dense</small>
      <ds-button class="ds-dense ds-primary">
        Flat
      </ds-button>
      <ds-button class="ds-dense ds-raised ds-primary">
        Raised
      </ds-button>
    </div>
    <div class="row-container">
      <small>Flat</small>
      <ds-button class="ds-icon-button">
        <ds-icon>home</ds-icon>
      </ds-button>
      <ds-button class="ds-icon-button ds-primary">
        <ds-icon>menu</ds-icon>
      </ds-button>
      <ds-button class="ds-icon-button ds-accent">
        <ds-icon>thumb_up</ds-icon>
      </ds-button>
      <ds-button
        class="ds-icon-button"
        disabled
      >
        <ds-icon>add</ds-icon>
      </ds-button>
    </div>
    <div class="row-container">
      <small>Raised</small>
      <ds-button class="ds-raised ds-icon-button">
        <ds-icon>home</ds-icon>
      </ds-button>
      <ds-button class="ds-raised ds-icon-button ds-primary">
        <ds-icon>menu</ds-icon>
      </ds-button>
      <ds-button class="ds-raised ds-icon-button ds-accent">
        <ds-icon>thumb_up</ds-icon>
      </ds-button>
      <ds-button
        class="ds-raised ds-icon-button"
        disabled
      >
        <ds-icon>add</ds-icon>
      </ds-button>
    </div>
    <div class="row-container">
      <small>Dense</small>
      <ds-button class="ds-raised ds-dense ds-icon-button ds-primary">
        <ds-icon>person</ds-icon>
      </ds-button>
      <ds-button class="ds-raised ds-dense ds-icon-button md-raised ds-primary">
        <ds-icon>cached</ds-icon>
      </ds-button>
    </div>
    <ds-card>
      <template #header>
        Card header
      </template>
      <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, beatae fuga ipsum nemo officia possimus quam quas temporibus vitae voluptatem.</p>
      </template>
    </ds-card>
    <ds-datepicker
      v-model="dateValue"
      label="Pick a date"
    />

    <ds-loader />
    <ds-search v-model="searchValue" />
    <pre>search value: {{ searchValue }}</pre>

    <ds-select
      v-model="selectedColor"
      label="Choose a color"
      :options="colors"
    />
    <pre>selected color: {{ selectedColor }}</pre>
    <ds-menu-dropdown label="Dropdown Menu">
      <template #menu-content>
        <p class="menu-item">
          Item One
        </p>
        <p class="menu-item">
          Item Two
        </p>
        <p class="menu-item">
          Item Three
        </p>
      </template>
    </ds-menu-dropdown>
    <ds-snack-bar
      :show-message="showMessage"
      :message="message"
      @close="showMessage = false"
    />
    <ds-button
      class="ds-primary"
      @click="showMessage = !showMessage"
    >
      Toggle Snackbar message
    </ds-button>

    <ds-tabs
      :tabs="tabs"
      @onSelectedTab="onSelectedTab"
    />
    <pre>selected tab: {{ selectedTab }}</pre>
    <div class="row-container">
      <ds-advanced-select
        v-model="dsAdvancedSelect.selected"
        label="users"
        :options="dsAdvancedSelect.options"
        :total-results="dsAdvancedSelect.totalResults"
        @loadMore="getUsers"
      />
    </div>
    <div class="row-container">
      <p>selected:</p> <pre>{{ dsAdvancedSelect.selected }}</pre>
    </div>
  </div>
</template>
<style lang="scss">
@import url('//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');

#app {
  max-width: 800px;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;

}
.menu-item {
  padding: 5px 1rem;
}
</style>
