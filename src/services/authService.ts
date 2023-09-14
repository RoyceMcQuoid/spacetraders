import {API} from "@/api";

export class AuthService {
  public static async registerAgent(symbol: string, faction: string) {
    return await API.registerAgent({
      symbol: symbol,
      faction: faction,
    });
  }
  public static async login(agentToken: string) {
    return await API.getAgent({
      token: agentToken,
    });
  }
}