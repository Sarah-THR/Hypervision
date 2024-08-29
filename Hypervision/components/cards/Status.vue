<template>
  <v-card
    class="mx-auto my-8 d-flex flex-column"
    elevation="3"
    :min-height="280"
  >
    <v-card-title class="text-center"> Statuts </v-card-title>
    <v-container class="mt-auto mb-auto">
      <v-row>
        <v-col
          cols="12"
          md="3"
          class="d-flex flex-column text-center"
          style="align-items: center"
        >
          <div class="icon-wrapper icon-color-draft">
            <v-icon
              icon="mdi-pen"
              class="icon"
              color="gray"
              size="25px"
            ></v-icon>
          </div>
          <div class="title">Brouillon</div>
          <div class="subtitle">{{ draft }}</div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col
          cols="12"
          md="3"
          class="d-flex flex-column text-center"
          style="align-items: center"
        >
          <div class="icon-wrapper icon-color-active">
            <v-icon
              icon="mdi-notification-clear-all"
              class="icon"
              color="white"
              size="25px"
            ></v-icon>
          </div>
          <div class="title">Actif</div>
          <div class="subtitle">{{ active }}</div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col
          cols="12"
          md="3"
          class="d-flex flex-column text-center"
          style="align-items: center"
        >
          <div class="icon-wrapper icon-color-problem">
            <v-icon
              icon="mdi-alert-circle-outline"
              class="icon"
              color="red"
              size="25px"
            ></v-icon>
          </div>
          <div class="title">Problème</div>
          <div class="subtitle">{{ problem }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
  
  <script>
export default {
  props: {
    draft: {
      type: String,
      default: "",
    },
    active: {
      type: String,
      default: "",
    },
    problem: {
      type: String,
      default: "",
    },
  },
};
</script>
  
  <style>
.icon-wrapper {
  width: fit-content;
}

.subtitle {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 1.3rem;
  font-weight: 500;
  color: grey;
}

.icon-color-draft {
  background-color: #edeff1;
  border: 1px solid #edeff1;
  border-radius: 8px;
  padding: 0.5rem;
}

.icon-color-active {
  background-color: #c7e9bf;
  border: 1px solid #c7e9bf;
  border-radius: 8px;
  padding: 0.5rem;
}

.icon-color-problem {
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