import type {ShipComponent} from "@/models/ShipComponent";

export interface ShipFrame extends ShipComponent {
  condition: number,
  moduleSlots: number,
  mountingPoints: number,
  fuelCapacity: number,
}