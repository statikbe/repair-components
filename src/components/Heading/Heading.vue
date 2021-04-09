<template>
  <component :is="`h${level}`" class="font-base font-black tracking-wide" :class="[dynamicClasses]">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'r-heading',
  props: {
    level: {
      type: [String, Number],
      default: () => 2,
    },
    color: {
      type: String,
      default: () => 'primary',
    },
  },
  computed: {
    dynamicClasses() {
      const { level, color } = this;

      return `text-h${level} text-${color}`;
    },
  },
};
</script>
