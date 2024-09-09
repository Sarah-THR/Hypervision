<template>
  <v-dialog v-model="dialog" width="800px" persistent>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-container v-if="addUser">
          <v-row>
            <v-col cols="4">
              <v-text-field
                label="Adresse mail"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Nom" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Prénom" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Poste" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-autocomplete
                placeholder="Profil"
                variant="outlined"
                v-model="selectedItem"
                clearable
              />
            </v-col>
          </v-row>
        </v-container>
        <v-container v-if="addGroup">
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Nom du groupe"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                placeholder="Sélectionner un ou plusieurs utilisateurs"
                variant="outlined"
                v-model="selectedItems"
                clearable
                multiple
              />
            </v-col>
          </v-row>
        </v-container>
        <v-container v-if="addSector">
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Nom du secteur"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                placeholder="Sélectionner une ou plusieurs agences"
                variant="outlined"
                v-model="selectedItems"
                clearable
                multiple
              />
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                placeholder="Sélectionner une ou plusieurs franchises"
                variant="outlined"
                v-model="selectedItems"
                clearable
                multiple
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <template v-slot:actions>
        <v-btn text="Annuler" @click="dialog = false"></v-btn>
        <v-btn
          text="Enregistrer"
          @click="dialog = false"
          color="primary"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
    
    <script>
export default {
  props: {
    title: {
      type: String,
    },
    addUser: {
      type: Boolean,
    },
    addGroup: {
      type: Boolean,
    },
    addSector: {
      type: Boolean,
    },
  },
  data() {
    return {
      dialog: false,
      selectedItem: null,
      selectedItems: [],
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
  },
};
</script>
