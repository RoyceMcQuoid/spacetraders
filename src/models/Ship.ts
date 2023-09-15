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

export class ShipObject implements Ship {


  constructor(cargo: Cargo, crew: ShipCrew, engine: ShipEngine, frame: ShipFrame, fuel: ShipFuel, modules: ShipModule[], mounts: ShipMount[], nav: ShipNav, reactor: ShipReactor, registration: ShipRegistration, symbol: string) {
    this.cargo = cargo;
    this.crew = crew;
    this.engine = engine;
    this.frame = frame;
    this.fuel = fuel;
    this.modules = modules;
    this.mounts = mounts;
    this.nav = nav;
    this.reactor = reactor;
    this.registration = registration;
    this.symbol = symbol;
  }

  cargo: Cargo;
  crew: ShipCrew;
  engine: ShipEngine;
  frame: ShipFrame;
  fuel: ShipFuel;
  modules: ShipModule[];
  mounts: ShipMount[];
  nav: ShipNav;
  reactor: ShipReactor;
  registration: ShipRegistration;
  symbol: string;
}






























