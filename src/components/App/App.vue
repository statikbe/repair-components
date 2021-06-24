<template>
  <div class="font-base text-base text-main">
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
