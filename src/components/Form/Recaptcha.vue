<template>
  <div class="mb-4">
    <v-recaptcha v-bind="{ loadRecaptchaScript: true, ...$attrs }" v-on="$listeners">
      <slot />
    </v-recaptcha>
  </div>
</template>

<script>
import VRecaptcha from 'vue-recaptcha';

export default {
  name: 'r-recaptcha',
  components: {
    VRecaptcha,
  },
};
</script>
