<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <CardsDetails v-if="profileSelected" :user="profileSelected" />
      </v-col>
      <v-col cols="12" md="9">
        <Tabs :options="tabOptions" v-model="activeTab" />

        <CardsAdvancedFilter
          v-if="activeTab === 0"
          title="Sites"
          btnText="Ajouter"
          btnIcon="mdi-plus"
          searchbarText="Rechercher..."
          :btnVisible="true"
          :searchbarVisible="true"
          :tableHeaders="agencyTableHeaders"
          :tableItems="agencyTableItems"
          :dialogTitle="`Ajouter un/des sites à `"
          :addDialogVisible="true"
        />

        <CardsAdvancedFilter
          v-if="activeTab === 0"
          title="Groupes d'utilisateurs"
          btnText="Ajouter"
          btnIcon="mdi-plus"
          searchbarText="Rechercher..."
          :btnVisible="true"
          :searchbarVisible="true"
          :tableHeaders="groupTableHeaders"
          :tableItems="groups"
          :dialogTitle="`Ajouter un groupe à `"
          :addDialogVisible="true"
        />

        <CardsAdvancedFilter
          v-if="activeTab === 1"
          title="Historique"
          :tableHeaders="historyTableHeaders"
          :tableItems="historyTableItems"
          :tableVisible="true"
          :addDialogVisible="true"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/users";

export default {
  data() {
    return {
      activeTab: 0,
      tabOptions: [{ text: "Accès" }, { text: "Historique" }],
      agencyTableHeaders: [
        { title: "Nom", key: "name", align: "start", sortable: false },
        { title: "", key: "startDate", align: "start", sortable: false },
        { title: "", key: "endDate", align: "start", sortable: false },
        { title: "", key: "actionDelete", align: "start", sortable: false },
        { title: "", key: "actionUpdate", align: "start", sortable: false },
      ],
      agencyTableItems: [
        {
          name: "Xefi Macon",
          startDate: "01/01/2024",
          endDate: "01/04/2024",
          actionUpdate: "mdi-pencil-outline",
          actionDelete: "mdi-delete-outline",
        },
        {
          name: "Nexeren",
          startDate: "",
          endDate: "",
          actionUpdate: "mdi-pencil-outline",
          actionDelete: "mdi-delete-outline",
        },
      ],
      groupTableHeaders: [
        { title: "Nom", key: "Name", align: "start", sortable: false },
        { title: "", key: "StartDate", align: "start", sortable: false },
        { title: "", key: "EndDate", align: "start", sortable: false },
        { title: "", key: "actionDelete", align: "start", sortable: false },
        { title: "", key: "actionUpdate", align: "start", sortable: false },
      ],
      historyTableHeaders: [
        { title: "Nom", key: "name", align: "start", sortable: false },
        { title: "", key: "date", align: "start", sortable: false },
      ],
      historyTableItems: [
        {
          name: "Contrat [Numéro] validé",
          date: "01/01/2024",
        },
        {
          name: "Contrat [Numéro] validé",
          date: "28/01/2024",
        },
      ],
    };
  },
  computed: {
    profileSelected() {
      const store = useUserStore();
      const route = useRoute();
      const userId = Number(route.params.id);

      return store.users.find((user) => user.Id === userId);
    },
    groups() {
      const groupStore = useGroupStore();
      const route = useRoute();
      const userId = Number(route.params.id);
      return groupStore.groups.filter((group) => group.Users.some((userGroup) => userGroup.UserId === userId));
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
