import { defineStore } from 'pinia';
import type {Agent} from "@/models/Agent";
import type {FactionSymbol} from "@/models/Faction";

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
    saveAgentRegistration(registrationData) {
      this.agentToken = registrationData.token;
      this.agent = registrationData.user;
      this.contracts = registrationData.contracts;
      this.faction = registrationData.user.faction;
      this.ships = registrationData.user.ships;
    }
  }

});