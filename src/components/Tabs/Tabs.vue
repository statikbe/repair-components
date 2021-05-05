<template>
  <div>
    <div :class="$prefix('relative z-10 border-b-1')">
      <button
        type="button"
        v-for="tab in tabs"
        :key="tab"
        :class="[
          $prefix('p-0 border-1 border-b-0 border-solid cursor-pointer'),
          dynamicClasses(tab),
        ]"
        @click="activeTab = tab"
      >
        <div
          :class="[
            $prefix(
              'p-2 border-0 border-b-1 border-solid min-w-[100px] text-small'
            ),
            isTabActive(tab)
              ? $prefix('border-white')
              : $prefix('border-gray-300'),
          ]"
        >
          {{ tab }}
        </div>
      </button>
    </div>
    <div
      :class="
        $prefix(
          'relative top-[-1px] bg-white p-4 border-1 border-solid border-gray-300'
        )
      "
    >
      <slot v-bind="{ activeTab }" />
    </div>
  </div>
</template>

<script>
export default {
  name: "r-tabs",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    activeTab: null,
  }),
  watch: {
    tabs(tabs) {
      if (!tabs.includes(this.activeTab)) {
        this.resetTabs();
      }
    },
  },
  created() {
    this.resetTabs();
  },
  methods: {
    resetTabs() {
      this.activeTab = this.tabs[0];
    },
    isTabActive(tab) {
      return this.activeTab === tab;
    },
    dynamicClasses(tab) {
      const { activeTab, $prefix } = this;

      if (activeTab === tab) {
        return $prefix(`bg-[transparent] border-gray-300`);
      }

      return $prefix(`bg-gray-100 border-gray-100`);
    },
  },
};
</script>
