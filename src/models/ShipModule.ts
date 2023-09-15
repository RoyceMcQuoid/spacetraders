import type {ShipComponent} from "@/models/ShipComponent";

export interface ShipModule extends ShipComponent {
  capacity: number,
  range: number,
}