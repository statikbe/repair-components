<template>
  <div class="mb-4">
    <slot name="label" v-bind="{ id, resettable, required, label, tooltip }">
      <label :for="id" class="cursor-pointer">
        <span v-if="label" class="text-base font-medium mr-2">{{ label }}</span>
        <r-icon
          v-if="tooltip"
          v-tooltip="tooltip"
          name="mdiInformationOutline"
          class="relative text-tiny text-primary mr-2 align-middle"
        />
        <small v-if="!required" class="text-gray-400 align-baseline mr-2">{{ t('messages.optional') }}</small>
      </label>
      <span v-if="resettable" class="text-small">
        (<a href="javascript:void(0)" class="text-gray-700" @click="$emit('reset')">reset</a>)
      </span>
    </slot>
    <div v-if="info" v-html="info" class="text-small text-gray-400" />
    <div class="mt-1">
      <slot name="default" v-bind="{ id }"></slot>
    </div>
    <div v-if="errors" class="text-tiny text-error font-bold mt-1" v-html="formattedErrors"></div>
  </div>
</template>

<script>
import Uuid from '../../mixins/Uuid';

export default {
  name: 'r-form-field',
  mixins: [Uuid],
  props: {
    label: {
      type: String,
      required: true,
    },
    errors: {
      type: [String, Array],
      default: () => '',
    },
    resettable: {
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
