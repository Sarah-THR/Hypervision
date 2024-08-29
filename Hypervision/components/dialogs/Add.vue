<template>
  <v-dialog v-model="dialog" width="500px" persistent>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-autocomplete
          :items="searchItems"
          prepend-inner-icon="mdi-magnify"
          menu-icon=""
          placeholder="Rechercher..."
          variant="outlined"
          v-model="selectedItems"
          clearable
          multiple
        ></v-autocomplete>
        <span v-for="(selectedItem, index) in selectedItems" :key="index">
          <v-chip
            :model-value="true"
            class="ma-2 cursor-pointer"
            color="primary"
            append-icon="mdi-close-circle-outline"
            @click="deleteItem(index)"
          >
            {{ selectedItem }}
          </v-chip>
        </span>

        <v-checkbox
          v-model="selected"
          label="Ajouter une période d'accès"
          class="mt-5"
          color="primary"
        ></v-checkbox>
        <v-container v-if="selected">
          <v-row>
            <v-col cols="12" md="6">
              <v-date-input
                clearable
                density="comfortable"
                label="Du"
                placeholder="dd/mm/yyyy"
                variant="solo"
                prepend-icon=""
                append-icon=""
                append-inner-icon="$calendar"
                v-model="selectedFirstDate"
                hint="DD/MM/YYYY format"
              ></v-date-input>
            </v-col>
            <v-col cols="12" md="6">
              <v-date-input
                clearable
                density="comfortable"
                label="Au"
                placeholder="dd/mm/yyyy"
                variant="solo"
                prepend-icon=""
                append-icon=""
                append-inner-icon="$calendar"
                v-model="selectedSecondDate"
                hint="DD/MM/YYYY format"
              ></v-date-input>
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
    items: {
      type: Array,
    },
  },
  data() {
    return {
      selectedItems: [],
      selectedFirstDate: null,
      selectedSecondDate: null,
      dialog: false,
      selected: false,
    };
  },
  computed: {
    searchItems() {
      const titles = this.items.map((item) => item.name).filter((name) => name);
      return [...new Set(titles)];
    },
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    deleteItem(index) {
      this.selectedItems.splice(index, 1);
    }
  },
};
</script>
  
  <style>
.v-dialog > .v-overlay__content > .v-card > .v-card-actions,
.v-dialog > .v-overlay__content > form > .v-card > .v-card-actions {
  justify-content: space-between !important;
}
</style>