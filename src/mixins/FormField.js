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
      type: String,
      default: () => '',
    },
    label: {
      type: String,
      required: true,
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
  computed: {
    fieldProps() {
      return pick(this, ['label', 'errors', 'resettable', 'required', 'placeholder', 'info', 'tooltip']);
    },
  },
};
