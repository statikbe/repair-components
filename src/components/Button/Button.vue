<template>
  <component
    v-on="$listeners"
    :is="link ? 'a' : 'button'"
    :type="link ? undefined : 'button'"
    class="inline-flex align-center rounded-full border-2 border-solid font-base font-bold text-button tracking-wider cursor-pointer transition-colors"
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
    link: {
      type: Boolean,
      default: () => false,
    },
    size: {
      type: String,
      default: () => 'DEFAULT',
    },
    primary: {
      type: Boolean,
      default: () => false,
    },
    secondary: {
      type: Boolean,
      default: () => false,
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
    dynamicClasses() {
      const { primary, secondary, ghost, contrast, size } = this;

      let classes;
      let color = 'main';

      if (primary) {
        color = 'primary';
      } else if (secondary) {
        color = 'secondary';
      }

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

      classes += {
        small: ' px-3 py-1 text-small',
        DEFAULT: ' px-4 py-2 text-button',
        large: ' px-5 py-3 text-large',
      }[size];

      return classes;
    },
  },
};
</script>
