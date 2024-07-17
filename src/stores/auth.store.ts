import { defineStore } from 'pinia';
import type {Agent} from "@/models/Agent";
import type {FactionSymbol} from "@/models/Faction";
import {API} from "@/api";
import { useLocalStorage} from "@vueuse/core";

export interface AuthState {
  agentToken: string | null
  agent: Agent | null
  contracts: any[] | null
  faction: FactionSymbol | null
  ships: any[] | null
}

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      agentToken: useLocalStorage('agentToken', null),
      agent: null,
      contracts: null,
      faction: null,
      ships: null,
    }
  },
  actions: {
    async loadShips() {
      if(this.agentToken) {
        try {
          const result = await API.getShipList(this.agentToken);
          if (result.data) {
            this.ships = result.data.data;
          }
        } catch (e) {
          console.log(e);
        }
      }
    },
    async loadAgent() {
      if(this.agentToken) {
        try {
          const result = await API.getAgent(this.agentToken);
          if (result.data) {
            this.agent = result.data.data;
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  },

});