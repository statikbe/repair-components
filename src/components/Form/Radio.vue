<template>
  <div>
    <div class="flex items-baseline mb-1">
      <input type="radio" :id="htmlId" :value="value" :checked="isChecked" class="sr-only" @change="onChange" />
      <label :for="htmlId" class="flex items-baseline flex-grow-0 cursor-pointer">
        <r-icon v-if="isChecked" name="mdiRadioboxMarked" class="mr-2 flex-shrink-0 text-primary" />
        <r-icon v-else name="mdiRadioboxBlank" class="mr-2 flex-shrink-0" />
        <span class="text-base font-medium">{{ label }}</span>
      </label>
      <r-icon
        v-if="tooltip"
        v-tooltip="tooltip"
        name="mdiInformationOutline"
        class="relative text-tiny text-primary ml-1"
      />
    </div>
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
