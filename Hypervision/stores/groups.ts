import { defineStore } from "pinia";
import axios from "axios";
import { type Groups } from "@/types/interfaces";

export const useGroupStore = defineStore("group", {
    state: () => ({
        groups: [] as Groups[],
        group: null as Groups | null,
    }),
    actions: {
        async fetchGroups() {
            try {
                const data = await axios.get<Groups[]>('/files/groups.json')
                this.groups = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

        async fetchGroupById(groupId: number) {
            try {
                if (this.groups.length === 0) {
                    await this.fetchGroups();
                }
                this.group = this.groups.find(x => x.Id === groupId) || null;
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
    }
})