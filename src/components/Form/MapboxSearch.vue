<template>
  <r-select
    v-bind="$attrs"
    :model-value="modelValue"
    :options="options"
    :loading="isLoading"
    label-by="label"
    track-by="data"
    searchable
    @update:modelValue="$emit('update:modelValue', $event)"
    @search-change="search"
  />
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'r-mapbox-search',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: {
      type: Object,
      default: () => null,
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    options: [],
    isLoading: false,
  }),
  computed: {
    mapboxQuery() {
      return Object.assign(
        {
          language: document.documentElement.lang.split('-')[0].toLowerCase(),
        },
        this.config
      );
    },
  },
  methods: {
    search(val) {
      if (!val) {
        return;
      }

      this.clear();
      this.isLoading = true;
      this.fetchOptionsDebounced(val);
    },
    clear() {
      this.options = [];
    },
    fetchOptionsDebounced(val) {
      clearTimeout(this._searchTimerId);
      this._searchTimerId = setTimeout(() => {
        this.fetchOptions(val);
      }, 500);
    },
    async fetchOptions(val) {
      const {
        data: { features },
      } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${val}.json?${qs.stringify(this.config)}`);

      this.options = features.map((entry) => {
        const label = entry.place_name;
        const data = JSON.stringify(entry);
        return { data, label };
      });

      this.isLoading = false;
    },
  },
};
</script>
