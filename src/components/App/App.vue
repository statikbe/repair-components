<template>
  <div class="text-base repair-app font-base text-main">
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
