<template>
  <r-app>
    <r-section color="primary"> Repair Maps </r-section>
    <r-section class="bg-gray-100">
      <h2 class="text-h2 text-center">Step 1</h2>
      <p class="text-center">Contact information of the initiative</p>
      <r-link>Contact information of the initiative</r-link>
    </r-section>
    <r-section>
      <r-form class="'w-1/2 mx-auto">
        <div class="flex -m-2">
          <r-checkbox
            v-for="locale in availableLocales"
            v-model="form.selectedLocales"
            :value="locale"
            :key="locale"
            :label="locale"
            class="m-2"
          />
        </div>
        <r-tabs :tabs="form.selectedLocales" class="my-4">
          <template #default="{ activeTab }">
            <div v-for="locale in form.selectedLocales" :key="locale" v-show="activeTab === locale">
              <r-input
                label="Name of the initiative"
                v-bind="fieldProps(`name_${locale}`)"
                v-on="fieldListeners(`name_${locale}`)"
              />
            </div>
          </template>
        </r-tabs>
        <div class="flex flex-wrap -mx-2">
          <div class="px-2 w-100 md:w-8/12">
            <r-input label="Street" v-bind="fieldProps('street')" v-on="fieldListeners('street')" />
          </div>
          <div class="px-2 w-100 md:w-4/12">
            <r-input label="Number" v-bind="fieldProps('number')" v-on="fieldListeners('number')" />
          </div>
          <div class="px-2 w-100 md:w-4/12">
            <r-input label="Zip" v-bind="fieldProps('zip')" v-on="fieldListeners('zip')" />
          </div>
          <div class="px-2 w-100 md:w-8/12">
            <r-input label="City" v-bind="fieldProps('city')" v-on="fieldListeners('city')" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-input label="Country" v-bind="fieldProps('country')" v-on="fieldListeners('country')" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-input label="Email" v-bind="fieldProps('email')" v-on="fieldListeners('email')" />
          </div>
          <div class="px-2 w-100 md:w-6/12">
            <r-input label="Mobile" v-bind="fieldProps('mobile')" v-on="fieldListeners('mobile')" />
          </div>
          <div class="px-2 w-100 md:w-6/12">
            <r-input label="Phone" v-bind="fieldProps('phone')" v-on="fieldListeners('phone')" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-input label="Website" v-bind="fieldProps('website')" v-on="fieldListeners('website')" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-input label="Facebook" v-bind="fieldProps('facebook')" v-on="fieldListeners('facebook')" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-input label="Instagram" v-bind="fieldProps('instagram')" v-on="fieldListeners('instagram')" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-input label="LinkedIn" v-bind="fieldProps('linkedin')" v-on="fieldListeners('linkedin')" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-radio label="Radio" v-bind="fieldProps('radio')" v-on="fieldListeners('radio')" value="radio" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-checkbox
              label="Checkbox"
              v-bind="fieldProps('checkbox')"
              v-on="fieldListeners('checkbox')"
              value="checkbox"
            />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-form-image label="Images" v-bind="fieldProps('images')" v-on="fieldListeners('images')" />
          </div>
        </div>
        <div class="flex">
          <r-button>Previous</r-button>
          <r-button class="ml-auto">Next</r-button>
        </div>
        <button type="button" @click="$modal.show('modal')">modal</button>
        <r-modal name="modal">
          <r-editor label="Text" tooltip="hallo" info="hallo" optional />
        </r-modal>
      </r-form>
    </r-section>
    <r-section>
      <r-button>Default</r-button>
      <r-button ghost>Default ghost</r-button>
      <r-button primary>Primary</r-button>
      <r-button primary ghost>Primary ghost</r-button>
      <r-button secondary>Secondary</r-button>
      <r-button secondary ghost>Secondary ghost</r-button>
    </r-section>
    <r-section primary>
      <r-button contrast>Default contrast</r-button>
      <r-button contrast ghost>Default ghost contrast</r-button>
      <r-button contrast primary>Primary contrast</r-button>
      <r-button contrast primary ghost>Primary ghost contrast</r-button>
    </r-section>
    <r-section secondary>
      <r-button contrast>Default contrast</r-button>
      <r-button contrast ghost>Default ghost contrast</r-button>
      <r-button contrast secondary>Secondary contrast</r-button>
      <r-button contrast secondary ghost>Secondary ghost contrast</r-button>
    </r-section>
  </r-app>
</template>

<script>
export default {
  data: () => ({
    form: {
      selectedLocales: ['NL'],
      name_NL: 'Statik',
      name_FR: 'Statik en Français',
      name_EN: 'Statik in English',
      name_DE: 'STATIK AUF DEUTSCH',
      street: 'Vital Decosterstraat',
      number: '67a',
      zip: '3000',
      city: 'Leuven',
      country: 'Belgium',
      email: 'info@statik.be',
      mobile: '',
      phone: '',
      website: 'https://www.statik.be/',
      facebook: 'statikbe',
      instagram: 'statikbe',
      linkedin: 'statikbe',
      images: null,
      radio: 'radio',
      checkbox: false,
    },
  }),
  computed: {
    availableLocales() {
      return ['NL', 'FR', 'EN', 'DE'];
    },
  },
  created() {
    this.originalForm = { ...this.form };
  },
  methods: {
    resetValue(key) {
      this.form[key] = this.originalForm[key];
    },
    fieldProps(key) {
      return {
        resettable: this.form[key] !== this.originalForm[key],
        modelValue: this.form[key],
      };
    },
    fieldListeners(key) {
      return {
        'update:modelValue': (modelValue) => {
          this.form[key] = modelValue;
        },
        'reset': () => {
          this.form[key] = this.originalForm[key];
        },
      };
    },
  },
};
</script>
