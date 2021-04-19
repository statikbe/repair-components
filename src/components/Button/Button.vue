<template>
  <button
    type="button"
    :class="[
      $prefix(
        'inline-block px-4 py-2 rounded-full border-0 font-base font-bold text-button tracking-wider cursor-pointer transition-colors'
      ),
      dynamicClasses,
    ]"
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
    // bg-primary text-primary-contrast hover:bg-primary-dark bg-primary-contrast text-primary hover:bg-primary-dark hover:text-primary-contrast
    // bg-secondary text-secondary-contrast hover:bg-secondary-dark bg-secondary-contrast text-secondary hover:bg-secondary-dark hover:text-secondary-contrast
    dynamicClasses() {
      const { $prefix, color, contrast } = this;

      if (!contrast) {
        return $prefix(`bg-${color} text-${color}-contrast hover:bg-${color}-dark`);
      } else {
        return $prefix(`bg-${color}-contrast text-${color} hover:bg-${color}-dark hover:text-${color}-contrast`);
      }
    },
  },
};
</script>
