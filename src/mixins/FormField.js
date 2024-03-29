import pick from 'lodash.pick';
import isEqual from 'lodash.isequal';

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
    resetValue: {
      default: () => undefined,
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
      type: [String, Object],
      default: () => null,
    },
  },
  computed: {
    canReset() {
      return typeof this.originalValue !== 'undefined' && !isEqual(this.modelValue, this.originalValue);
    },
    fieldProps() {
      return pick(this, ['label', 'errors', 'required', 'disabled', 'placeholder', 'info', 'tooltip', 'canReset']);
    },
    fieldListeners() {
      return {
        reset: () => {
          this.$emit('update:modelValue', this.originalValue);
        },
      };
    },
    fieldClass() {
      return `text-small block w-full rounded border-gray-300 border-2 border-solid px-3 py-2 box-border max-w-none focus:outline-none placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary ${
        this.disabled ? 'text-gray-400 bg-gray-50 cursor-not-allowed' : 'text-main bg-white'
      } ${this.errors.length && !this.modelValue.length ? 'border-red-500 bg-red-100' : 'border-gray-300'}`;
    },
  },
  created() {
    this.originalValue = Object.assign({ originalValue: this.resetValue }).originalValue;
  },
};
