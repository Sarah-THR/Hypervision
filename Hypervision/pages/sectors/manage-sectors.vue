<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <h1>Gestion des secteurs</h1>
      </v-col>
      <v-col cols="12" md="12">
        <CardsAdvancedFilter
          title="Secteurs"
          btnText="Créer"
          btnIcon="mdi-plus"
          :btnVisible="true"
          :tableVisible="true"
          tableType="sector"
          :tableHeaders="sectorTableHeaders"
          :tableItems="sectorTableItems"
          :dialogTitle="`Créer un secteur`"
          :createDialogVisible="true"
          :addSector="true"
        />
      </v-col>
      <v-col cols="12" md="12">
        <CardsAdvancedFilter
          title="Agences et franchises non assignés"
          btnText="Actualiser"
          :searchbarVisible="true"
          searchbarText="Rechercher..."
          :btnVisible="true"
          :tableHeaders="agencyTableHeaders"
          :tableItems="agencyTableItems"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
    
    <script>
export default {
  data() {
    return {
      sectorTableHeaders: [
        { title: "Nom", key: "name", align: "start", sortable: false },
        {
          title: "Nombre d'agences",
          key: "nbAgency",
          align: "start",
          sortable: false,
        },
        {
          title: "Nombre de franchises",
          key: "nbFranchise",
          align: "start",
          sortable: false,
        },
        { title: "", key: "actionDelete", align: "start", sortable: false },
      ],
      sectorTableItems: [
        {
          name: "Secteur A",
          nbAgency: "4",
          nbFranchise: "10",
          actionDelete: "mdi-delete-outline",
        },
        {
          name: "Secteur B",
          nbAgency: "7",
          nbFranchise: "21",
          actionDelete: "mdi-delete-outline",
        },
      ],
      agencyTableHeaders: [
        { title: "Nom", key: "name", align: "start", sortable: false },
      ],
      agencyTableItems: [
        { name: "Compufirst" },
        { name: "Dailyapps" },
        { name: "Software" },
        { name: "IDCOM" },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 1280px) {
  .v-container {
    width: 100%;
    padding: 16px;
  }

  .v-container {
    max-width: 1400px;
  }
}
</style>