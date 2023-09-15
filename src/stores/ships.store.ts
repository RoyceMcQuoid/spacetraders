import { defineStore } from 'pinia';
import type {Ship} from "@/models/Ship";

export interface ShipsState {
  ships: Ship[] | null
}

export const useShipsStore = defineStore('ships', {
  state: (): ShipsState => ({
    ships: null,
  }),
  actions: {}

});