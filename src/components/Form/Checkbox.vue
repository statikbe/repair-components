<template>
  <div class="mb-1">
    <input
      type="checkbox"
      class="sr-only"
      :id="htmlId"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChange"
    />
    <label :for="htmlId" class="cursor-pointer">
      <div class="flex items-start" :class="{ 'opacity-60 cursor-not-allowed': disabled }">
        <span class="mr-2 flex-shrink-0 flex-grow-0 flex items-center mt-1" :class="{ 'text-huge': toggle }">
          <r-icon v-if="isChecked" :name="toggle ? 'mdiToggleSwitch' : 'mdiCheckboxMarked'" />
          <r-icon v-else :name="toggle ? 'mdiToggleSwitchOff' : 'mdiCheckboxBlankOutline'" />
        </span>
        <div>
          <span class="text-base font-medium mr-2 align-middle" v-html="label" />
          <r-icon
            v-if="tooltip"
            v-tooltip="tooltip"
            name="mdiInformationOutline"
            class="relative text-tiny align-middle"
          />
        </div>
      </div>
    </label>
  </div>
</template>

<script>
import FormField from '../../mixins/FormField';
import Uuid from '../../mixins/Uuid';

import { RIcon } from '../Icon';

export default {
  mixins: [FormField, Uuid],
  name: 'r-checkbox',
  components: {
    RIcon,
  },
  props: {
    value: {
      type: [String, Boolean, Number],
      default: () => true,
    },
    trueValue: {
      default: () => true,
    },
    falseValue: {
      default: () => false,
    },
    toggle: {
      type: Boolean,
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
