<template>
  <v-toolbar elevation="0" color="transparent">
    <v-avatar
      color="grey"
      v-if="isNavIconVisible && user"
      size="small"
      class="ms-4"
    >
      <span class="text-p">{{ initials }}</span>
    </v-avatar>
    <v-spacer></v-spacer>
    <v-avatar
      color="grey"
      v-if="!isNavIconVisible && user"
      size="40"
      class="me-4"
    >
      <span class="text-p">{{ initials }}</span>
    </v-avatar>
    <v-app-bar-nav-icon
      v-if="isNavIconVisible"
      @click="toggleHidden"
      class="d-lg-none"
    >
      <template v-if="!isSidebarVisible">
        <v-icon>mdi-menu</v-icon>
      </template>
      <template v-else>
        <v-icon>mdi-close</v-icon>
      </template>
    </v-app-bar-nav-icon>
  </v-toolbar>
</template>

<script>
import { useUserStore } from "@/stores/users";

export default {
  mounted() {
    const store = useUserStore();
    store.fetchUserById(1);
  },
  props: {
    isNavIconVisible: {
      type: Boolean,
      required: true,
    },
    isSidebarVisible: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    user() {
      const store = useUserStore();
      return store.user;
    },

    initials() {
      if (!this.user) return '';
      const firstInitial = this.user.FirstName[0] ? this.user.FirstName[0][0].toUpperCase() : '';
      const lastInitial = this.user.LastName[0] ? this.user.LastName[0][0].toUpperCase() : '';
      return firstInitial + lastInitial;
    },
  },
  methods: {
    toggleHidden() {
      this.$emit("toggle-hidden");
    },
  },
};
</script>

