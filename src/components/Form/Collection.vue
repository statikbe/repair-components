<template>
  <r-form-field v-bind="fieldProps">
    <div v-if="modelValue.length">
      <div v-for="(item, index) in modelValue" :key="index" class="flex items-start">
        <div class="flex-grow">
          <slot :item="item" :index="index" :update-item="updateItem(index)"></slot>
        </div>
        <button
          :aria-label="labelRemove || t('messages.form_collection_item_remove')"
          @click="removeItem(index)"
          @keyup.enter="removeItem(index)"
          type="button"
          class="ml-3 text-primary bg-white bg-opacity-0 border-0"
        >
          <r-icon name="mdiClose" />
        </button>
      </div>
    </div>
    <div v-else class="mb-3 italic">
      {{ labelEmpty || t('messages.form_collection_empty') }}
    </div>
    <r-button @click="addItem">
      {{ labelAdd || t('messages.form_collection_item_add') }}
    </r-button>
  </r-form-field>
</template>

<script>
import FormField from '../../mixins/FormField';

export default {
  name: 'r-form-collection',
  mixins: [FormField],
  props: {
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
      this.$emit('update:modelValue', [...this.modelValue, {}]);
    },

    removeItem(index) {
      this.$emit('update:modelValue', [...this.modelValue.slice(0, index), ...this.modelValue.slice(index + 1)]);
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
