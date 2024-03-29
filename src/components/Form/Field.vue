<template>
  <div class="mb-4">
    <slot name="label" v-bind="{ id, canReset, required, label, tooltip }">
      <div class="flex">
        <label v-if="label" :for="id" class="cursor-pointer form__label">
          <span class="mr-2 text-base font-bold">{{ label }}</span>
          <r-icon
            v-if="tooltip"
            v-tooltip="{
              content: tooltip,
              trigger: 'hover click',
            }"
            name="mdiInformationOutline"
            class="relative mr-2 align-middle text-tiny focus:ring-2 focus:ring-primary-dark focus:outline-none focus:rounded"
          />
          <small v-if="!required" class="mr-2 align-baseline opacity-70 message-optional">{{
            $t('form_field_optional')
          }}</small>
        </label>
        <a
          v-if="canReset"
          href="javascript:void(0)"
          class="ml-auto text-small"
          @click="$emit('reset')"
          v-tooltip="$t('form_field_reset')"
        >
          <r-icon name="mdiUndo" />
        </a>
      </div>
    </slot>
    <div v-if="info" v-html="info" class="opacity-70 text-small" />
    <div class="mt-1">
      <slot name="default" v-bind="{ id }"></slot>
    </div>
    <div v-if="errors" class="mt-1 font-bold text-small text-error" v-html="formattedErrors"></div>
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
      type: [String, Object],
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
