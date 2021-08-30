<template>
  <r-form-field v-bind="fieldProps" v-on="fieldListeners">
    <v-multiselect
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="$t('form_select_placeholder')"
      :label="labelBy"
      :show-labels="showLabels"
      :searchable="searchable"
      :value="internalValue"
      :allow-empty="!fieldProps.required"
      :disabled="disabled"
      @input="handleInput"
    >
      <slot v-if="$slots.option" name="option" />
      <slot v-if="$slots.singleLabel" name="singleLabel" />
    </v-multiselect>
  </r-form-field>
</template>

<script>
import VMultiselect from 'vue-multiselect';

import FormField from '../../mixins/FormField';

export default {
  name: 'r-select',
  mixins: [FormField],
  components: {
    VMultiselect,
  },
  props: {
    labelBy: {
      type: String,
      default: () => '',
    },
    trackBy: {
      type: String,
      default: () => '',
    },
    searchable: {
      type: Boolean,
      default: () => false,
    },
    showLabels: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    internalValue: null,
  }),
  watch: {
    modelValue() {
      this.setInternalValue();
    },
  },
  created() {
    this.setInternalValue();
  },
  methods: {
    setInternalValue() {
      const {
        trackBy,
        modelValue,
        $attrs: { options, multiple },
      } = this;

      if (!trackBy) {
        this.internalValue = modelValue;
      }

      if (!multiple) {
        this.internalValue = options.find((option) => option[trackBy] == modelValue) || null;
      } else {
        this.internalValue = options.filter((option) => modelValue.includes(option[trackBy])) || null;
      }
    },
    handleInput(value) {
      const {
        trackBy,
        $attrs: { multiple },
      } = this;

      if (!multiple) {
        this.$emit('update:modelValue', trackBy ? value[trackBy] : value);
      } else {
        this.$emit('update:modelValue', trackBy ? value.map((option) => option[trackBy]) : value);
        // something is wrong with multiple select
      }
    },
  },
};
</script>
