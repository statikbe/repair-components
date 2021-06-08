<template>
  <r-form-field v-bind="{ label }">
    <template #default="{}">
      <v-multiselect
        v-model="selected"
        :options="options"
        :loading="isLoading"
        :placeholder="null"
        @search-change="onSearchChange"
      >
        <template #option="{ option }">
          <div>{{ option.display_name }}</div>
        </template>
      </v-multiselect>
    </template>
  </r-form-field>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import VMultiselect from 'vue-multiselect';

import FormField from '../../mixins/FormField';

import 'vue-multiselect/dist/vue-multiselect.min.css';

delete axios.defaults.headers.common['Authorization'];

export default {
  name: 'r-form-location',
  mixins: [FormField],
  components: {
    VMultiselect,
  },
  data: () => ({
    options: [],
    selected: null,
    isLoading: false,
  }),
  created() {
    this.onSearchChange = debounce((keyword) => {
      this.isLoading = true;
      axios.get(`https://nominatim.openstreetmap.org/search?q=${keyword}`).then((options) => {
        this.options = options.reduce((uniqueArray, obj) => {
          if (obj.category !== 'boundary') return uniqueArray;
          const index = uniqueArray.findIndex((x) => x.display_name === obj.display_name);
          if (index === -1) {
            uniqueArray.push(obj);
          } else if (uniqueArray[index].importance < obj.importance) {
            uniqueArray.splice(index, 1, obj);
          }
          return uniqueArray;
        }, []);
        this.isLoading = false;
      });
    }, 500);
  },
};
</script>
