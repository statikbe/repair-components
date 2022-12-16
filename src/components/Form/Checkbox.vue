<template>
  <div class="mb-1">
    <input
      type="checkbox"
      class="sr-only"
      :id="htmlId"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :required="required"
      @change="onChange"
    />
    <label :for="htmlId" class="cursor-pointer">
      <div
        class="flex"
        :class="{ 'opacity-60 cursor-not-allowed': disabled, 'items-center': toggle, 'items-start': !toggle }"
      >
        <span
          class="flex items-center flex-grow-0 flex-shrink-0"
          :class="{ 'text-[32px] mr-2': toggle, 'mt-1 mr-2': !toggle, 'text-primary': isChecked }"
        >
          <r-icon v-if="isChecked" :name="toggle ? 'mdiToggleSwitch' : 'mdiCheckboxMarked'" />
          <r-icon
            v-else
            :name="toggle ? 'mdiToggleSwitchOff' : 'mdiCheckboxBlankOutline'"
            :class="{ 'text-error': errors && !toggle }"
          />
        </span>
        <div :class="{ flex: toggle }">
          <span class="mr-2 text-base font-medium align-middle">
            <slot name="label" v-bind="{ label }">
              <span v-html="label"></span>
            </slot>
          </span>
          <r-icon
            v-if="tooltip"
            v-tooltip="tooltip"
            name="mdiInformationOutline"
            class="relative align-middle text-tiny"
          />
        </div>
      </div>
    </label>
    <div v-if="errors" class="mt-1 font-bold text-small text-error" v-html="formattedErrors"></div>
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
    formattedErrors() {
      return Array.isArray(this.errors) ? this.errors.join('<br/>') : this.errors;
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
