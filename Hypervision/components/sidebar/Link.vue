<template>
  <router-link
    @click="hideSidebar"
    v-bind="$attrs"
    :to="link.path"
    exact-active-class="v-list-item--active"
  >
    <v-list-item
      :prepend-icon="link.icon"
      :title="link.name"
      :value="link.name"
      :class="{ 'v-list-item--active': isActive}"
    >
      <slot></slot>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  inject: {
    autoClose: {
      default: true,
    },
  },
  props: {
    link: {
      type: [String, Object],
      default: () => {
        return {
          name: "",
          path: "",
          icon: "",
        };
      },
    },
    tag: {
      type: String,
      default: "router-link",
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.link.path;
    },
  },
  methods: {
    hideSidebar() {
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
  
  <style>
.v-list-item--nav .v-list-item-title {
  font-size: 1rem !important;
}

.v-icon--size-default {
  font-size: 1.7rem !important;
}

.v-list-item--active {
  background-color: #D50000 !important;
}

.v-list-item--density-default.v-list-item--one-line {
    margin-top: 0.5rem;
}
</style>