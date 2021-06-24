<template>
  <component
    :is="component"
    class="px-4 py-2 inline-flex align-center rounded-full border-2 border-solid font-base font-bold text-button tracking-wider cursor-pointer transition-colors"
    :class="dynamicClasses"
  >
    <r-icon v-if="iconBefore" :name="iconBefore" class="mr-2" />
    <slot />
    <r-icon v-if="iconAfter" :name="iconAfter" class="ml-2" />
  </component>
</template>

<script>
import { RIcon } from '../Icon';

export default {
  name: 'r-button',
  components: {
    RIcon,
  },
  props: {
    inertia: {
      type: Boolean,
      default: () => false,
    },
    nuxt: {
      type: Boolean,
      default: () => false,
    },
    color: {
      type: String,
      default: () => 'primary',
    },
    contrast: {
      type: Boolean,
      default: () => false,
    },
    ghost: {
      type: Boolean,
      default: () => false,
    },
    iconBefore: {
      type: String,
      default: () => null,
    },
    iconAfter: {
      type: String,
      default: () => null,
    },
  },
  computed: {
    component() {
      if (this.inertia) {
        return 'inertia-link';
      } else if (this.nuxt) {
        return 'nuxt-link';
      } else if (this.link) {
        return 'a';
      }

      return 'button';
    },
    dynamicClasses() {
      const { color, ghost, contrast } = this;

      let classes;

      if (!contrast) {
        if (!ghost) {
          classes = `text-${color}-contrast bg-${color} border-${color} hover:bg-${color}-dark hover:border-${color}-dark`;
        } else {
          classes = `text-${color} bg-${color} bg-opacity-0 border-${color} hover:text-${color}-contrast hover:bg-opacity-100 hover:border-${color}`;
        }
      } else {
        if (!ghost) {
          classes = `text-${color} bg-${color}-contrast border-${color}-contrast hover:bg-${color}-dark hover:text-${color}-contrast hover:border-${color}-dark`;
        } else {
          classes = `text-${color}-contrast bg-${color}-contrast bg-opacity-0 border-${color}-contrast hover:bg-opacity-100 hover:text-${color}`;
        }
      }

      if (this.$attrs.disabled) {
        classes += 'opacity-50 cursor-not-allowed';
      }

      return classes;
    },
  },
};
</script>
