<template>
  <div class="ds-pagination-controls">
    <div style="flex: 2" />
    <div>
      <span class="paging-number">{{ firstRow }}</span> to <span class="paging-number">{{ lastRow }}</span> of <span class="paging-number">{{ totalResults }}</span>
    </div>
    <ds-button
      class="ds-icon-button ds-dense"
      :disabled="currentPage === 1"
      @click="goToFirstPage"
    >
      <ds-icon>first_page</ds-icon>
    </ds-button>
    <ds-button
      class="ds-icon-button ds-dense"
      :disabled="currentPage === 1"
      @click="goToPrevPage"
    >
      <ds-icon>navigate_before</ds-icon>
    </ds-button>
    <div>Page <span class="paging-number">{{ currentPage }}</span> of <span class="paging-number">{{ totalPages }}</span></div>
    <ds-button
      class="ds-icon-button ds-dense"
      :disabled="(currentPage) === totalPages"
      @click="goToNextPage"
    >
      <ds-icon>navigate_next</ds-icon>
    </ds-button>
    <ds-button
      class="ds-icon-button ds-dense"
      :disabled="currentPage === totalPages"
      @click="goToLastPage"
    >
      <ds-icon>last_page</ds-icon>
    </ds-button>
  </div>
</template>

<script>
import DsButton from '@/lib-components/DsButton'
export default {
  name: 'DsPagination',
  components: { DsButton },
  model: {
    prop: 'currentPage',
    event: 'page-change'
  },
  props: {
    totalResults: {
      type: Number,
      required: true,
      default: 100
    },
    pageSize: {
      type: Number,
      required: true,
      default: 20
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data () {
    return {
      isFirstPage: true,
      isLastPage: false
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.totalResults / Math.round(this.pageSize))
    },
    firstRow () {
      return ((this.pageSize * this.currentPage) - this.pageSize) + 1
    },
    lastRow () {
      const maxRow = (this.currentPage * this.pageSize)
      return maxRow > this.totalResults ? this.totalResults : maxRow
    }
  },
  methods: {
    goToNextPage () {
      let activePage = this.currentPage
      if (activePage <= this.totalPages) {
        activePage++
      }
      this.goToPage(activePage)
    },
    goToPrevPage () {
      let activePage = this.currentPage
      if (activePage > 1) {
        activePage--
      }
      this.goToPage(activePage)
    },
    goToFirstPage () {
      this.goToPage(1)
    },
    goToLastPage () {
      this.goToPage(this.totalPages)
    },
    goToPage (activePage) {
      this.$emit('page-change', activePage)
      this.$emit('change', {
        page: activePage,
        totalPages: this.totalPages,
        pageSize: this.pageSize,
        next: activePage < this.totalPages ? activePage * this.pageSize : this.totalResults,
        prev: activePage > 0 ? (activePage - 1) * this.pageSize : 0
      })
    }
  }
}
</script>

<style scoped lang="scss">
.ds-pagination-controls {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;

  .nav-btn {
    min-width: 0;
    max-width: 24px;
  }
  .nav-btn[disabled] {
    border: none;
    color: var(--disabled-color) !important;
  }

  .paging-number {
    font-weight: bold;
  }
}
</style>
