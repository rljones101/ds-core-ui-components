<template>
  <div>
    <div class="pagination-details flex-center-space-between">
      <div>
        <span v-if="totalPages > 1"> Total Pages: {{ totalPages }}</span>
        <span class="pagination-detail-item"> Total Results: {{ total }}</span>
      </div>
      <ul
        v-if="totalPages > 1"
        class="pagination"
      >
        <li class="pagination-item">
          <ds-button
            type="button"
            :disabled="isInFirstPage"
            @click="onClickFirstPage"
          >
            First
          </ds-button>
        </li>
        <li class="pagination-item">
          <ds-button
            type="button"
            :disabled="isInFirstPage"
            @click="onClickPreviousPage"
          >
            <span class="material-icons arrow-icon">keyboard_arrow_left</span>
          </ds-button>
        </li>
        <li
          v-for="(page, i) in pages"
          :key="i"
          class="pagination-item"
        >
          <ds-button
            type="button"
            :disabled="page.isDisabled"
            :class="{ active: isPageActive(page.number) }"
            @click="onClickPage(page.number)"
          >
            {{ page.label }}
          </ds-button>
        </li>
        <li class="pagination-item">
          <ds-button
            type="button"
            :disabled="isInLastPage"
            @click="onClickNextPage"
          >
            <span class="material-icons arrow-icon">keyboard_arrow_right</span>
          </ds-button>
        </li>
        <li class="pagination-item">
          <ds-button
            type="button"
            :disabled="isInLastPage"
            @click="onClickLastPage"
          >
            Last
          </ds-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DsButton from 'src/components/controls/ds-button/DsButton'
export default {
  name: 'DsPagination',
  components: {
    DsButton
  },
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage () {
      // When on the first page
      if (this.currentPage === 0) {
        return 0
      }
      // When on the last page
      if ((this.currentPage + 1) === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1
      }
      // When in between
      return this.currentPage - 1
    },
    endPage () {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
    },
    pages () {
      const range = []

      for (let i = this.startPage; i < this.endPage; i++) {
        range.push({
          label: (i + 1),
          number: i,
          isDisabled: i === this.currentPage
        })
      }
      return range
    },
    isInFirstPage () {
      return this.currentPage === 0
    },
    isInLastPage () {
      return (this.currentPage + 1) === this.totalPages
    }
  },
  methods: {
    onClickFirstPage () {
      this.$emit('pagechanged', 0)
    },
    onClickPreviousPage () {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage (page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage () {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage () {
      this.$emit('pagechanged', this.totalPages - 1)
    },
    isPageActive (page) {
      return this.currentPage === page
    }
  }
}
</script>

<style lang="scss">
    .pagination-details {
      height: 36px;
      line-height: 36px;
      margin-top: 50px;
      display: flex;
    }

    .pagination-detail-item {
      margin-left: 10px;
    }

    .pagination {
        display: flex;
        list-style-type: none;
        background: transparent;
        padding-inline-start: 0;
        margin: 0;
    }

    .pagination-item {
        padding: 5px;

        .ds-button {
            margin: 0;
            border: 1px solid var(--button-color);
            background: transparent;
            color: var(--button-color) !important;
            min-width: 40px;
        }

        .ds-button.active {
          background-color: var(--button-color) !important;
          color: var(--main-view-bg-color) !important;
        }

        .ds-button .arrow-icon {
          margin-top: 3px;
        }
    }

    .pagination-item:first-child {
      padding-right: 0;
    }
</style>
