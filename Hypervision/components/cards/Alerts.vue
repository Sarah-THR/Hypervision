<template>
    <v-card class="mx-auto mb-5" elevation="3">
          <template v-slot:title> Alertes </template>
          <v-card-text>
            <v-col cols="12" md="12">
                <v-card
          v-for="(alert, index) in alerts"
          :key="index"
          elevation="0"
          class="alert-card"
        >
          <h4>RETARD</h4>
          <p class="ms-1">- {{ alert }}</p>
        </v-card>
            </v-col>
          </v-card-text>
        </v-card>
</template>

<script>
export default {
  props: {
    alerts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.alert-card{
    background-color: rgb(250, 212, 214);
    padding: 1rem;
    display: flex;
    align-items: baseline;
    color: #707070;
    margin-bottom: 1rem;
  }
</style>