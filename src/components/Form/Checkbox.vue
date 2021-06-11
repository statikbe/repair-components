<template>
  <div>
    <label :for="htmlId" class="flex mb-1">
      <input type="checkbox" :id="htmlId" :value="value" :checked="isChecked" class="mr-1" @change="onChange" />
      <slot name="label">
        <span>{{ label }}</span>
      </slot>
    </label>
  </div>
</template>

<script>
import FormField from '../../mixins/FormField';
import Uuid from '../../mixins/Uuid';

export default {
  mixins: [FormField, Uuid],
  name: 'r-checkbox',
  props: {
    value: {
      type: String,
      required: true,
    },
    trueValue: {
      default: () => true,
    },
    falseValue: {
      default: () => false,
    },
  },
  computed: {
    isChecked() {
      const { modelValue, value } = this;

      if (Array.isArray(modelValue)) {
        return modelValue.includes(value);
      }

      return modelValue === value;
    },
  },
  methods: {
    onChange(event) {
      const { modelValue, value } = this;
      const isChecked = event.target.checked;
      let newValue;
      if (Array.isArray(modelValue)) {
        newValue = [...modelValue];
        if (isChecked) {
          newValue.push(value);
        } else {
          newValue.splice(newValue.indexOf(value), 1);
        }
      } else {
        newValue = isChecked ? this.trueValue : this.falseValue;
      }

      this.$emit('update:modelValue', newValue);
    },
  },
};
</script>
