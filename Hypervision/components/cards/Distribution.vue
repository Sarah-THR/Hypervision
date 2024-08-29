<template>
  <v-card class="card-container" rounded="lg" elevation="3" height="115">
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:subtitle>
      <div class="subtitle" v-for="(subtitle, index) in subtitles" :key="index">
        {{ subtitle }}
      </div>
    </template>
  </v-card>
</template>
    
    <script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitles: {
      type: Array,
      default: "",
    },
  },
};
</script>
  
  <style scoped>
.card-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.subtitle {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 1rem;
}
</style>