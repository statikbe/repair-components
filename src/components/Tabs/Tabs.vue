<template>
  <div>
    <div class="border-0 border-b-1 border-solid border-gray-300">
      <button
        type="button"
        v-for="value in values"
        :key="value"
        class="p-0 border-1 border-b-0 border-solid cursor-pointer"
        :class="isActive(value) ? 'bg-[transparent] border-gray-300' : 'bg-gray-100 border-gray-100'"
        @click="$emit('update:modelValue', value)"
      >
        <div
          class="relative top-[1px] p-2 border-0 border-b-1 border-solid min-w-[100px] text-small"
          :class="isActive(value) ? 'border-white' : 'border-gray-300'"
        >
          {{ (labels && labels[value]) || value }}
        </div>
      </button>
    </div>
    <div class="bg-white p-6 pb-0 border-1 border-t-0 border-b-0 border-solid border-gray-300">
      <slot v-bind="{ value }"/>
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
    values: {
      type: Array,
      required: true,
    },
    labels: {
      type: Object,
      default: () => {},
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
