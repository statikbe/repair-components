<template>
  <r-form-field v-bind="fieldProps">
    <div v-if="editor" class="rounded-t border-2 border-solid border-b-0 border-gray-300 bg-gray-100">
      <slot name="toolbar" v-bind="{ editor }">
        <button
          type="button"
          class="text-base p-2 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 border-none mr-1 cursor-pointer"
          :class="{ 'bg-opacity-100': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <r-icon name="mdiFormatBold" />
        </button>
        <button
          type="button"
          class="text-base p-2 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 border-none mr-1 cursor-pointer"
          :class="{ 'bg-opacity-100': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <r-icon name="mdiFormatItalic" />
        </button>
        <button
          type="button"
          class="text-base p-2 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 border-none mr-1 cursor-pointer"
          :class="{ 'bg-opacity-100': editor.isActive('link') }"
          @click="setLink"
        >
          <r-icon name="mdiLink" />
        </button>
        <button
          type="button"
          class="text-base p-2 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 border-none mr-1 cursor-pointer"
          :class="{ 'bg-opacity-100': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <r-icon name="mdiFormatListBulleted" />
        </button>
        <button
          type="button"
          class="text-base p-2 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 border-none mr-1 cursor-pointer"
          :class="{ 'bg-opacity-100': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <r-icon name="mdiFormatListNumbered" />
        </button>
      </slot>
    </div>
    <editor-content :editor="editor" />
  </r-form-field>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';

import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';

import FormField from '../../mixins/FormField';

export default {
  name: 'r-editor',
  mixins: [FormField],

  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(this.value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit, Link],
      content: this.value,
      editorProps: {
        attributes: {
          class:
            'text-small block w-full rounded-b border-gray-300 border-2 border-solid bg-white px-3 py-2 box-border prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none',
        },
      },
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML());

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    });
  },

  beforeDestroy() {
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
