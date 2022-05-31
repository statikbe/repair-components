<template>
  <div class="py-6 sm:py-12" :class="color && `bg-${color} text-${color}-contrast`">
    <r-container v-if="container">
      <slot />
    </r-container>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
import { RContainer } from '../Container';

export default {
  name: 'r-section',
  components: {
    RContainer,
  },
  props: {
    color: {
      type: String,
      default: () => null,
    },
    container: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>
