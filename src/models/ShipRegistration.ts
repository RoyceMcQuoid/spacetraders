import {FactionSymbol} from "@/models/Faction";
import {ShipRole} from "@/models/Ship";


export interface ShipRegistration {
  name: string,
  factionSymbol: FactionSymbol,
  role: ShipRole
}