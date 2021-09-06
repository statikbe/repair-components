<template>
  <div class="mb-4">
    <slot name="label" v-bind="{ id, canReset, required, label, tooltip }">
      <label v-if="label" :for="id" class="cursor-pointer">
        <span class="text-base font-bold mr-2">{{ label }}</span>
        <r-icon
          v-if="tooltip"
          v-tooltip="tooltip"
          name="mdiInformationOutline"
          class="relative text-tiny mr-2 align-middle"
        />
        <small v-if="!required" class="opacity-50 align-baseline mr-2">{{ $t('form_field_optional') }}</small>
      </label>
      <a
        v-if="canReset"
        href="javascript:void(0)"
        class="text-small ml-a"
        @click="$emit('reset')"
        v-tooltip="$t('form_field_reset')"
      >
        <r-icon name="mdiUndo" />
      </a>
    </slot>
    <div v-if="info" v-html="info" class="text-small opacity-50" />
    <div class="mt-1">
      <slot name="default" v-bind="{ id }"></slot>
    </div>
    <div v-if="errors" class="text-small text-error font-bold mt-1" v-html="formattedErrors"></div>
  </div>
</template>

<script>
import Uuid from '../../mixins/Uuid';

import { RIcon } from '../Icon';

export default {
  name: 'r-form-field',
  mixins: [Uuid],
  components: { RIcon },
  props: {
    label: {
      type: String,
      default: () => null,
    },
    errors: {
      type: [String, Array],
      default: () => '',
    },
    canReset: {
      type: Boolean,
      default: () => false,
    },
    required: {
      type: Boolean,
      default: () => false,
    },
    info: {
      type: String,
      default: () => null,
    },
    tooltip: {
      type: String,
      default: () => null,
    },
  },
  computed: {
    id() {
      return `form-field-${this.uuid}`;
    },
    formattedErrors() {
      return Array.isArray(this.errors) ? this.errors.join('<br/>') : this.errors;
    },
  },
};
</script>
