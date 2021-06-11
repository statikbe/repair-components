<template>
  <div v-if="items.length">
    <r-grid>
      <r-grid-item v-for="(item, index) in items" :key="index" class="w-4/12">
        <slot v-bind="{ item }">
          <a
            href="javascript:void(0)"
            @click="
              currentIndex = index;
              $modal.show(name);
            "
          >
            <img :src="item.small" alt="" />
          </a>
        </slot>
      </r-grid-item>
    </r-grid>
    <r-modal :name="name" @closed="currentIndex = 0">
      <div class="relative">
        <button
          type="button"
          class="absolute top-1/2 transform -translate-y-1/2 left-0 p-1 text-black bg-white bg-opacity-50 border-0"
          @click="$modal.hide(name)"
        >
          <r-icon name="mdiClose" />
        </button>
        <button type="button" class="p-1 text-black bg-white bg-opacity-50 border-0" @click="changeIndex(-1)">
          <r-icon name="mdiChevronLeft" />
        </button>
        <img :src="items[currentIndex].url" alt="" class="block" />
        <button
          type="button"
          class="absolute top-1/2 transform -translate-y-1/2 right-0 p-1 text-black bg-white bg-opacity-50 border-0"
          @click="changeIndex(1)"
        >
          <r-icon name="mdiChevronRight" />
        </button>
      </div>
    </r-modal>
  </div>
</template>

<script>
import Uuid from '../../mixins/Uuid';
import {
  RGrid,
  RGridItem,
  //  RModal
} from '..';

export default {
  name: 'r-gallery',
  mixins: [Uuid],
  components: {
    RGrid,
    RGridItem,
    // RModal,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    currentIndex: 0,
  }),
  computed: {
    name() {
      return `gallery_${this.uuid}`;
    },
  },
  methods: {
    changeIndex(offset) {
      const { currentIndex, items } = this;

      this.currentIndex = (currentIndex + items.length + offset) % items.length;
    },
  },
};
</script>
