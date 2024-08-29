<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <CardsStats
            iconBackgroundColor="rgb(250, 212, 214)"
            iconColor="white"
            icon="mdi-account-outline"
            title="2"
            subtitle="Avenants date à date en attente de signature"
            percent="8.10%"
            colorPercent="red"
          />
        </v-col>
  
        <v-col cols="12" md="4">
        <CardsDistribution title="Agences" :subtitles="subtitles" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1>Avenants en attente de signature - agences</h1>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="12">
          <CardsAdvancedFilter
            title="Avenants en attente de signature"
            :searchbarVisible="true"
            searchbarText="Rechercher..."
            :tableHeaders="tableHeaders"
            :tableItems="tableItems"
          />
        </v-col>
      </v-row>
    </v-container>
  </template>
    
    <script>
  export default {
    data() {
      return {
        tableHeaders: [
          { title: "Client", key: "client", align: "start", sortable: false },
          {
            title: "Nom contrat dans GED",
            key: "GEDContractName",
            align: "start",
            sortable: false,
          },
          {
            title: "Agence",
            key: "agency",
            align: "start",
            sortable: false,
          },
          { title: "", key: "actionValidate", align: "start", sortable: false },
        ],
        tableItems: [
          {
            client: "PSA Belgique",
            GEDContractName: "CNR-85250-R8T1Z7",
            agency: "Xefi Software",
            actionValidate: "mdi-checkbox-marked-circle",
          },
          {
            client: "PSA Belgique",
            GEDContractName: "CNR-85250-R8T1Z7",
            agency: "Xefi Software",
            actionValidate: "mdi-checkbox-marked-circle",
          },
          {
            client: "PSA Belgique",
            GEDContractName: "CNR-85250-R8T1Z7",
            agency: "Xefi Software",
            actionValidate: "mdi-checkbox-marked-circle",
          },
        ],
        subtitles: ["Software (50%)", "Xefi Saint-Etienne (30%)", "Autres (20%)"],
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