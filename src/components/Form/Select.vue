<template>
  <r-form-field v-bind="fieldProps" v-on="fieldListeners">
    <v-multiselect
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="placeholder || defaultPlaceholder"
      :label="labelBy"
      :track-by="trackBy"
      :show-labels="showLabels"
      :searchable="searchable"
      :value="internalValue"
      :allow-empty="!fieldProps.required"
      :disabled="disabled"
      :group-label="groupLabel"
      :group-values="groupValues"
      :group-select="groupSelect"
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
    groupLabel: {
      type: String,
      default: () => null,
    },
    groupValues: {
      type: String,
      default: () => null,
    },
    groupSelect: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    internalValue: null,
  }),
  computed: {
    defaultPlaceholder() {
      return this.searchable ? this.$t('form_select_placeholder') : this.$t('form_select_search_placeholder');
    },
  },
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
        groupValues,
        modelValue,
        $attrs: { options, multiple },
      } = this;

      if (!trackBy) {
        this.internalValue = modelValue;
      }

      if (!multiple) {
        if (groupValues) {
          options.find((option) => {
            option[groupValues].find((value) => {
              if (value.value === modelValue) {
                this.internalValue = value;
              }
            });
          });
        } else {
          this.internalValue = options.find((option) => option[trackBy] == modelValue) || null;
        }
      } else {
        if (groupValues) {
          const values = [];
          options.forEach((option) => {
            option[groupValues].forEach((value) => {
              if (modelValue.includes(value[trackBy])) {
                values.push(value);
              }
            });
          });
          this.internalValue = values;
        } else {
          this.internalValue = options.filter((option) => modelValue.includes(option[trackBy])) || null;
        }
      }
    },
    handleInput(value) {
      const {
        trackBy,
        groupValues,
        $attrs: { multiple },
      } = this;

      if (!multiple) {
        if (groupValues) {
          this.$emit('update:modelValue', value[trackBy]);
        } else {
          this.$emit('update:modelValue', trackBy ? value[trackBy] : value);
        }
      } else {
        this.$emit('update:modelValue', trackBy ? value.map((option) => option[trackBy]) : value);
        // something is wrong with multiple select
      }
    },
  },
};
</script>
