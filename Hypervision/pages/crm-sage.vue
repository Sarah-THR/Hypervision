<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>CRM/Sage</h1>
      </v-col>
      </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="8" md="8">
        <CardsCompare
          totalAmount="22 311 945"
          amountCRM="48 542 690"
          amountSage="70 854 635"
        />
      </v-col>
      <v-col cols="12" md="12">
        <CardsAdvancedFilter
          title="Ecarts CRM/Sage"
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
        { title: "Agence", key: "agency", align: "start", sortable: false },
        {
          title: "Prix total CRM",
          key: "totalPriceCRM",
          align: "start",
          sortable: false,
        },
        {
          title: "Prix annuel Sage",
          key: "annualPriceSage",
          align: "start",
          sortable: false,
        },
        { title: "Ecart CRM", key: "gapCRM", align: "start", sortable: false },
        {
          title: "Ecart Sage",
          key: "gapSage",
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
          agency: "XEFI INGENIERIE",
          totalPriceCRM: "19 127,27€",
          annualPriceSage: "25 359,24€",
          gapCRM: "-6232€",
          gapSage: "+6232€",
          processedBy: "Karen PEINTURIER",
        },
        {
          client: "PSA Belgique",
          agency: "XEFI INGENIERIE",
          totalPriceCRM: "19 127,27€",
          annualPriceSage: "25 359,24€",
          gapCRM: "-6232€",
          gapSage: "+6232€",
          processedBy: "Karen PEINTURIER",
        },
        {
          client: "PSA Belgique",
          agency: "XEFI INGENIERIE",
          totalPriceCRM: "19 127,27€",
          annualPriceSage: "25 359,24€",
          gapCRM: "-6232€",
          gapSage: "+6232€",
          processedBy: "Karen PEINTURIER",
        },
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