<template>
  <div>
    <div class="border-0 border-b-2 border-gray-300 border-solid">
      <button
        type="button"
        v-for="value in values"
        :key="value"
        class="p-0 border-2 border-b-0 border-solid focus:!outline-none cursor-pointer focus:border-primary"
        :class="isActive(value) ? `bg-${bg} border-gray-300` : 'bg-gray-100 border-gray-100'"
        @click="$emit('update:modelValue', value)"
      >
        <div
          class="relative top-[2px] p-2 border-0 border-b-2 border-solid min-w-[100px] text-small"
          :class="isActive(value) ? `border-${bg}` : 'border-gray-300'"
        >
          {{ (labels && labels[value]) || value }}
        </div>
      </button>
    </div>
    <div v-if="hasContent" class="p-6 border-2 border-t-0 border-gray-300 border-solid" :class="`bg-${bg}`">
      <slot name="default" :value="modelValue"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'r-tabs',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: {
      type: String,
      default: () => null,
    },
    hasContent: {
      type: Boolean,
      default: () => true,
    },
    values: {
      type: Array,
      required: true,
    },
    labels: {
      type: Object,
      default: () => {},
    },
    bg: {
      type: String,
      default: () => 'white',
    },
  },
  data: () => ({
    activeTab: null,
  }),
  watch: {
    values(values) {
      if (!values.includes(this.activeTab)) {
        this.resetTabs();
      }
    },
  },
  created() {
    if (!this.modelValue) {
      this.resetTabs();
    }
  },
  methods: {
    resetTabs() {
      this.$emit('update:modelValue', this.values[0]);
    },
    isActive(value) {
      return this.modelValue === value;
    },
  },
};
</script>
