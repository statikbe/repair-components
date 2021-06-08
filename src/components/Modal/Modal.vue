<template>
  <modal v-bind="{ ...$props, ...$attrs }" class="relative">
    <button
      type="button"
      class="p-3 bg-white bg-opacity-0 text-black border-none cursor-pointer absolute top-0 right-0"
      @click="$modal.hide($attrs.name)"
    >
      <r-icon name="mdiClose" />
    </button>
    <div class="p-6">
      <slot name="default" />
    </div>
  </modal>
</template>

<script>
import { RIcon } from '..';
export default {
  name: 'r-modal',
  components: {
    RIcon,
  },
};
</script>
