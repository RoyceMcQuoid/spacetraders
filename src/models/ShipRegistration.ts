import {FactionSymbol} from "@/models/Faction";
import {ShipRole} from "@/constants/ShipRoles";

export interface ShipRegistration {
  name: string,
  factionSymbol: FactionSymbol,
  role: ShipRole
}