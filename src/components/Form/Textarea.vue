<template>
  <r-form-field v-bind="fieldProps" v-on="fieldListeners">
    <template #default="{ id }">
      <textarea
        :id="id"
        :value="modelValue"
        type="text"
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
  name: 'r-form-textarea',
  mixins: [FormField],
};
</script>
