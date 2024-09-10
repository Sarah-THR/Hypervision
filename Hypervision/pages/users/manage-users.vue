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
          :tableItems="formattedUsers" 
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
          :tableItems="groups" 
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
export default defineComponent({
  data() {
    return {
      userTableHeaders: [
        { title: "Nom", key: "LastName", align: "start", sortable: false },
        { title: "Prénom", key: "FirstName", align: "start", sortable: false },
        { title: "Poste", key: "Job", align: "start", sortable: false },
        { title: "Profil", key: "RoleName", align: "start", sortable: false },
        { title: "Statut", key: "IsEnable", align: "start", sortable: false },
      ],
      userGroupTableHeaders: [
        { title: "Nom", key: "Name", align: "start", sortable: false },
        { title: "Statut", key: "IsEnable", align: "start", sortable: false },
      ]
    };
  },
  mounted() {
    const store = useUserStore();
    const groupStore = useGroupStore();
    store.fetchUsers();
    groupStore.fetchGroups();
  },
  computed: {
    users() {
      const store = useUserStore();
      return store.users;
    },
    groups() {
      const groupStore = useGroupStore();
      return groupStore.groups;
    },
    formattedUsers() {
      return this.users.map(user => ({
        ...user,
        RoleName: user.Role.Name, 
      }));
    },
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