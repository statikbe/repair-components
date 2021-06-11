<template>
  <div>
    <h3 class="text-h3 text-primary" v-if="title">
      {{ title }}
    </h3>
    <div v-if="value.length">
      <div v-for="(item, index) in value" :key="index" class="flex items-start">
        <slot :item="item" :index="index" :update-item="updateItem(index)"></slot>
        <button
          :aria-label="labelRemove || 'Remove item'"
          @click="removeItem(index)"
          @keyup.enter="removeItem(index)"
          type="button"
          class="ml-3 text-primary bg-white bg-opacity-0 border-0"
        >
          <v-icon>mdi-close</v-icon>
        </button>
      </div>
    </div>
    <div v-else class="mb-3 italic">
      {{ labelEmpty || 'No items' }}
    </div>
    <r-button @click="addItem">
      {{ labelAdd || 'Add item' }}
    </r-button>
  </div>
</template>

<script>
export default {
  name: 'r-form-collection',
  model: {
    prop: 'modelValue',
    event: 'modelValue:update',
  },
  props: {
    title: {
      type: String,
      default: () => null,
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
    initialized: {
      type: Boolean,
      default: () => false,
    },
    labelEmpty: {
      type: String,
      default: () => null,
    },
    labelAdd: {
      type: String,
      default: () => null,
    },
    labelRemove: {
      type: String,
      default: () => null,
    },
  },
  mounted() {
    if (this.initialized && !this.modelValue.length) {
      this.addItem();
    }
  },
  methods: {
    addItem() {
      this.$emit('input', [...this.modelValue, null]);
    },

    removeItem(index) {
      this.$emit('input', [...this.modelValue.slice(0, index), ...this.modelValue.slice(index + 1)]);
    },

    updateItem(index, key) {
      return (value) => {
        const newValue = [...this.modelValue];

        newValue[index][key] = value;

        this.$emit('input', newValue);
      };
    },
  },
};
</script>
