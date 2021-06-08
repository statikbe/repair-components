<template>
  <r-form-field v-bind="{ label }">
    <template #default="{ id }">
      <input
        :id="id"
        :value="modelValue"
        type="text"
        class="text-small block w-full px-3 py-2 rounded border-gray-300 border-2 border-solid bg-white"
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
};
</script>
