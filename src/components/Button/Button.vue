<template>
  <component
    class="relative inline-block px-8 py-3 font-bold no-underline transition-colors border-2 border-solid rounded-full font-base text-button"
    :is="component"
    :to="to"
    :class="dynamicClasses"
    :disabled="$attrs.disabled || loading"
    v-bind="{ ...$attrs }"
  >
    <div class="flex align-center" :class="{ 'opacity-0': loading }">
      <r-icon v-if="iconBefore" :name="iconBefore" class="mr-2" />
      <span>
        <slot />
      </span>
      <r-icon
        v-if="iconAfter"
        :name="iconAfter"
        class="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
      />
    </div>
    <div v-show="loading" class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
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
    link: {
      type: Boolean,
      default: () => false,
    },
    to: {
      type: [String, Object],
      default: () => undefined,
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
      const { color, ghost, contrast, loading, isDisabled, iconAfter } = this;

      let classes;

      const addHoverClasses = !isDisabled && !loading;

      if (!contrast) {
        if (!ghost) {
          classes = `text-${color}-contrast bg-${color} border-${color} ${iconAfter ? 'group' : ''}`;
          if (addHoverClasses) {
            classes += ` hover:bg-${color}-dark hover:border-${color}-dark ${iconAfter ? 'group' : ''}`;
          }
        } else {
          classes = `text-${color} bg-transparent border-${color} font-semibold ${iconAfter ? 'group' : ''}`;
          if (addHoverClasses) {
            classes += ` hover:text-${color}-contrast hover:bg-${color} hover:border-${color} ${
              iconAfter ? 'group' : ''
            }`;
          }
        }
      } else {
        if (!ghost) {
          classes = `text-${color} bg-${color}-contrast border-${color}-contrast ${iconAfter ? 'group' : ''}`;
          if (addHoverClasses) {
            classes += ` hover:bg-${color}-dark hover:text-${color}-contrast hover:border-${color}-dark ${
              iconAfter ? 'group' : ''
            }`;
          }
        } else {
          classes = `text-${color}-contrast bg-transparent border-${color}-contrast font-semibold ${
            iconAfter ? 'group' : ''
          }`;
          if (addHoverClasses) {
            classes += ` hover:bg-${color}-contrast hover:text-${color} ${iconAfter ? 'group' : ''}`;
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
