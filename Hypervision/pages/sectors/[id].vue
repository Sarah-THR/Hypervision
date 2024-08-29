<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <CardsDetails :sector="sectorDetails" />
      </v-col>
      <v-col cols="12" md="9">
        <Tabs :options="tabOptions" v-model="activeTab" />

        <CardsAdvancedFilter
          v-if="activeTab === 1"
          title="Utilisateurs"
          btnText="Ajouter"
          btnIcon="mdi-plus"
          searchbarText="Rechercher..."
          :btnVisible="true"
          :searchbarVisible="true"
          :tableHeaders="userTableHeaders"
          :tableItems="userTableItems"
          :dialogTitle="`Ajouter un/des utilisateur à ${sectorDetails.name}`"
          :addDialogVisible="true"
        />
        <CardsAdvancedFilter
          v-if="activeTab === 1"
          title="Groupes"
          btnText="Ajouter"
          btnIcon="mdi-plus"
          searchbarText="Rechercher..."
          :btnVisible="true"
          :searchbarVisible="true"
          :tableHeaders="groupTableHeaders"
          :tableItems="groupTableItems"
          :dialogTitle="`Ajouter un groupe à ${sectorDetails.name}`"
          :addDialogVisible="true"
        />

        <div v-if="activeTab === 0">
          <v-expansion-panels>
            <v-expansion-panel
              class="mb-6"
              v-for="access in sectorDetails.access"
              :key="access.name"
            >
              <v-expansion-panel-title
                >{{ access.name }} ({{
                  access.items.length
                }})</v-expansion-panel-title
              >
              <v-expansion-panel-text>
                <v-text-field
                  class="mt-4"
                  v-model="searchQuery"
                  placeholder="Rechercher"
                  prepend-inner-icon="mdi-magnify"
                  density="comfortable"
                  clearable
                  variant="solo"
                ></v-text-field>
                <div class="mt-6">
                  <h4>
                    {{ access.name }} sélectionnées ({{ access.items.length }})
                  </h4>
                  <v-row>
                    <v-col
                      cols="12"
                      md="4"
                      sm="4"
                      v-for="item in access.items"
                      :key="item.name"
                    >
                      <v-checkbox
                        color="primary"
                        :label="item.name"
                        :value="item.name"
                        :v-model="true"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </div>
                <div class="mt-6">
                  <h4>{{ access.name }} non sélectionnées</h4>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      searchQuery: "",
      activeTab: 0,
      tabOptions: [{ text: "Paramètres" }, { text: "Accès" }],
      sectorDetails: {
        id: 1,
        name: "Secteur A",
        users: [
          {
            id: 1,
            name: "Anne-Sophie GINDRE",
            email: "as.gindre@xefi.fr",
            job: "Resonsable contrat",
            profile: "Administrateur",
            status: "Actif",
            absenceStart: "10/08/2024",
            absenceEnd: "20/09/2024",
          },
          {
            id: 2,
            name: "Karen PEINTURIER",
            email: "k.peinturier@xefi.fr",
            job: "Resonsable contrat",
            profile: "Administrateur",
            status: "Actif",
            absenceStart: "10/08/2024",
            absenceEnd: "20/09/2024",
          },
        ],
        access: [
          {
            id: 1,
            name: "Agences",
            items: [
              {
                id: 1,
                name: "Xefi Lyon",
              },
              {
                id: 2,
                name: "Xefi Roissy",
              },
            ],
          },
          {
            id: 2,
            name: "Franchises",
            items: [
              {
                id: 1,
                name: "Xefi Vernon",
              },
              {
                id: 2,
                name: "Xefi Sannois",
              },
              {
                id: 3,
                name: "Xefi Vitrolles",
              },
              {
                id: 4,
                name: "Xefi Narbonne",
              },
            ],
          },
        ],
      },
      userTableHeaders: [
        { title: "Nom", key: "name", align: "start", sortable: false },
        { title: "Du", key: "startDate", align: "start", sortable: false },
        { title: "Au", key: "endDate", align: "start", sortable: false },
        { title: "", key: "actionDelete", align: "start", sortable: false },
      ],
      userTableItems: [
        {
          name: "Anne-Sophie GINDRE",
          startDate: "10/08/2024",
          endDate: "20/09/2024",
          actionDelete: "mdi-delete-outline",
        },
        {
          name: "Karen PEINTURIER",
          startDate: "10/08/2024",
          endDate: "20/09/2024",
          actionDelete: "mdi-delete-outline",
        },
      ],
      groupTableHeaders: [
        { title: "Nom", key: "name", align: "start", sortable: false },
        { title: "Du", key: "startDate", align: "start", sortable: false },
        { title: "Au", key: "endDate", align: "start", sortable: false },
        { title: "", key: "actionDelete", align: "start", sortable: false },
      ],
      groupTableItems: [
        {
          name: "Groupe A",
          startDate: "01/01/2024",
          endDate: "01/04/2024",
          actionDelete: "mdi-delete-outline",
        },
        {
          name: "Groupe B",
          startDate: "01/01/2024",
          endDate: "01/04/2024",
          actionDelete: "mdi-delete-outline",
        },
      ],
    };
  },
  computed: {
    statusColor() {
      return this.user.status.toLowerCase() === "actif" ? "green" : "red";
    },
  },
  methods: {
    deactivateUser() {
      console.log("User deactivated");
    },
    deleteUser() {
      console.log("User deleted");
    },
  },
};
</script>
    
    <style scoped>
.v-divider {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 1280px) {
  .v-container {
    max-width: none;
  }
}

@media (min-width: 960px) {
  .v-container {
    max-width: none;
  }
}
</style>
    