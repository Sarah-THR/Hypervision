<template>
  <div>
    <nav class="sidebar" :style="{ display: hidden }">
      <div class="logo">
        <img src="/public/img/logo-sidebar.png" alt="Logo" />
      </div>
      <v-list nav>
        <SidebarLink
          :link="{
            path: '/',
            name: 'Tableau de bord',
            icon: 'mdi-home-outline',
          }"
        />
        <SidebarLink
          :link="{
            path: '/tasks',
            name: 'Mes tâches',
            icon: 'mdi-monitor',
          }"
        />
        <div class="divider-container">
          <v-divider class="my-5 border-opacity-50" color="white"></v-divider>
          <span class="divider-text"><p>Contrats</p></span>
        </div>

        <v-list-group value="Contrats agences">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-file-document-edit-outline"
              title="Contrats agences"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="([title, path], i) in agencyContracts"
            :key="i"
            :title="title"
            :to="path"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Contrats franchises">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-store"
              title="Contrats franchises"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="([title, path], i) in franchiseContracts"
            :key="i"
            :title="title"
            :to="path"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Avenants">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-autorenew"
              title="Avenants"
            ></v-list-item>
          </template>

          <v-list-group value="Avenants agences">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-store"
                title="Avenants agences"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="([title, path], i) in agencyAmendments"
              :key="i"
              :title="title"
              :to="path"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="Avenants franchises">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-file-document-edit-outline"
                title="Avenants franchises"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="([title, path], i) in franchiseAmendments"
              :key="i"
              :title="title"
              :to="path"
            ></v-list-item>
          </v-list-group>
        </v-list-group>

        <SidebarLink
          :link="{
            path: '/crm-sage',
            name: 'CRM/SAGE',
            icon: 'mdi-currency-eur',
          }"
        />
        <div class="divider-container">
          <v-divider class="my-5 border-opacity-50" color="white"></v-divider>
          <span class="divider-text"><p>Gérer mon équipe</p></span>
        </div>
        <SidebarLink
          :link="{
            path: '/users/manage-users',
            name: 'Utilisateurs',
            icon: 'mdi-account-multiple',
          }"
        />
        <SidebarLink
          :link="{
            path: '/sectors/manage-sectors',
            name: 'Secteurs',
            icon: 'mdi-account-check',
          }"
        />
        <SidebarLink
          :link="{
            path: '/manage-absences',
            name: 'Absences',
            icon: 'mdi-account-cog',
          }"
        />
        <div class="divider-container">
          <v-divider class="my-5 border-opacity-50" color="white"></v-divider>
        </div>
        <SidebarLink
          :link="{ path: '', name: 'Se déconnecter', icon: '' }"
        />
      </v-list>
    </nav>
    <main>
      <SidebarTopNavbar
        @toggle-hidden="toggleHidden"
        :isNavIconVisible="isNavIconVisible"
        :isSidebarVisible="hidden === 'block'"
      ></SidebarTopNavbar>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: "block",
      screenWidth: 0,
      agencyContracts: [
        ["A valider", "/contracts/agencies/validate"],
        ["A facturer", "/contracts/agencies/invoiced"],
        ["A facturer date à date", "/contracts/agencies/invoiced-date-to-date"],
        ["A valider date à date", "/contracts/agencies/validate-date-to-date"],
        ["Résiliations", "/contracts/agencies/termination"],
        ["En attente de signature", "/contracts/agencies/awaiting-signature"],
      ],
      franchiseContracts: [
        ["A valider", "/contracts/franchises/validate"],
        ["A facturer", "/contracts/franchises/invoiced"],
        ["A facturer date à date", "/contracts/franchises/invoiced-date-to-date"],
        ["A valider date à date", "/contracts/franchises/validate-date-to-date"],
        ["Résiliations", "/contracts/franchises/termination"],
      ],
      agencyAmendments: [
        ["A valider", "/amendments/agencies/validate"],
        ["A facturer", "/amendments/agencies/invoiced"],
        ["A valider date à date", "/amendments/agencies/validate-date-to-date"],
        ["A facturer date à date", "/amendments/agencies/invoiced-date-to-date"],
        ["En attente de signature", "/amendments/agencies/awaiting-signature"],
      ],
      franchiseAmendments: [
        ["A valider", "/amendments/franchises/validate"],
        ["A facturer", "/amendments/franchises/invoiced"],
        ["A valider date à date", "/amendments/franchises/validate-date-to-date"],
        ["A facturer date à date", "/amendments/franchises/invoiced-date-to-date"],
      ],
    };
  },
  computed: {
    isNavIconVisible() {
      return this.screenWidth < 1400;
    },
    sidebarStyles() {
      return {
        display: this.isVisible,
      };
    },
  },
  methods: {
    toggleHidden() {
      if (this.isNavIconVisible) {
        this.hidden = this.hidden === "none" ? "block" : "none";
      }
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
      this.hidden = this.screenWidth < 1400 ? "none" : "block";
    },
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.sidebar {
  background-color: #1c212c !important;
  width: 300px;
  position: fixed;
  z-index: 1;
  height: 100%;
}

img {
  height: 70px !important;
  width: 200px !important;
}

main {
  flex: 1;
  margin-left: 20%;
}

a {
  text-decoration: none !important;
  color: white !important;
}

.v-divider {
  flex: 1 !important;
  max-width: 6%;
}

.divider-container {
  display: flex;
  align-items: center;
}

.divider-text {
  color: white;
  margin-left: 0.7rem;
  font-size: 0.9rem !important;
}

.v-list--nav {
  background-color: #1c212c !important;
}

@media (max-width: 1400px) {
  main {
    flex: 1;
    margin-left: 0;
  }
}
.v-list .v-list-item--nav:not(:only-child) {
  color: white !important;
}

.v-list-group__items .v-list-item {
  padding-inline-start: 0 !important;
}

.v-list-group__items .v-list-item:not(.v-list-group__header)::before {
  content: "•";
  color: white;
  font-size: 1.2rem;
  margin-right: 1rem;
  margin-left: 1rem;
}

.v-list-item--nav .v-list-item-title {
  font-size: 1rem !important;
}

.v-icon--size-default {
  font-size: 1.7rem !important;
}

</style>