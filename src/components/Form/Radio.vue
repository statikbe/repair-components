<template>
  <div>
    <label :for="htmlId" class="flex mb-1">
      <input type="radio" :id="htmlId" :value="value" :checked="isChecked" class="mr-1" @change="onChange" />
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
  name: 'r-radio',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    value: {
      required: true,
    },
  },
  computed: {
    isChecked() {
      const { modelValue, value } = this;

      return modelValue === value;
    },
  },
  methods: {
    onChange() {
      this.$emit('update:modelValue', this.value);
    },
  },
};
</script>
