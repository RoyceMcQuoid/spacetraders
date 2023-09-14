import { defineStore } from 'pinia';
import type {Faction} from "@/constants/factions";
import {AuthService} from "@/services/authService";
import type {Agent} from "@/models/Agent";

export interface AuthState {
  agentToken: string | null
  agent: Agent | null
  contracts: any[] | null
  faction: Faction | null
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
    async registerAgent(symbol: string, faction: Faction) {
      try {
        const response = await AuthService.registerAgent(symbol, faction);
        if(response.data) {
          this.agentToken = response.data.token;
          this.agent = response.data.user;
          this.contracts = response.data.contracts;
          this.faction = response.data.user.faction;
          this.ships = response.data.user.ships;
        }
      }
      catch (error) {
        console.log(error);
      }
    },
    async getAgent(token: string) {
      try {
        const response = await AuthService.getAgent(token);
        console.log('response: ', response.data.data);
        if(response.data) {
          this.agent = response.data.data;
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  }

});