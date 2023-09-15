import type {ShipRegistration} from "@/models/ShipRegistration";
import type {ShipNav} from "@/models/ShipNav";
import type {ShipCrew} from "@/models/ShipCrew";
import type {ShipFrame} from "@/models/ShipFrame";
import type {ShipReactor} from "@/models/ShipReactor";
import type {ShipModule} from "@/models/ShipModule";
import type {ShipMount} from "@/models/ShipMount";
import type {Cargo} from "@/models/ShipCargo";
import type {ShipEngine} from "@/models/ShipEngine";
import type {ShipFuel} from "@/models/ShipFuel";

export interface Ship {
  symbol: string,
  registration: ShipRegistration,
  nav: ShipNav,
  crew: ShipCrew,
  frame: ShipFrame,
  reactor: ShipReactor,
  engine: ShipEngine,
  modules: ShipModule[],
  mounts: ShipMount[],
  cargo: Cargo,
  fuel: ShipFuel,
}































