<template>
  <v-card elevation="1">
    <v-data-table-server
      :v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="serverItems"
      :items-length="totalItems"
      :search="search"
      item-value="name"
      @update:options="loadItems"
      max-height="300"
    >
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.key || header.title"
            class="text-left"
          >
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="header in headers" :key="header.key">
            <template v-if="header.key === 'IsEnable'">
              <v-select
                class="my-2"
                v-model="item[header.key]"
                :items="statusOptions"
                variant="outlined"
              ></v-select>
            </template>
            <template
              v-else-if="
                header.key === 'actionUpdate' || header.key === 'actionValidate'
              "
            >
              <v-btn
                :icon="item[header.key]"
                color="green"
                variant="text"
              ></v-btn>
            </template>
            <template
              v-else-if="
                header.key === 'actionDelete' || header.key === 'actionCancel'
              "
            >
              <v-btn
                :icon="item[header.key]"
                color="red"
                variant="text"
              ></v-btn>
            </template>
            <template v-else>
              <div @click="navigateToUser(item, type)">
                {{ item[header.key] }}
              </div>
            </template>
          </td>
        </tr>
      </tbody>
    </v-data-table-server>
  </v-card>
</template>
    
<script>
export default {
  props: {
    type: {
      type: String,
    },
    header: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      itemsPerPage: 5,
      headers: [],
      search: "",
      serverItems: [],
      loading: true,
      totalItems: 0,
      statusOptions: ["Actif", "Désactivé"],
    };
  },
  mounted() {
    this.headers = this.header;
    this.serverItems = Array.isArray(this.items) ? this.items : [];
    this.totalItems = this.serverItems.length;
  },
  methods: {
    async loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      try {
        // const response = await fetch(`/api/items?page=${page}&itemsPerPage=${itemsPerPage}&sortBy=${sortBy}`);
        // const data = await response.json();

        // this.serverItems = data.items;
        // this.totalItems = data.total;
        this.loading = false;
      } catch (error) {
        console.error("An error occurred while loading items:", error);
        this.loading = false;
      }
    },
    navigateToUser(item, tableType) {
      if (tableType === "user") {
        const router = useRouter();
        router.push(`/users/${item.Id}`);
      } else if (tableType === "sector") {
        const router = useRouter();
        router.push(`/sectors/${item.sectorId}`);
      }
    },
  },
  computed: {
    key() {
      return this.item.actionKey || 'defaultKey';
    }
  },
};
</script>
    
  <style>
.v-table .v-table__wrapper > table > thead > tr > th {
  background-color: #f2f2f2;
  text-transform: uppercase;
}

.v-input__details {
  display: none;
}

.v-btn--variant-elevated {
  box-shadow: none;
}

.v-btn--elevated:hover {
  box-shadow: none;
}

.v-table .v-table__wrapper > table > tbody > tr > td:first-child {
  text-transform: uppercase;
}

.v-data-table tr {
  cursor: pointer;
}
</style>
    