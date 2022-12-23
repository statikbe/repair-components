<template>
  <r-form-field v-bind="fieldProps" v-on="fieldListeners">
    <div v-if="editor" class="bg-gray-100 border-2 border-b-0 border-gray-300 border-solid rounded-t">
      <slot name="toolbar" v-bind="{ editor }">
        <button
          type="button"
          class="p-2 mr-1 text-base bg-gray-300 bg-opacity-0 border-none cursor-pointer hover:bg-opacity-100 focus:ring-2 focus:ring-primary focus:outline-none"
          :class="{ 'bg-opacity-100': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <r-icon name="mdiFormatBold" />
          <span class="sr-only">Bold</span>
        </button>
        <button
          type="button"
          class="p-2 mr-1 text-base bg-gray-300 bg-opacity-0 border-none cursor-pointer hover:bg-opacity-100 focus:ring-2 focus:ring-primary focus:outline-none"
          :class="{ 'bg-opacity-100': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <r-icon name="mdiFormatItalic" />
          <span class="sr-only">Italic</span>
        </button>
        <button
          type="button"
          class="p-2 mr-1 text-base bg-gray-300 bg-opacity-0 border-none cursor-pointer hover:bg-opacity-100 focus:ring-2 focus:ring-primary focus:outline-none"
          :class="{ 'bg-opacity-100': editor.isActive('link') }"
          @click="setLink"
        >
          <r-icon name="mdiLink" />
          <span class="sr-only">Link</span>
        </button>
        <button
          type="button"
          class="p-2 mr-1 text-base bg-gray-300 bg-opacity-0 border-none cursor-pointer hover:bg-opacity-100 focus:ring-2 focus:ring-primary focus:outline-none"
          :class="{ 'bg-opacity-100': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <r-icon name="mdiFormatListBulleted" />
          <span class="sr-only">Bulleted List</span>
        </button>
        <button
          type="button"
          class="p-2 mr-1 text-base bg-gray-300 bg-opacity-0 border-none cursor-pointer hover:bg-opacity-100 focus:ring-2 focus:ring-primary focus:outline-none"
          :class="{ 'bg-opacity-100': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <r-icon name="mdiFormatListNumbered" />
          <span class="sr-only">Numbered List</span>
        </button>
      </slot>
    </div>
    <editor-content v-if="!disabled" :editor="editor" />
    <div v-else v-html="modelValue" :class="`${fieldClass} prose`" />
  </r-form-field>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';

import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';

import FormField from '../../mixins/FormField';

import { RIcon } from '../Icon';

export default {
  name: 'r-editor',
  mixins: [FormField],

  components: {
    EditorContent,
    RIcon,
  },

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    modelValue(modelValue) {
      // HTML
      const isSame = this.editor.getHTML() === modelValue;

      // JSON
      // const isSame = this.editor.getJSON().toString() === modelValue.toString()

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(this.modelValue, false);
    },
  },

  mounted() {
    if (this.disabled) return;

    this.editor = new Editor({
      extensions: [StarterKit, Link],
      content: this.modelValue,
      editorProps: {
        attributes: {
          class: `${this.fieldClass} prose focus:outline-none rounded-t-none`,
        },
      },
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getHTML());

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    });
  },

  beforeDestroy() {
    if (this.disabled) return;
    this.editor.destroy();
  },

  methods: {
    setLink() {
      const url = window.prompt('URL');

      this.editor.chain().focus().setLink({ href: url }).run();
    },
  },
};
</script>
