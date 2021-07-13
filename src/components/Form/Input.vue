<template>
  <r-form-field v-bind="fieldProps" v-on="fieldListeners">
    <template #default="{ id }">
      <input
        :id="id"
        :value="modelValue"
        :type="type"
        :class="fieldClass"
        :disabled="disabled"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>
  </r-form-field>
</template>

<script>
import FormField from '../../mixins/FormField';

export default {
  name: 'r-input',
  mixins: [FormField],
  props: {
    type: {
      type: String,
      default: () => 'text',
    },
  },
};
</script>
