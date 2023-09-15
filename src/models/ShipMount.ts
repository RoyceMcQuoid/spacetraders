import type {ShipComponent} from "@/models/ShipComponent";

export interface ShipMount extends ShipComponent {
  strength: number,
  deposits: number,
}