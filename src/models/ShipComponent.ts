import type {ComponentRequirements} from "@/models/ComponentRequirements";

export interface ShipComponent {
  symbol: string,
  name: string,
  description: string,
  requirements: ComponentRequirements,
}