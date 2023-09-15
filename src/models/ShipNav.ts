import type {RouteStatus} from "@/constants/RouteStatus";
import type {FlightMode} from "@/constants/FlightMode";
import type {ShipNavRoute} from "@/models/ShipNavRoute";
export interface ShipNav {
  systemSymbol: string,
  waypointSymbol: string,
  route: ShipNavRoute,
  status: RouteStatus,
  flightMode: FlightMode,
}