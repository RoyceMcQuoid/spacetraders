import { defineStore } from 'pinia';
import type {Agent} from "@/models/Agent";
import type {FactionSymbol} from "@/models/Faction";
import {API} from "@/api";

export interface AuthState {
  agentToken: string | null
  agent: Agent | null
  contracts: any[] | null
  faction: FactionSymbol | null
  ships: any[] | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    agentToken: null,
    agent: null,
    contracts: null,
    faction: null,
    ships: null
  }),
  actions: {
    async loadShips() {
      console.log('loading ships 1');
      if(this.agentToken) {
        try {
          const result = await API.getShipList(this.agentToken);
          console.log('result', result);
          if (result.data) {
            this.ships = result.data.data;
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

});