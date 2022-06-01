<template>
  <div>
    <r-modal name="cookie-banner" :dismissable="isCookieSet" maxWidth="450">
      <h2 class="antialiased text-h2 text-primary">{{ $t('cookie_banner_title') }}</h2>
      <p class="mb-6">
        {{ $t('cookie_banner_text') }}
      </p>
      <div class="flex flex-col space-y-2">
        <div class="mb-1">
          <r-button class="" @click.native="acceptCookies">{{ $t('cookie_banner_accept') }}</r-button>
        </div>
        <div>
          <r-link class="font-normal no-underline text-[16px]" @click.native="acceptEssentialCookies">
            {{ $t('cookie_banner_accept_necessary') }}
          </r-link>
        </div>
        <div>
          <r-link class="font-normal no-underline text-[16px]" @click="$modal.show('cookie-settings')">
            {{ $t('cookie_banner_preferences') }}
          </r-link>
        </div>
      </div>
    </r-modal>
    <r-modal name="cookie-settings">
      <h2 class="antialiased text-h2 text-primary">{{ $t('cookie_settings_title') }}</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="mb-6" v-html="$t('cookie_settings_text', { policyUrl })"></p>
      <div class="mb-6">
        <r-checkbox v-model="settings.essential" :label="$t('cookies_essential_label')" toggle disabled />
        <p class="mb-6">{{ $t('cookies_essential_text') }}</p>
        <r-checkbox v-model="settings.functional" :label="$t('cookies_functional_label')" toggle disabled />
        <p class="mb-6">{{ $t('cookies_functional_text') }}</p>
        <r-checkbox v-model="settings.analytics" :label="$t('cookies_analytics_label')" toggle />
        <p class="mb-6">{{ $t('cookies_analytics_text') }}</p>
        <r-checkbox v-model="settings.marketing" :label="$t('cookies_marketing_label')" toggle />
        <p class="mb-6">{{ $t('cookies_marketing_text') }}</p>
      </div>
      <r-button @click.native="handleSettingsSave">{{ $t('cookie_settings_save') }}</r-button>
    </r-modal>
  </div>
</template>

<script>
export default {
  name: 'r-cookies',
  props: {
    cookieName: {
      type: String,
      default: () => '__cookie_consent',
    },
    policyUrl: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isDismissable: false,
    settings: {
      essential: true,
      functional: true,
      marketing: false,
      analytics: false,
    },
  }),
  computed: {
    isCookieSet() {
      return this.isDismissable || this.$cookies.get(this.cookieName) !== null;
    },
  },
  watch: {
    settings: {
      deep: true,
      handler(settings) {
        this.handleSettingsUpdate(settings);
      },
    },
  },
  mounted() {
    if (!this.isCookieSet && !window.location.pathname.includes(this.policyUrl)) {
      this.$modal.show('cookie-banner');
    }
  },
  methods: {
    acceptCookies() {
      this.setCookie(true);
      this.closeAll();
    },
    acceptEssentialCookies() {
      this.setCookie(false);
      this.closeAll();
    },
    handleSettingsUpdate(settings) {
      const s = settings || this.settings;
      let cookieValue;

      if (s.analytics && s.marketing) {
        cookieValue = true;
      } else if (s.analytics) {
        cookieValue = 3;
      } else if (s.marketing) {
        cookieValue = 4;
      } else {
        cookieValue = false;
      }

      this.setCookie(cookieValue);
    },
    handleSettingsSave() {
      this.handleSettingsUpdate();
      this.closeAll();
    },
    setCookie(value) {
      this.$cookies.set(this.cookieName, value, '365d');

      this.isDismissable = true;

      if (window.dataLayer) {
        window.dataLayer.push({ event: 'cookie_refresh' });
      }
    },
    closeAll() {
      setTimeout(() => {
        this.$modal.hide('cookie-settings');
        this.$modal.hide('cookie-banner');
      }, 100);
    },
  },
};
</script>
