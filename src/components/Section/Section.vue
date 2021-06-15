<template>
  <div :class="dynamicClasses">
    <r-container v-if="container">
      <slot />
    </r-container>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
import { RContainer } from '..';

export default {
  name: 'r-section',
  components: {
    RContainer,
  },
  props: {
    primary: {
      type: Boolean,
      default: () => false,
    },
    secondary: {
      type: Boolean,
      default: () => false,
    },
    size: {
      type: String,
      default: () => 'md',
    },
    container: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    dynamicClasses() {
      const { primary, secondary, size } = this;

      let classes = [];
      let color = null;

      classes.push(
        {
          0: 'py-0',
          sm: 'py-3',
          md: 'py-9',
          lg: 'py-12',
        }[size]
      );

      if (primary) {
        color = 'primary';
      } else if (secondary) {
        color = 'secondary';
      }

      if (color) {
        classes.push(`bg-${color} text-${color}-contrast`);
      }

      return classes;
    },
  },
};
</script>
