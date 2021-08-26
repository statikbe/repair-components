<template>
  <div class="mb-4">
    <slot name="label" v-bind="{ id, canReset, required, label, tooltip }">
      <label :for="id" class="cursor-pointer">
        <span v-if="label" class="text-base font-bold mr-2">{{ label }}</span>
        <r-icon
          v-if="tooltip"
          v-tooltip="tooltip"
          name="mdiInformationOutline"
          class="relative text-tiny text-primary mr-2 align-middle"
        />
        <small v-if="!required" class="text-gray-500 align-baseline mr-2">{{ t('messages.optional') }}</small>
      </label>
      <a
        v-if="canReset"
        href="javascript:void(0)"
        class="text-small ml-a text-primary"
        @click="$emit('reset')"
        v-tooltip="t('messages.reset')"
      >
        <r-icon name="mdiUndo" />
      </a>
    </slot>
    <div v-if="info" v-html="info" class="text-small text-gray-500" />
    <div class="mt-1">
      <slot name="default" v-bind="{ id }"></slot>
    </div>
    <div v-if="errors" class="text-small text-error font-bold mt-1" v-html="formattedErrors"></div>
  </div>
</template>

<script>
import Uuid from '../../mixins/Uuid';

import { RIcon } from '..';

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
