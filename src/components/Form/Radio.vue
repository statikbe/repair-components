<template>
  <div class="mb-1">
    <label :for="htmlId" class="cursor-pointer">
      <div class="flex items-start" :class="{ 'opacity-60 cursor-not-allowed': disabled }">
        <input
          type="radio"
          :id="htmlId"
          :value="value"
          :checked="isChecked"
          class="sr-only custom-radio"
          @change="onChange"
        />
        <span
          class="flex items-center flex-grow-0 flex-shrink-0 mt-1 mr-2 text-large"
          :class="{ 'text-primary': isChecked }"
        >
          <r-icon v-if="isChecked" name="mdiRadioboxMarked" />
          <r-icon v-else name="mdiRadioboxBlank" />
        </span>
        <div>
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
  </div>
</template>

<style scoped>
.custom-radio:focus + span {
  box-shadow: inset 0 0 0 3px var(--repair-secondary, #9c7a97);
  border-radius: 9999px;
}
</style>

<script>
import FormField from '../../mixins/FormField';
import Uuid from '../../mixins/Uuid';

import { RIcon } from '../Icon';

export default {
  mixins: [FormField, Uuid],
  name: 'r-radio',
  components: {
    RIcon,
  },
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
