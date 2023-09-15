import type {CargoGood} from "@/models/Ship";

export interface Cargo {
  capacity: number,
  units: number,
  inventory: CargoGood[],
}