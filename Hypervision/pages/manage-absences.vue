<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <h1>Gestion des absences</h1>
      </v-col>
      <v-col cols="12" md="12"> 
        <Tabs :options="tabOptions" v-model="activeTab"/>
      </v-col>
      <v-col cols="12" md="12">
        <CardsAdvancedFilter
        v-if="activeTab === 0"
          title="Absences à venir"
          :searchbarVisible="true"
          searchbarText="Nom"
          :firstDateVisible="true"
          :secondDateVisible="true"
          :tableHeaders="absenceTableHeaders"
          :tableItems="absenceTableItems"
        />

        <CardsAdvancedFilter
        v-if="activeTab === 1"
          title="Historique des absences"
          :searchbarVisible="true"
          searchbarText="Nom"
          :tableHeaders="absenceTableHeaders"
          :tableItems="absenceTableItems"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
    
    <script>
export default {
  data() {
    return {
      activeTab: 0,
      absenceTableHeaders: [
        { title: "Nom", key: "name", align: "start", sortable: false },
        {
          title: "Du",
          key: "startDateAbsence",
          align: "start",
          sortable: false,
        },
        { title: "Au", key: "endDateAbsence", align: "start", sortable: false },
      ],
      absenceTableItems: [
        {
          name: "Karen PEINTURIER",
          startDateAbsence: "01/04/2024",
          endDateAbsence: "01/04/2024",
        },
        {
          name: "Pryscilla MALLET",
          startDateAbsence: "01/03/2024",
          endDateAbsence: "01/03/2024",
        },
        {
          name: "Anne-Sophie GINDRE",
          startDateAbsence: "10/08/2024",
          endDateAbsence: "20/09/2024",
        },
      ],
      tabOptions: [
        { text: "Absences à venir" },
        { text: "Historique des absences" }
      ]
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