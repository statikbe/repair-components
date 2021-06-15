<template>
  <component
    v-on="$listeners"
    :is="button ? 'button' : 'a'"
    :type="button ? 'button' : undefined"
    class="inline-flex items-center font-base font-bold text-base text-black cursor-pointer transition-colors underline hover:no-underline"
  >
    <r-icon v-if="iconBefore" :name="iconBefore" class="mr-2" :class="`text-${color}`" />
    <slot />
    <r-icon v-if="iconAfter" :name="iconAfter" class="ml-2" :class="`text-${color}`" />
  </component>
</template>

<script>
import { RIcon } from '../Icon';

export default {
  name: 'r-link',
  components: {
    RIcon,
  },
  props: {
    button: {
      type: Boolean,
      default: () => false,
    },
    color: {
      type: String,
      default: () => 'primary',
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
};
</script>
