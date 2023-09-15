import type {ShipNavRouteWaypoint} from "@/models/ShipNavRouteWaypoint";

export interface ShipNavRoute {
  destination: ShipNavRouteWaypoint,
  departure: ShipNavRouteWaypoint,
  departureTime: Date,
  arrival: Date,
}