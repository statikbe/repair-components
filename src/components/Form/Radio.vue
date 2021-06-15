<template>
  <div>
    <label :for="htmlId" class="flex items-start mb-1">
      <input type="radio" :id="htmlId" :value="value" :checked="isChecked" class="mr-2" @change="onChange" />
      <slot name="label">
        <span class="text-base font-medium flex items-center">
          <span>{{ label }}</span>
          <r-icon
            v-if="tooltip"
            v-tooltip="tooltip"
            name="mdiInformationOutline"
            class="relative text-tiny text-primary ml-1"
          />
        </span>
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
