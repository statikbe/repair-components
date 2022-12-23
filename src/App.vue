<template>
  <r-app>
    <r-section>
      <h1 class="text-h1">Repair Components</h1>
    </r-section>
    <r-section class="bg-gray-100">
      <h2 class="antialiased text-center text-h2">Step 1</h2>
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
            <r-input
              label="Mobile"
              v-bind="fieldProps('mobile')"
              v-on="fieldListeners('mobile')"
              placeholder="Placeholder example"
            />
          </div>
          <div class="px-2 w-100 md:w-6/12">
            <r-input
              label="Phone"
              v-bind="fieldProps('phone')"
              v-on="fieldListeners('phone')"
              required
              :errors="['Error 1', 'Error 2']"
            />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-input
              label="Website"
              v-bind="fieldProps('website')"
              v-on="fieldListeners('website')"
              tooltip="Tooltip voorbeeld"
            />
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
            <r-input
              label="Required test"
              v-bind="fieldProps('test')"
              v-on="fieldListeners('test')"
              required
              errors="Dit veld is verplicht."
            />
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
              v-model="form.checkbox"
              label="Checkbox with quite a long label text with quite a long label text with quite a long label text with quite a long label text with quite a long label text with quite a long label text with quite a long label text "
            />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-checkbox v-model="form.checkbox" label="Checkbox" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-checkbox v-model="form.checkbox" label="Toggle" toggle />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-form-image label="Image" v-bind="fieldProps('image')" v-on="fieldListeners('image')" />
          </div>
          <div class="px-2 w-100 md:w-7/12">
            <r-form-image label="Images" v-bind="fieldProps('images')" v-on="fieldListeners('images')" multiple />
          </div>
        </div>
        <r-editor v-model="form.editorContent" label="Text" tooltip="hallo" info="Extra info?" optional />
        <r-select
          v-model="form.selectNoGroup"
          label="Select with no categories"
          label-by="name"
          track-by="value"
          searchable="searchable"
          :placeholder="`Typ om te zoeken`"
          :options="[
            { name: 'Vue', value: 'vue' },
            { name: 'React', value: 'react' },
            { name: 'Angular', value: 'angular' },
            { name: 'Svelte', value: 'svelte' },
            { name: 'Rails', value: 'rails' },
            { name: 'Sinatra', value: 'sinatra' },
            { name: 'Laravel', value: 'laravel' },
            { name: 'Cake PHP', value: 'cakephp' },
            { name: 'Symfony', value: 'symfony' },
            { name: 'Yii', value: 'yii' },
          ]"
          :multiple="false"
        />
        <r-select
          v-model="form.selectGroup"
          label="Select with categories"
          label-by="name"
          track-by="value"
          group-values="libs"
          group-label="language"
          searchable="searchable"
          :placeholder="`Typ om te zoeken`"
          :options="[
            {
              language: 'Javascript',
              libs: [
                { name: 'Vue JS', value: 'vue' },
                { name: 'Svelte', value: 'svelte' },
                { name: 'React', value: 'react' },
                { name: 'Alpine JS', value: 'alpinejs' },
              ],
            },
            {
              language: 'Ruby',
              libs: [
                { name: 'Rails', value: 'rails' },
                { name: 'Sinatra', value: 'sinatra' },
              ],
            },
            {
              language: 'Php',
              libs: [
                { name: 'Laravel', value: 'laravel' },
                { name: 'Symfony', value: 'symfony' },
                { name: 'Cake PHP', value: 'cakephp' },
              ],
            },
          ]"
          :multiple="false"
          :group-select="false"
        />
        <r-form-collection v-model="form.notes" label="Collection">
          <template #default="{ item, updateItem, disabled }">
            <div>
              <small>{{ item.person }} - {{ item.date }}</small>
              <r-editor
                :model-value="item.text"
                required
                :disabled="disabled"
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
        <div class="mt-4">
          <r-checkbox
            v-model="form.checkboxTest"
            label="Checkbox Required test"
            required
            :errors="['Dit veld is verplicht', 'Andere validatie']"
          />
          <r-checkbox
            v-model="form.checkboxTest"
            label="Checkbox Required test"
            required
            toggle
            errors="Dit veld is verplicht"
          />
          <div class="mt-6">
            <r-button color="secondary">Submit</r-button>
          </div>
        </div>
      </r-form>
    </r-section>
    <r-section>
      <div class="flex justify-between">
        <r-button
          v-tooltip="
            'Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long. Tooltip very long.'
          "
          >Primary</r-button
        >
        <r-button ghost>Primary ghost</r-button>
        <r-button color="secondary">Secondary</r-button>
        <r-button color="secondary" ghost>Secondary ghost</r-button>
      </div>
    </r-section>
    <r-section>
      <div class="flex justify-between">
        <r-button disabled>Primary</r-button>
        <r-button disabled ghost>Primary ghost</r-button>
        <r-button disabled color="secondary">Secondary</r-button>
        <r-button disabled color="secondary" ghost>Secondary ghost</r-button>
      </div>
    </r-section>
    <r-section>
      <div class="flex justify-between">
        <r-button loading>Primary</r-button>
        <r-button loading ghost>Primary ghost</r-button>
        <r-button loading color="secondary">Secondary</r-button>
        <r-button loading color="secondary" ghost>Secondary ghost</r-button>
      </div>
    </r-section>
    <r-section color="primary">
      <div class="flex justify-between">
        <r-button contrast>Primary contrast</r-button>
        <r-button contrast ghost>Primary ghost contrast</r-button>
      </div>
    </r-section>
    <r-section color="primary">
      <div class="flex justify-between">
        <r-button disabled contrast>Primary contrast</r-button>
        <r-button disabled contrast ghost>Primary ghost contrast</r-button>
      </div>
    </r-section>
    <r-section color="primary">
      <div class="flex justify-between">
        <r-button loading contrast>Primary contrast</r-button>
        <r-button loading contrast ghost>Primary ghost contrast</r-button>
      </div>
    </r-section>
    <r-section color="secondary">
      <div class="flex justify-between">
        <r-button contrast color="secondary">Secondary contrast</r-button>
        <r-button contrast color="secondary" ghost>Secondary ghost contrast</r-button>
      </div>
    </r-section>
    <r-section color="secondary">
      <div class="flex justify-between">
        <r-button disabled contrast color="secondary">Secondary contrast</r-button>
        <r-button disabled contrast color="secondary" ghost>Secondary ghost contrast</r-button>
      </div>
    </r-section>
    <r-section color="secondary">
      <div class="flex justify-between">
        <r-button loading contrast color="secondary">Secondary contrast</r-button>
        <r-button loading contrast color="secondary" ghost>Secondary ghost contrast</r-button>
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
    <r-section>
      <r-pagination v-model="page" :pages="78" />
    </r-section>
    <r-cookies policy-url="/cookies" />
  </r-app>
</template>

<script>
export default {
  data: () => ({
    tab: 'NL',
    page: 2,
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
      image: 'http://placekitten.com/700/700',
      images: [],
      radio: 'radio',
      checkbox: false,
      editorContent: 'blaaa',
      selectNoGroup: [],
      selectGroup: [],
      checkboxTest: false,
      test: '',
      notes: [
        {
          person: 'Kristof S.',
          date: '17/06/2021',
          text: '<p>Hallo daar</p>',
          blaaa: 'vghtawdgjyakw',
          disabled: true,
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
        resetValue: this.originalForm[key],
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
