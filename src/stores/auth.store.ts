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
  actions: {}

});