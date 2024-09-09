<template>
  <v-card class="card-container" rounded="lg" elevation="3" min-height="115">
    <template v-slot:title>
      {{ title }}
      <span :style="percentStyle">
        <v-icon v-if="colorPercent === 'green'" icon="mdi-chevron-up"></v-icon>
        <v-icon
          v-else-if="colorPercent === 'red'"
          icon="mdi-chevron-down"
        ></v-icon>
        {{ percent }}
      </span>
    </template>
    <template v-slot:subtitle>
      <div class="subtitle">{{ subtitle }}</div>
    </template>
    <template v-slot:prepend>
      <div class="icon-wrapper" :style="iconStyles">
        <v-icon
          :icon="icon"
          class="icon"
          :color="iconColor"
          size="25px"
        ></v-icon>
      </div>
    </template>
  </v-card>
</template>
  
<script>
export default {
  props: {
    iconBackgroundColor: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    colorPercent: {
      type: String,
      default: "",
    },
    percent: {
      type: String,
      default: "0.00%",
    },
  },
  computed: {
    iconStyles() {
      return {
        backgroundColor: this.iconBackgroundColor,
        border: `1px solid ${this.iconBackgroundColor}`,
        borderRadius: "8px",
        padding: "0.5rem",
      };
    },
    percentStyle() {
      return {
        fontSize: "1rem",
        marginLeft: "8px",
        color: this.colorPercent,
      };
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