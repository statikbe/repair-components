<template>
  <r-form-field>
    <template #default="{ id }">
      <input
        :id="id"
        :value="modelValue"
        type="text"
        :class="$prefix('text-small block w-full px-3 py-2 rounded border-gray-300 border-solid border bg-white')"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>
  </r-form-field>
</template>

<script>
export default {
  name: 'r-input',
  props: {
    modelValue: {
      type: String,
      default: () => '',
    },
  },
  emits: ['update:modelValue'],
};
</script>
