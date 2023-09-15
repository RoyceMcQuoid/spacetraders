export interface ShipCrew {
  current: number,
  required: number,
  capacity: number,
  rotation: CrewRotation,
  morale: number,
  wages: number,
}