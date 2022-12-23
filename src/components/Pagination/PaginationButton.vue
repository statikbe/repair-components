<template>
  <button
    type="button"
    class="m-1 px-1 py-0 text-button border-0 font-base font-bold leading-[40px] min-w-[40px] cursor-pointer transition-colors"
    :class="{
      'bg-primary text-primary-contrast': isActive,
      'bg-gray-100 text-primary-dark hover:bg-gray-200': !isActive,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
