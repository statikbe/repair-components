<template>
  <r-form-field v-bind="fieldProps">
    <bubble-menu v-if="editor" :editor="editor">
      <div class="bg-white p-1 shadow-md">
        <button
          type="button"
          class="text-base w-8 p-1 bg-gray-100 hover:bg-gray-300 rounded border-none mr-1 cursor-pointer"
          :class="{ 'bg-gray-300': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <r-icon name="mdiFormatBold" />
        </button>
        <button
          type="button"
          class="text-base w-8 p-1 bg-gray-100 hover:bg-gray-300 rounded border-none cursor-pointer"
          :class="{ 'bg-gray-300': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <r-icon name="mdiFormatItalic" />
        </button>
      </div>
    </bubble-menu>
    <editor-content :editor="editor" />
  </r-form-field>
</template>

<script>
import { Editor, EditorContent, BubbleMenu } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';

import FormField from '../../mixins/FormField';

export default {
  name: 'r-form-wysiwyg',
  mixins: [FormField],

  components: {
    BubbleMenu,
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
      extensions: [StarterKit],
      content: this.value,
      editorProps: {
        attributes: {
          class:
            'text-small block w-full rounded border-gray-300 border-2 border-solid bg-white px-3 py-2 box-border prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none',
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
};
</script>
