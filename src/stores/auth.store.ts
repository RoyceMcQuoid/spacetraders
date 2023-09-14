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

export const authStore = defineStore('auth', {
  state: () => ({
    agentToken: null,
    agent: null,
    contracts: null,
    faction: null,
    ships: null
  }),
  actions: {
    async registerAgent(symbol: string, faction: Faction) {
      try {
        const agentData = await AuthService.registerAgent(symbol, faction);
        this.agentToken = agentData.token;
        this.agent = agentData.user;
        this.contracts = agentData.contracts;
        this.faction = agentData.user.faction;
        this.ships = agentData.user.ships;
      }
      catch (error) {
        console.log(error);
      }
    },
    async login(agentToken: string) {
      try {
        const agentData = await AuthService.login(agentToken);
        this.agent = agentData.user;
      }
      catch (error) {
        console.log(error);
      }
    }
  }

});