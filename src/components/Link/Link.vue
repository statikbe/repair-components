<template>
  <component
    v-on="$listeners"
    :is="component"
    class="inline-flex items-center font-base font-bold text-base text-black transition-colors underline"
    :class="[
      { 'cursor-pointer hover:no-underline': !disabled, 'opacity-60 cursor-not-allowed': disabled },
      color ? `hover:text-${color}` : '',
    ]"
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
    inertia: {
      type: Boolean,
      default: () => false,
    },
    nuxt: {
      type: Boolean,
      default: () => false,
    },
    button: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
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
  computed: {
    component() {
      if (this.inertia) {
        return 'inertia-link';
      } else if (this.nuxt) {
        return 'nuxt-link';
      } else if (this.button) {
        return 'button';
      }

      return 'a';
    },
  },
};
</script>
