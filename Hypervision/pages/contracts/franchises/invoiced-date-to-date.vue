<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <CardsStats
            iconBackgroundColor="rgb(250, 212, 214)"
            iconColor="white"
            icon="mdi-account-outline"
            title="42"
            subtitle="Contrats à facturer date à date"
            percent="8.10%"
            colorPercent="red"
          />
        </v-col>
  
        <v-col cols="12" md="3">
          <CardsStats
            iconBackgroundColor="rgb(255, 239, 215)"
            iconColor="orange"
            icon="mdi-chart-bar"
            title="5"
            subtitle="Mes factures à valider date à date"
            percent="18.2%"
            colorPercent="green"
          />
        </v-col>
  
        <v-col cols="12" md="3">
          <CardsStats
            iconBackgroundColor="rgb(250, 212, 214)"
            iconColor="red"
            icon="mdi-alert-outline"
            title="1"
            subtitle="Contrats en retard de facturation date à date"
            percent="24.6%"
            colorPercent="red"
          />
        </v-col>
  
        <v-col cols="12" md="3">
        <CardsDistribution title="Agences" :subtitles="subtitles" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1>Contrats à facturer date à date - franchises</h1>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="12">
          <CardsAdvancedFilter
            title="Contrats à facturer date à date"
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
            title: "Numéro CRM",
            key: "CRMNumber",
            align: "start",
            sortable: false,
          },
          {
            title: "Du",
            key: "startDate",
            align: "start",
            sortable: false,
          },
          {
            title: "Au",
            key: "endDate",
            align: "start",
            sortable: false,
          },
          {
            title: "Créer dans CRM",
            key: "createCRM",
            align: "start",
            sortable: false,
          },
          {
            title: "Modèle",
            key: "model",
            align: "start",
            sortable: false,
          },
          {
            title: "Agence",
            key: "agency",
            align: "start",
            sortable: false,
          },
          {
            title: "A traité par",
            key: "processedBy",
            align: "start",
            sortable: false,
          },
        ],
        tableItems: [
          {
            client: "PSA Belgique",
            CRMNumber: "CNR-85250-R8T1Z7",
            startDate: "31/04/2024",
            endDate: "31/04/2025",
            createCRM: "02/02/2022",
            model: "Contrat maintenance",
            agency: "Xefi Software",
            processedBy: "Karen PEINTURIER",
          },
          {
            client: "PSA Belgique",
            CRMNumber: "CNR-85250-R8T1Z7",
            startDate: "31/04/2024",
            endDate: "31/04/2025",
            createCRM: "02/02/2022",
            model: "Contrat maintenance",
            agency: "Xefi Software",
            processedBy: "Karen PEINTURIER",
          },
          {
            client: "PSA Belgique",
            CRMNumber: "CNR-85250-R8T1Z7",
            startDate: "31/04/2024",
            endDate: "31/04/2025",
            createCRM: "02/02/2022",
            model: "Contrat maintenance",
            agency: "Xefi Software",
            processedBy: "Karen PEINTURIER",
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