export interface Contract {
  id: string,
  factionSymbol: string,
  type: ContractType,
  accepted: boolean,
  fulfilled: boolean,
  expiration: Date,
  deadlineToAccept: Date,
}

export interface ContractTerms {
  deadline: Date,
  payment: ContractPayment,
  deliver: ContractDeliver[],
}

export interface ContractPayment {
  onAccepted: number,
  onFulfilled: number,
}

export interface ContractDeliver {
  tradeSymbol: string,
  destinationSymbol: string,
  unitsRequired: number,
  unitsFulfilled: number,
}

export enum ContractType {
  Procurement = 'PROCUREMENT',
  Transport = 'TRANSPORT',
  Shuttle = 'SHUTTLE',
}