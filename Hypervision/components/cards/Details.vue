<template>
  <v-card
    class="mx-auto mb-5 pt-5"
    elevation="3"
    min-height="800px"
    height="100%"
  >
    <div v-if="sector" class="text-center">
      <h1>{{ sector.name }}</h1>
    </div>
    <div v-else class="text-center">
      <h1>{{ user.FirstName }} {{ user.LastName }}</h1>
      <!-- <v-chip class="ma-2" label> {{ user.profile }} </v-chip> -->
    </div>
    <h3 class="ms-6 mt-4">Détails</h3>
    <v-divider class="my-5 border-opacity-50"></v-divider>
    <div v-if="sector && sector.users">
      <h4 class="ms-6 ma-2">Utilisateurs</h4>
      <ul>
        <li v-for="user in sector.users" :key="user.email" class="ms-6 ma-2">
          {{ user.FirstName }} {{ user.LastName }}
        </li>
      </ul>
      <h4 class="ms-6 ma-2">Accès</h4>
      <ul>
        <li
          v-for="access in sector.access"
          :key="access.name"
          class="ms-6 ma-2"
        >
          {{ access.name }} ({{ access.items.length }})
        </li>
      </ul>
    </div>
    <div v-else>
      <h4 class="ms-6 ma-2">Email</h4>
      <p class="ms-6 ma-2">{{ user.Email }}</p>
      <h4 class="ms-6 ma-2">Poste</h4>
      <p class="ms-6 ma-2">{{ user.Job }}</p>
      <h4 class="ms-6 ma-2">Statut</h4>
      <v-chip class="ms-6" label :color="statusColor">
        {{ user.IsEnable }}
      </v-chip>
      <h4 class="ms-6 ma-2">Absences prévues</h4>
      <p class="ms-6 ma-2">
        <!-- Du {{ user.absenceStart }} au {{ user.absenceEnd }} -->
      </p>
    </div>

    <div class="d-flex flex-column">
      <v-btn
        v-if="!sector"
        variant="outlined"
        color="red"
        class="ma-4"
        @click="deactivateUser"
      >
        Désactiver
      </v-btn>
      <v-btn variant="outlined" color="red" class="ma-4" @click="deleteUser">
        Supprimer
      </v-btn>
    </div>
  </v-card>
</template>
    
<script lang="ts">
export default {
  props: {
    user: {
      type: Object,
      default: () => null,
    },
    sector: {
      type: Object,
      default: () => null,
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
  computed: {
    statusColor(): string {
      return this.user.IsEnable === true ? "green" : "red";
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

ul {
  list-style-type: none;
}
</style>
    