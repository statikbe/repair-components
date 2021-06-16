<template>
  <r-form-field v-bind="fieldProps">
    <v-multiselect
      v-bind="{
        placeholder: t('messages.form_select_placeholder'),
        showLabels: false,
        searchable: false,
        hideSelected: true,
        allowEmpty: !fieldProps.required,
        ...$attrs,
        value: modelValue,
      }"
      v-on="filteredListeners"
    >
      <template #option="{ option }">
        <div>{{ option }}</div>
      </template>
    </v-multiselect>
  </r-form-field>
</template>

<script>
import VMultiselect from 'vue-multiselect';
import FormField from '../../mixins/FormField';

export default {
  name: 'r-select',
  mixins: [FormField],
  components: {
    VMultiselect,
  },
  computed: {
    filteredListeners() {
      return {
        ...this.$listeners,
        input: (value) => {
          this.$emit('update:modelValue', value);
        },
      };
    },
  },
};
</script>
