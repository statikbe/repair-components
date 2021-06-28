<template>
  <div
    id="recaptcha"
    class="g-recaptcha"
    :data-sitekey="sitekey"
    data-callback="onRecaptchaSubmit"
    data-expired-callback="onRecaptchaExpire"
    data-error-callback="onRecaptchaError"
    data-size="invisible"
    ref="recaptcha"
  ></div>
</template>

<script>
import FormField from '../../mixins/FormField';

export default {
  name: 'r-recaptcha',
  mixins: [FormField],
  props: {
    sitekey: {
      type: String,
      default: null,
    },
  },
  created() {
    if (!window.grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';

      document.body.appendChild(script);

      window.onRecaptchaExpire = () => {
        window.dispatchEvent(new Event('recaptcha:expire'));
      };

      window.onRecaptchaSubmit = (token) => {
        window.dispatchEvent(new CustomEvent('recaptcha:submit', token));
      };

      window.onRecaptchaError = () => {
        window.dispatchEvent(new Event('recaptcha:error'));
      };
    }

    window.addEventListener('recaptcha:submit', (token) => {
      this.$emit('update:modelValue', token);
      this.$emit('submit');
    });

    window.addEventListener('recaptcha:expire', () => {
      this.$refs.recaptcha.reset();
      this.$emit('update:modelValue', null);
      this.$emit('expire');
    });

    window.addEventListener('recaptcha:error', () => {
      this.$refs.recaptcha.reset();
      this.$emit('update:modelValue', null);
      this.$emit('error');
    });
  },
};
</script>
