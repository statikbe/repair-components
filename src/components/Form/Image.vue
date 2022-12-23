<template>
  <r-form-field v-bind="fieldProps" v-on="fieldListeners">
    <template #default="{ id }">
      <div v-show="thumbnails.length" class="max-w-full mb-3 w-80">
        <r-grid>
          <r-grid-item v-for="(url, index) in thumbnails" class="w-3/12" :key="index">
            <div
              class="relative bg-center bg-no-repeat bg-cover aspect-w-1 aspect-h-1"
              :style="{
                backgroundImage: `url('${url}')`,
              }"
            >
              <a
                v-if="!disabled"
                href="javascript:void(0)"
                class="absolute inset-0 flex items-center justify-center text-white text-opacity-0 transition-all bg-opacity-0 bg-error hover:text-opacity-100 hover:bg-opacity-90"
                @click="removeImage(index)"
              >
                <span class="sr-only">{{ $t('form_image_remove') }}</span>
                <r-icon name="mdiTrashCan" />
              </a>
            </div>
          </r-grid-item>
        </r-grid>
        <input
          type="file"
          :id="id"
          class="sr-only"
          ref="input"
          :multiple="multiple"
          :disabled="disabled"
          @change="handleChange"
        />
      </div>
      <r-link
        href="javascript:void(0)"
        v-if="!disabled"
        icon-before="mdiPlusCircle"
        role="button"
        @click="$refs.input.click()"
      >
        {{ $t('form_image_add') }}
      </r-link>
    </template>
  </r-form-field>
</template>

<script>
import FormField from '../../mixins/FormField';

import { RGrid, RGridItem } from '../Grid';
import { RIcon } from '../Icon';
import { RLink } from '../Link';

export default {
  name: 'r-form-image',
  mixins: [FormField],
  components: { RGrid, RGridItem, RIcon, RLink },
  props: {
    multiple: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    thumbnails() {
      const { modelValue, multiple } = this;

      if (multiple) {
        return modelValue;
      } else {
        return modelValue ? [modelValue] : [];
      }
    },
  },
  methods: {
    async handleChange(event) {
      const promises = [];

      event.target.files.forEach((file) => {
        promises.push(this.toBase64(file));
      });

      const newFiles = await Promise.all(promises);
      const newValue = this.multiple ? [...this.modelValue, ...newFiles] : newFiles[0];

      this.$emit('update:modelValue', newValue);
    },

    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },

    removeImage(index) {
      let newValue = this.modelValue;

      if (!window.confirm('Would you like to remove this image?')) return;

      if (this.multiple) {
        newValue.splice(index, 1);
      } else {
        newValue = null;
      }

      this.$emit('update:modelValue', newValue);
    },
  },
};
</script>
