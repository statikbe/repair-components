<template>
  <div class="mb-1">
    <input type="radio" :id="htmlId" :value="value" :checked="isChecked" class="sr-only" @change="onChange" />
    <label :for="htmlId" class="cursor-pointer">
      <div class="flex">
        <span class="mr-2 flex-shrink-0">
          <r-icon v-if="isChecked" name="mdiRadioboxMarked" class="text-primary" />
          <r-icon v-else name="mdiRadioboxBlank" />
        </span>
        <div>
          <span class="text-base font-medium mr-2 align-middle">{{ label }}</span>
          <r-icon
            v-if="tooltip"
            v-tooltip="tooltip"
            name="mdiInformationOutline"
            class="relative text-tiny text-primary align-middle"
          />
        </div>
      </div>
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
