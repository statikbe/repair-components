<template>
  <modal v-bind="{ ...$props, ...$attrs, ...$listeners }" @before-open="handleOpen" @close="handleClose">
    <div class="relative">
      <button
        type="button"
        class="p-3 bg-white bg-opacity-0 text-black border-none cursor-pointer absolute top-0 right-0"
        @click="closeModal"
      >
        <r-icon name="mdiClose" />
      </button>
      <div class="p-6 overflow-auto">
        <slot name="default" />
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'r-modal',
  props: {
    height: {
      type: String,
      default: () => 'auto'
    },
    scrollable: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    closeModal() {
      this.$modal.hide(this.$attrs.name);
    },

    handleOpen() {
      document.body.classList.add('overflow-hidden');
    },

    handleClose() {
      document.body.classList.remove('overflow-hidden');
    }
  }
};
</script>
