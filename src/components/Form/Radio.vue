<template>
  <div class="mb-1">
    <input type="radio" :id="htmlId" :value="value" :checked="isChecked" class="sr-only" @change="onChange" />
    <label :for="htmlId" class="cursor-pointer">
      <div class="flex items-start" :class="{ 'opacity-60 cursor-not-allowed': disabled }">
        <span class="mr-2 flex-shrink-0 flex-grow-0 flex items-center mt-1">
          <r-icon v-if="isChecked" name="mdiRadioboxMarked" />
          <r-icon v-else name="mdiRadioboxBlank" />
        </span>
        <div>
          <span class="text-base font-medium mr-2 align-middle" />
            <slot name="label" v-bind="{ label }">
              <div v-html="label"></div>
            </slot>
          </span>
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
