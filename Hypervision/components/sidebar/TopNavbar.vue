<template>
    <v-toolbar elevation="0" color="transparent">
      <v-avatar color="grey" v-if="isNavIconVisible" size="small" class="ms-4">
        <span class="text-p">CP</span>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-avatar color="grey" v-if="!isNavIconVisible" size="40" class="me-4">
        <span class="text-p">CP</span>
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
  export default {
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
    methods: {
      toggleHidden() {
        this.$emit("toggle-hidden");
      },
    },
  };
  </script>
    