<template>
  <button
    type="button"
    class="inline-block px-4 py-2 rounded-full border-0 font-base font-bold text-button tracking-wider cursor-pointer transition-colors"
    :class="[colorClasses]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'r-button',
  props: {
    color: {
      type: String,
      default: () => 'primary',
    },
    contrast: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    colorClasses() {
      const { color, contrast } = this;

      if (!contrast) {
        return `bg-${color} text-${color}-contrast hover:bg-${color}-dark`;
      } else {
        return `bg-${color}-contrast text-${color} hover:bg-${color}-dark hover:text-${color}-contrast`;
      }
    },
  },
};
</script>
