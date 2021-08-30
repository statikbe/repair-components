<template>
  <div class="repair-app font-base text-base text-main">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'r-app',
  provide() {
    return {
      $icons: this.$icons,
    };
  },
};
</script>
