<template>
  <div v-if="items.length">
    <r-grid>
      <r-grid-item v-for="(item, index) in items" :key="index" class="w-4/12 overflow-hidden">
        <slot v-bind="{ item }">
          <a
            href="javascript:void(0)"
            class="block group"
            @click="
              currentIndex = index;
              $modal.show(name);
            "
          >
            <div class="relative aspect-w-1 aspect-h-1">
              <slot name="thumbnail" v-bind="{ item }">
                <img :src="item" alt="" class="w-full object-cover" />
              </slot>
              <div
                class="flex justify-center items-center absolute inset-0 bg-primary bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <r-icon name="mdiPlusCircle" class="text-huge text-white" />
              </div>
            </div>
          </a>
        </slot>
      </r-grid-item>
    </r-grid>
    <r-modal :name="name">
      <template #content>
        <div class="relative h-full">
          <button
            type="button"
            class="absolute top-1/2 transform -translate-y-1/2 left-0 rounded-r flex p-2 text-large text-black bg-white bg-opacity-50 hover:bg-opacity-100 border-0 cursor-pointer transition-colors"
            @click="shiftIndex(-1)"
          >
            <r-icon name="mdiChevronLeft" />
          </button>
          <slot name="modal" v-bind="{ item: items[currentIndex] }">
            <img :src="items[currentIndex]" alt="" class="flex object-contain mx-auto max-w-full" />
          </slot>
          <button
            type="button"
            class="absolute top-1/2 transform -translate-y-1/2 right-0 rounded-l flex p-2 text-large text-black bg-white bg-opacity-50 hover:bg-opacity-100 border-0 cursor-pointer transition-colors"
            @click="shiftIndex(1)"
          >
            <r-icon name="mdiChevronRight" />
          </button>
        </div>
      </template>
    </r-modal>
  </div>
</template>

<script>
import Uuid from '../../mixins/Uuid';
import { RGrid, RGridItem } from '../Grid';
import { RModal } from '../Modal';

export default {
  name: 'r-gallery',
  mixins: [Uuid],
  components: {
    RGrid,
    RGridItem,
    RModal,
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
    shiftIndex(offset) {
      const { currentIndex, items } = this;

      this.currentIndex = (currentIndex + items.length + offset) % items.length;
    },
  },
};
</script>
