<template>
  <v-tabs bg-color="transparent" fixed-tabs class="mb-5">
    <v-tab v-for="(option, index) in options" :key="index">
      {{ option.text }}
    </v-tab>
  </v-tabs>
</template>
  
  <script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  max-width: none !important;
}

.v-tab__slider {
  background: #d50000 !important;
}

.v-tab-item--selected {
  color: #d50000 !important;
}
</style>