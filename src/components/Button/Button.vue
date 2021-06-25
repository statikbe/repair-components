<template>
  <component
    :is="component"
    class="relative px-4 py-2 inline-block rounded-full border-2 border-solid font-base font-bold text-button tracking-wider transition-colors"
    :class="dynamicClasses"
  >
    <div class="flex align-center" :class="{ 'opacity-0': loading }">
      <r-icon v-if="iconBefore" :name="iconBefore" class="mr-2" />
      <span>
        <slot />
      </span>
      <r-icon v-if="iconAfter" :name="iconAfter" class="ml-2" />
    </div>
    <div v-show="loading" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <r-icon name="mdiLoading" class="animate-spin" size="1.5em" />
    </div>
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
    loading: {
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
    isDisabled() {
      return this.$attrs.disabled || this.$attrs.disabled === '';
    },
    dynamicClasses() {
      const { color, ghost, contrast, loading, isDisabled } = this;

      let classes;

      const addHoverClasses = !isDisabled && !loading;

      if (!contrast) {
        if (!ghost) {
          classes = `text-${color}-contrast bg-${color} border-${color}`;
          if (addHoverClasses) {
            classes += ` hover:bg-${color}-dark hover:border-${color}-dark`;
          }
        } else {
          classes = `text-${color} bg-${color} bg-opacity-0 border-${color}`;
          if (addHoverClasses) {
            classes += ` hover:text-${color}-contrast hover:bg-opacity-100 hover:border-${color}`;
          }
        }
      } else {
        if (!ghost) {
          classes = `text-${color} bg-${color}-contrast border-${color}-contrast`;
          if (addHoverClasses) {
            classes += ` hover:bg-${color}-dark hover:text-${color}-contrast hover:border-${color}-dark`;
          }
        } else {
          classes = `text-${color}-contrast bg-${color}-contrast bg-opacity-0 border-${color}-contrast`;
          if (addHoverClasses) {
            classes += ` hover:bg-opacity-100 hover:text-${color}`;
          }
        }
      }

      if (loading) {
        classes += ' cursor-wait';
      } else if (isDisabled) {
        classes += ' opacity-60 cursor-not-allowed';
      } else {
        classes += ' cursor-pointer';
      }

      return classes;
    },
  },
};
</script>
