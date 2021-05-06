<template>
  <r-form-field>
    <template #default="{}">
      <!-- <v-multiselect v-model="selected" :options="options"> </v-multiselect> -->
    </template>
  </r-form-field>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

import { RFormField } from '..';

export default {
  name: 'r-mapbox-search',
  components: {
    RFormField,
    // VMultiselect,
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: {
      type: String,
      default: () => '',
    },
    accessToken: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    options: [],
    selected: null,
  }),
  methods: {
    onSearch(search) {
      if (!search.length) {
        this.options = [];
        return;
      }

      this.search(search, this);
    },
    search: debounce(async (search, _this) => {
      const { items } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${this.accessToken}`
      );

      _this.options = items;
    }, 350),
  },
};
</script>
