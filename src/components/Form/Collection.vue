<template>
  <r-form-field v-bind="fieldProps" v-on="fieldListeners">
    <div v-if="modelValue.length">
      <div v-for="(item, index) in modelValue" :key="index" class="flex items-start">
        <div class="flex-grow">
          <slot v-bind="{ item, index, disabled, updateItem: updateItem(index) }" />
        </div>
        <button
          v-if="!disabled && !item.disabled"
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
    <div v-else-if="labelEmpty" class="mb-3 italic">
      {{ labelEmpty }}
    </div>
    <r-link v-if="!disabled" color="primary" icon-before="mdiPlusCircle" @click="addItem">
      {{ labelAdd || t('messages.form_collection_item_add') }}
    </r-link>
  </r-form-field>
</template>

<script>
import FormField from '../../mixins/FormField';
import { RIcon, RLink } from '..';

export default {
  name: 'r-form-collection',
  mixins: [FormField],
  components: {
    RIcon,
    RLink,
  },
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

    updateItem(index) {
      return (value) => {
        const newValue = [...this.modelValue];

        newValue[index] = value;

        this.$emit('update:modelValue', newValue);
      };
    },
  },
};
</script>
