<template>
  <v-card class="mx-auto" elevation="3">
    <v-table max-height="300px" fixed-header>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" class="text-left">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td
            v-for="column in columns"
            :key="column.key"
            :class="{ 'text-red': containsRetard(row[column.key]) }"
          >
            {{ row[column.key] }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
    
    <script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  methods: {
    containsRetard(text) {
      return typeof text === "string" && text.toLowerCase().includes("retard");
    },
  },
};
</script>
  
    
  <style>
.v-table .v-table__wrapper > table > thead > tr > th {
  background-color: #f2f2f2;
}
</style>