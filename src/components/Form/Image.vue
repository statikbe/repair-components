<template>
  <r-form-field v-bind="fieldProps" v-on="fieldListeners">
    <template #default="{ id }">
      <div v-show="thumbnails.length" class="mb-3 w-80 max-w-full">
        <r-grid>
          <r-grid-item v-for="(url, index) in thumbnails" class="w-3/12" :key="index">
            <div
              class="relative aspect-w-1 aspect-h-1 bg-cover bg-no-repeat bg-center"
              :style="{
                backgroundImage: `url('${url}')`,
              }"
            >
              <a
                v-if="!disabled"
                href="javascript:void(0)"
                class="absolute inset-0 flex items-center justify-center text-white bg-error bg-opacity-0 text-opacity-0 hover:text-opacity-100 hover:bg-opacity-90 transition-all"
                @click="removeImage(index)"
              >
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
      <r-link v-if="!disabled" icon-before="mdiPlusCircle" @click="$refs.input.click()">
        {{ t('messages.form_image_add') }}
      </r-link>
    </template>
  </r-form-field>
</template>

<script>
import FormField from '../../mixins/FormField';
import { RGrid, RGridItem, RIcon, RLink } from '..';

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
