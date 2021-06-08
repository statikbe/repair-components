<template>
  <form action="">
    <slot name="default"></slot>
  </form>
</template>

<script>
import Uuid from '../../mixins/Uuid';

export default {
  name: 'r-form',
  mixins: [Uuid],
  computed: {
    id() {
      return `form-field-${this.uuid}`;
    },
  },
};
</script>

<style></style>
