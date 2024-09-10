import { defineStore } from "pinia";
import axios from "axios";
import { type User } from "@/types/interfaces";

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [] as User[],
        user: null as User | null,
    }),
    getters: {

    },
    actions: {
        async fetchUsers() {
            try {
                const data = await axios.get<User[]>('/files/users.json')
                this.users = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

        async fetchUserById(userId: number) {
            try {
                if (this.users.length === 0) {
                    await this.fetchUsers();
                }
                this.user = this.users.find(x => x.Id === userId) || null;
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})