<template>
  <modal
    v-bind="{ ...$props, ...$attrs, ...$listeners }"
    @before-open="handleOpen"
    @before-close="handleClose"
    @closed="handleClosed"
  >
    <div class="relative h-full overflow-auto">
      <button
        v-if="dismissable"
        type="button"
        class="p-3 bg-white bg-opacity-50 hover:bg-opacity-100 text-black border-none cursor-pointer absolute top-0 right-0 rounded-bl transition-colors"
        @click="closeModal"
      >
        <r-icon name="mdiClose" />
      </button>
      <slot name="content">
        <div class="p-6">
          <slot name="default" />
        </div>
      </slot>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'r-modal',
  props: {
    height: {
      type: String,
      default: () => 'auto',
    },
    scrollable: {
      type: Boolean,
      default: () => true,
    },
    adaptive: {
      type: Boolean,
      default: () => true,
    },
    maxWidth: {
      type: Number,
      default: () => Math.floor(window.innerWidth * 0.9),
    },
    maxHeight: {
      type: Number,
      default: () => Math.floor(window.innerHeight * 0.9),
    },
    dismissable: {
      type: Boolean,
      default: () => true,
    },
  },
  methods: {
    closeModal() {
      this.$modal.hide(this.$attrs.name);
    },

    handleOpen() {
      document.body.classList.add('overflow-hidden');
    },

    handleClose(event) {
      if (!this.dismissable) {
        event.cancel();
      }
    },

    handleClosed() {
      document.body.classList.remove('overflow-hidden');
    },
  },
};
</script>
