<template>
  <v-card class="mx-auto mb-5" elevation="3">
    <div class="d-flex align-center justify-space-between padding-card">
      <v-card-title> {{ title }} </v-card-title>
      <v-btn
        color="primary"
        background="white"
        :prepend-icon="btnIcon"
        class="me-5 btn"
        v-if="btnVisible"
        @click="openDialog"
      >
        {{ btnText }}
      </v-btn>
      <DialogsAdd
        v-if="addDialogVisible"
        ref="dialogsAdd"
        :title="dialogTitle"
        :items="filteredTableItems"
      />
      <DialogsCreate
        v-if="createDialogVisible"
        ref="dialogsCreate"
        :title="dialogTitle"
        :addUser="addUser"
        :addGroup="addGroup"
        :addSector="addSector"
      />
    </div>
    <v-divider></v-divider>
    <v-card
      class="mx-auto mb-5 padding-card"
      elevation="0"
      v-if="
        profileSelectVisible ||
        statusSelectVisible ||
        searchbarVisible ||
        firstDateVisible ||
        secondDateVisible ||
        tableVisible
      "
    >
      <v-container>
        <v-row>
          <v-col v-if="profileSelectVisible" cols="12" md="3">
            <v-autocomplete
              density="comfortable"
              clearable
              label="Profil"
              :items="profileItems"
              variant="solo"
              v-model="selectedProfile"
            ></v-autocomplete>
          </v-col>
          <v-col v-if="statusSelectVisible" cols="12" md="3">
            <v-autocomplete
              density="comfortable"
              clearable
              label="Statut"
              :items="statusItems"
              variant="solo"
              v-model="selectedStatus"
            />
          </v-col>
          <v-spacer
            v-if="statusSelectVisible || profileSelectVisible"
          ></v-spacer>
          <v-col cols="12" md="4" v-if="searchbarVisible">
            <v-text-field
              v-model="searchQuery"
              :placeholder="searchbarText"
              prepend-inner-icon="mdi-magnify"
              density="comfortable"
              clearable
              variant="solo"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" v-if="firstDateVisible">
            <v-date-input
              clearable
              density="comfortable"
              label="Du"
              placeholder="dd/mm/yyyy"
              variant="solo"
              prepend-icon=""
              append-icon=""
              append-inner-icon="$calendar"
              v-model="selectedFirstDate"
              hint="DD/MM/YYYY format"
              @click:clear="selectedFirstDate = null"
            ></v-date-input>
          </v-col>
          <v-col cols="12" md="3" v-if="secondDateVisible">
            <v-date-input
              clearable
              label="Au"
              density="comfortable"
              placeholder="dd/mm/yyyy"
              variant="solo"
              prepend-icon=""
              append-icon=""
              append-inner-icon="$calendar"
              v-model="selectedSecondDate"
              hint="DD/MM/YYYY format"
              @click:clear="selectedSecondDate = null"
            ></v-date-input>
          </v-col>
          <v-col cols="12" md="12">
            <TablesPaginate
              :key="filteredTableItems.length"
              :header="tableHeaders"
              :items="filteredTableItems"
              :type="tableType"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>
  
  <script>
export default {
  props: {
    title: {
      type: String,
    },
    btnIcon: {
      type: String,
    },
    btnText: {
      type: String,
    },
    searchbarText: {
      type: String,
    },
    profileSelectVisible: {
      type: Boolean,
      default: false,
    },
    statusSelectVisible: {
      type: Boolean,
      default: false,
    },
    searchbarVisible: {
      type: Boolean,
      default: false,
    },
    btnVisible: {
      type: Boolean,
      default: false,
    },
    firstDateVisible: {
      type: Boolean,
      default: false,
    },
    secondDateVisible: {
      type: Boolean,
      default: false,
    },
    tableVisible: {
      type: Boolean,
      default: false,
    },
    tableHeaders: {
      type: Array,
      required: true,
    },
    tableItems: {
      type: Array,
      required: true,
    },
    tableType: {
      type: String,
    },
    dialogTitle: {
      type: String,
    },
    addDialogVisible: {
      type: Boolean,
    },
    createDialogVisible: {
      type: Boolean,
    },
    addUser: {
      type: Boolean,
    },
    addGroup: {
      type: Boolean,
    },
    addSector: {
      type: Boolean,
    }
    
  },
  data() {
    return {
      selectedProfile: null,
      selectedStatus: null,
      searchQuery: "",
      selectedFirstDate: null,
      selectedSecondDate: null,
      dialog: false,
    };
  },
  computed: {
    profileItems() {
      const profileTitles = this.tableItems
        .map((item) => item.Roles.Name)
        .filter((profile) => profile);
      return [...new Set(profileTitles)];
    },

    statusItems() {
      const statusTitles = this.tableItems
        .map((item) => item.status)
        .filter((status) => status);
      return [...new Set(statusTitles)];
    },

    filteredTableItems() {
      let filteredItems = this.tableItems;

      if (this.selectedProfile) {
        filteredItems = filteredItems.filter(
          (item) => item.Roles.Name === this.selectedProfile
        );
      }

      if (this.selectedStatus) {
        filteredItems = filteredItems.filter(
          (item) => item.status === this.selectedStatus
        );
      }

      if (this.selectedFirstDate) {
        filteredItems = filteredItems.filter(
          (item) =>
            this.parseDate(item.startDate).toDateString() ===
            this.selectedFirstDate.toDateString()
        );
      }

      if (this.selectedSecondDate) {
        filteredItems = filteredItems.filter(
          (item) =>
            this.parseDate(item.endDate).toDateString() ===
            this.selectedSecondDate.toDateString()
        );
      }

      if (this.searchQuery) {
        const lowerQuery = this.searchQuery.toLowerCase();
        filteredItems = filteredItems.filter((item) =>
          Object.values(item).some((val) =>
            String(val).toLowerCase().includes(lowerQuery)
          )
        );
      }

      return filteredItems;
    },
  },
  methods: {
    parseDate(dateStr) {
      const [day, month, year] = dateStr.split("/");
      return new Date(`${year}-${month}-${day}`);
    },
    openDialog() {
      if (this.createDialogVisible) {
      this.$refs.dialogsCreate.openDialog();
    } else if (this.addDialogVisible) {
      this.$refs.dialogsAdd.openDialog();
    }
    },
  },
};
</script>
  
  <style scoped>
.padding-card {
  padding: 0.5rem;
}
</style>
  