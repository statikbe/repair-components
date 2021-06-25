import pick from 'lodash.pick';

import { RFormField } from '../components';

export default {
  components: {
    RFormField,
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: {
      type: [String, Array, Number, Boolean],
      default: () => '',
    },
    label: {
      type: String,
      default: () => null,
    },
    errors: {
      type: [String, Array],
      default: () => '',
    },
    resettable: {
      type: Boolean,
      default: () => false,
    },
    required: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    placeholder: {
      type: String,
      default: () => null,
    },
    info: {
      type: String,
      default: () => null,
    },
    tooltip: {
      type: String,
      default: () => null,
    },
  },
  data: () => ({
    originalModelValue: null,
  }),
  computed: {
    canReset() {
      return this.resettable && this.modelValue !== this.originalModelValue;
    },
    fieldProps() {
      return pick(this, ['label', 'errors', 'required', 'disabled', 'placeholder', 'info', 'tooltip', 'canReset']);
    },
    fieldListeners() {
      return {
        reset: () => {
          this.$emit('update:modelValue', this.originalModelValue);
        },
      };
    },
    fieldClass() {
      return `text-small block w-full rounded border-gray-300 border-2 border-solid px-3 py-2 box-border max-w-none ${
        this.disabled ? 'text-gray-400 bg-gray-50 cursor-not-allowed' : 'text-main bg-white'
      }`;
    },
  },
  created() {
    this.originalModelValue = this.modelValue;
  },
};
