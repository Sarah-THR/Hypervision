<script setup lang="ts">
// definePageMeta({
//   middleware: ["auth"]
// })
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Gestion des utilisateurs</h1>
      </v-col>
      <v-col cols="12">
        <CardsAdvancedFilter
          title="Utilisateurs"
          searchbarText="Rechercher..."
          :profileSelectVisible="true"
          :statusSelectVisible="true"
          :searchbarVisible="true"
          :tableHeaders="userTableHeaders"
          :tableItems="userTableItems" 
          btnText="Ajouter"
          btnIcon="mdi-plus"
          :btnVisible="true"
          tableType="user"
          :dialogTitle="`Ajouter un utilisateur`"
          :createDialogVisible="true"
          :addUser="true"
        />
      </v-col>
      <v-col cols="12">
        <CardsAdvancedFilter
          title="Groupes d'utilisateurs"
          searchbarText="Rechercher..."
          :statusSelectVisible="true"
          :searchbarVisible="true"
          :tableHeaders="userGroupTableHeaders"
          :tableItems="userGroupTableItems" 
          btnText="Ajouter"
          btnIcon="mdi-plus"
          :btnVisible="true"
          :dialogTitle="`Ajouter un groupe`"
          :createDialogVisible="true"
          :addGroup="true"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
interface TableHeader {
  title: string;
  key: string;
  align: string;
  sortable: boolean;
}

interface UserTableItem {
  lastname: string;
  firstname: string;
  job: string;
  profile: string;
  status: string;
}

interface UserGroupTableItem {
  name: string;
  status: string;
}

export default defineComponent({
  data() {
    return {
      userTableHeaders: [
        { title: "Nom", key: "lastname", align: "start", sortable: false },
        { title: "Prénom", key: "firstname", align: "start", sortable: false },
        { title: "Poste", key: "job", align: "start", sortable: false },
        { title: "Profil", key: "profile", align: "start", sortable: false },
        { title: "Statut", key: "status", align: "start", sortable: false },
      ] as TableHeader[],
      userTableItems: [
        { lastname: "Gindre", firstname: "Anne-Sophie", job: "Responsable ADV", profile: "Collaborateur", status: "Actif" },
        { lastname: "Peinturier", firstname: "Karen", job: "Assistante ADV", profile: "Administrateur", status: "Actif" },
        { lastname: "Mallet", firstname: "Pryscilla", job: "", profile: "Administrateur", status: "Actif" },
      ] as UserTableItem[],
      userGroupTableHeaders: [
        { title: "Nom", key: "name", align: "start", sortable: false },
        { title: "Statut", key: "status", align: "start", sortable: false },
      ] as TableHeader[],
      userGroupTableItems: [
        { name: "Groupe A", status: "Actif" },
        { name: "Groupe B", status: "Actif" },
      ] as UserGroupTableItem[],
    };
  },
});
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