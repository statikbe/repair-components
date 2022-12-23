<template>
  <div v-if="items.length">
    <r-grid>
      <r-grid-item v-for="(item, index) in items" :key="index" class="w-4/12 overflow-hidden">
        <slot v-bind="{ item }">
          <a
            href="javascript:void(0)"
            class="block group"
            role="button"
            @click="
              currentIndex = index;
              $modal.show(name);
            "
          >
            <span class="sr-only">{{ $t('modal_link_description') }}</span>
            <div class="relative aspect-w-1 aspect-h-1">
              <slot name="thumbnail" v-bind="{ item }">
                <img :src="item" alt="" class="object-cover w-full" />
              </slot>
              <div
                class="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-primary bg-opacity-80 group-hover:opacity-100"
              >
                <r-icon name="mdiPlusCircle" class="text-white text-huge" />
              </div>
            </div>
          </a>
        </slot>
      </r-grid-item>
    </r-grid>
    <r-modal :name="name">
      <template #content v-on:keyup.left="shiftIndex(-1)" v-on:keyup.right="shiftIndex(+1)">
        <div class="relative h-full">
          <button
            type="button"
            class="absolute left-0 flex p-2 text-black transition-colors transform -translate-y-1/2 bg-white bg-opacity-50 border-0 rounded-r cursor-pointer top-1/2 text-large hover:bg-opacity-100"
            @click="shiftIndex(-1)"
          >
            <r-icon name="mdiChevronLeft" />
            <span class="sr-only">
              {{ $t('modal_prev') }}
            </span>
          </button>
          <slot name="modal" v-bind="{ item: items[currentIndex] }">
            <img :src="items[currentIndex]" alt="" class="flex object-contain max-w-full mx-auto" />
          </slot>
          <button
            type="button"
            class="absolute right-0 flex p-2 text-black transition-colors transform -translate-y-1/2 bg-white bg-opacity-50 border-0 rounded-l cursor-pointer top-1/2 text-large hover:bg-opacity-100"
            @click="shiftIndex(1)"
          >
            <r-icon name="mdiChevronRight" />
            <span class="sr-only">
              {{ $t('modal_next') }}
            </span>
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
