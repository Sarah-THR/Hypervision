<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <h1>Tableau de bord</h1>
      </v-col>
      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(255, 239, 215)"
          iconColor="orange"
          icon="mdi-account-outline"
          title="450 000"
          subtitle="Clients sous contrat"
          percent="8.10%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(238, 251, 229)"
          iconColor="green"
          icon="mdi-currency-eur"
          title="700 000"
          subtitle="Total contrats actifs"
          percent="18.2%"
          colorPercent="green"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(229, 248, 254)"
          iconColor="blue"
          icon="mdi-chart-bar"
          title="4 500 250"
          subtitle="Valorisation"
          percent="24.6%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(250, 212, 214)"
          iconColor="red"
          icon="mdi-account-minus"
          title="250"
          subtitle="Résiliations"
          percent="22.5%"
          colorPercent="green"
        />
      </v-col>
    </v-row>

    <h2>Agences</h2>

    <v-row>
      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(255, 239, 215)"
          iconColor="orange"
          icon="mdi-clipboard-check-outline"
          title="2"
          subtitle="Contrat à valider"
          percent="8.10%"
          colorPercent="green"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(238, 251, 229)"
          iconColor="green"
          icon="mdi-currency-eur"
          title="14"
          subtitle="Contrats à facturer"
          percent="18.2%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(229, 248, 254)"
          iconColor="blue"
          icon="mdi-calendar"
          title="32"
          subtitle="Contrats à facturer date à date"
          percent="24.6%"
          colorPercent="green"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(250, 212, 214)"
          iconColor="red"
          icon="mdi-account-minus"
          title="7"
          subtitle="Résiliations"
          percent="22.5%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(255, 239, 215)"
          iconColor="orange"
          icon="mdi-clipboard-check-outline"
          title="2"
          subtitle="Avenants à valider"
          percent="8.10%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(238, 251, 229)"
          iconColor="green"
          icon="mdi-currency-eur"
          title="14"
          subtitle="Avenants à facturer"
          percent="18.2%"
          colorPercent="green"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(229, 248, 254)"
          iconColor="blue"
          icon="mdi-calendar"
          title="32"
          subtitle="Avenants à facturer date à date"
          percent="24.6%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(250, 212, 214)"
          iconColor="red"
          icon="mdi-clock-outline"
          title="7"
          subtitle="Contrats et avenants attente de signature"
          percent="22.5%"
          colorPercent="green"
        />
      </v-col>
    </v-row>

    <h2>Franchises</h2>

    <v-row>
      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(255, 239, 215)"
          iconColor="orange"
          icon="mdi-clipboard-check-outline"
          title="2"
          subtitle="Contrat à valider"
          percent="8.10%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(238, 251, 229)"
          iconColor="green"
          icon="mdi-currency-eur"
          title="14"
          subtitle="Contrats à facturer"
          percent="18.2%"
          colorPercent="green"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(229, 248, 254)"
          iconColor="blue"
          icon="mdi-calendar"
          title="32"
          subtitle="Contrats à facturer date à date"
          percent="24.6%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(250, 212, 214)"
          iconColor="red"
          icon="mdi-account-minus"
          title="7"
          subtitle="Résiliations"
          percent="22.5%"
          colorPercent="green"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(255, 239, 215)"
          iconColor="orange"
          icon="mdi-clipboard-check-outline"
          title="2"
          subtitle="Avenants à valider"
          percent="8.10%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(238, 251, 229)"
          iconColor="green"
          icon="mdi-currency-eur"
          title="14"
          subtitle="Avenants à facturer"
          percent="18.2%"
          colorPercent="green"
        />
      </v-col>

      <v-col cols="12" md="3">
        <CardsStats
          iconBackgroundColor="rgb(229, 248, 254)"
          iconColor="blue"
          icon="mdi-calendar"
          title="32"
          subtitle="Avenants à facturer date à date"
          percent="24.6%"
          colorPercent="red"
        />
      </v-col>

      <v-col cols="12" md="6">
        <CardsCompare
          totalAmount="22 311 945"
          amountCRM="48 542 690"
          amountSage="70 854 635"
        />
      </v-col>
      <v-col cols="12" md="6">
        <CardsStatus draft="140" active="15" problem="30"/>
      </v-col>

      <v-col cols="12" md="12">
        <TablesSimple :columns="userColumns" :rows="users" />
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script lang="ts">
import { useUserStore } from "@/stores/users";

export default defineComponent({
  data() {
    return {
      userColumns: [
        { key: "FirstName", label: "Utilisateur" },
        { key: "toValidate", label: "A valider" },
        { key: "billing", label: "A facturer" },
        { key: "billingDateToDate", label: "A facturer date à date" },
        { key: "informations", label: "Informations" },
      ]
    };
  },
  mounted() {
    const store = useUserStore();
    store.fetchUsers();
  },
  computed: {
    users() {
      const store = useUserStore();
      return store.users;
    },
  },
});
</script>


<style>
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
  
