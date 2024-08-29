<template>
  <v-card class="mx-auto my-8" elevation="3" :min-height="280">
    <v-card-item>
      <v-card-title class="text-center"> CRM/SAGE </v-card-title>
      <v-card-subtitle class="text-red ms-8"
        ><h2>{{ totalAmount }} €</h2></v-card-subtitle
      >
    </v-card-item>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card rounded="lg" elevation="0">
              <template v-slot:title> CRM </template>
              <template v-slot:subtitle>
                <div class="subtitle">{{ amountCRM }} €</div>
              </template>
              <template v-slot:prepend>
                <div class="icon-wrapper icon-color-crm">
                  <v-icon
                    icon="mdi-cellphone"
                    class="icon"
                    color="orange"
                    size="25px"
                  ></v-icon>
                </div>
              </template>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" class="d-flex flex-column">
            <v-divider vertical></v-divider>
            <v-avatar color="#EDEFF1">VS</v-avatar>
            <v-divider vertical></v-divider>
          </v-col>
          <v-col cols="12" md="4">
            <v-card rounded="lg" elevation="0">
              <template v-slot:title> SAGE </template>
              <template v-slot:subtitle>
                <div class="subtitle">{{ amountSage }} €</div>
              </template>
              <template v-slot:append>
                <div class="icon-wrapper icon-color-sage">
                  <v-icon
                    icon="mdi-monitor"
                    class="icon"
                    color="white"
                    size="25px"
                  ></v-icon>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
  
  <script>
export default {
  props: {
    totalAmount: {
      type: String,
      default: "",
    },
    amountCRM: {
      type: String,
      default: "",
    },
    amountSage: {
      type: String,
      default: "",
    },
  },
};
</script>
  
  <style scoped>
.v-card-subtitle {
  opacity: 1 !important;
  font-size: 0.9rem;
}

.subtitle {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 1rem;
}

.icon-color-crm {
  background-color: rgb(255, 239, 215);
  border: 1px solid rgb(255, 239, 215);
  border-radius: 8px;
  padding: 0.5rem;
}

.icon-color-sage {
  background-color: rgb(250, 212, 214);
  border: 1px solid rgb(250, 212, 214);
  border-radius: 8px;
  padding: 0.5rem;
}

.v-divider--vertical {
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
}

.v-avatar.v-avatar--size-default {
  margin-left: auto;
  margin-right: auto;
}
</style>