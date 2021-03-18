<template>
  <div class="p-3" :class="[color && `bg-${color}-default text-${color}-contrast`, `py-${size}`]">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "r-section",
  props: {
    color: {
      type: String,
      default: () => null,
    },
    size: {
      type: Number,
      default: () => 3,
    },
  },
};
</script>
