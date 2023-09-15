export interface ShipFuel {
  current: number,
  capacity: number,
  consumed: FuelConsumption,
}
export interface FuelConsumption {
  amount: number,
  timestamp: Date,
}