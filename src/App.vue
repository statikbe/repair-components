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
        <r-tabs v-model="tab" :values="form.selectedLocales" class="my-6">
          <template #default="{ value }">
            <r-input
              label="Name of the initiative"
              v-bind="fieldProps(`name_${value}`)"
              v-on="fieldListeners(`name_${value}`)"
            />
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
            <r-radio
              label="Radio with quite a long label text with quite a long label text with quite a long label text with quite a long label text with quite a long label text with quite a long label text with quite a long label text "
              v-bind="fieldProps('radio')"
              v-on="fieldListeners('radio')"
              value="radio"
              tooltip="hallo"
            />
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
        <r-editor v-model="form.editorContent" label="Text" tooltip="hallo" info="hallo" optional />
        <r-select
          v-model="form.select"
          label="Select"
          label-by="name"
          track-by="value"
          :options="[
            { name: 'one', value: 1 },
            { name: 'two', value: 2 },
          ]"
          :multiple="true"
        />
        <r-form-collection v-model="form.notes" label="Collection">
          <template #default="{ item, updateItem }">
            <div>
              <small>{{ item.person }} - {{ item.date }}</small>
              <r-editor
                :model-value="item.text"
                required
                @update:model-value="
                  updateItem({
                    ...item,
                    text: $event,
                  })
                "
              />
            </div>
          </template>
        </r-form-collection>
        <r-gallery
          class="block max-w-xs"
          :items="[
            'http://placekitten.com/1000/800',
            'http://placekitten.com/800/1000',
            'http://placekitten.com/700/700',
          ]"
        />
      </r-form>
    </r-section>
    <r-section>
      <div class="flex justify-between">
        <r-button>Primary</r-button>
        <r-button ghost>Primary ghost</r-button>
        <r-button color="secondary">Secondary</r-button>
        <r-button color="secondary" ghost>Secondary ghost</r-button>
      </div>
    </r-section>
    <r-section color="primary">
      <div class="flex justify-between">
        <r-button contrast>Primary contrast</r-button>
        <r-button contrast ghost>Primary ghost contrast</r-button>
      </div>
    </r-section>
    <r-section color="secondary">
      <div class="flex justify-between">
        <r-button contrast color="secondary">Secondary contrast</r-button>
        <r-button contrast color="secondary" ghost>Secondary ghost contrast</r-button>
      </div>
    </r-section>
    <r-section>
      <div class="prose">
        <h1>Prose example</h1>
        <p>Let's try some things</p>
        <h2>Unordered list</h2>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <h2>Ordered list</h2>
        <ol>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ol>
      </div>
    </r-section>
  </r-app>
</template>

<script>
export default {
  data: () => ({
    tab: 'NL',
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
      editorContent: 'blaaa',
      select: [1, 2],
      notes: [
        {
          person: 'Kristof S.',
          date: '17/06/2021',
          text: '<p>Hallo daar</p>',
        },
      ],
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
