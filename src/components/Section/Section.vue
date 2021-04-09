<template>
  <div :class="[sizeClass, color && `bg-${color} text-${color}-contrast`]">
    <v-container v-if="container" class="container">
      <slot />
    </v-container>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  name: 'r-section',
  props: {
    color: {
      type: String,
      default: () => null,
    },
    size: {
      type: String,
      default: () => 'DEFAULT',
    },
    container: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    sizeClass() {
      return {
        0: 'py-0',
        sm: 'py-3',
        DEFAULT: 'py-9',
        lg: 'py-12',
      }[this.size];
    },
  },
};
</script>
