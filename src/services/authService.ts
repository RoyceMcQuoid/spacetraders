import {API} from "@/api";

export class AuthService {
  public static async registerAgent(callSign: string, faction: string) {
    return await API.registerAgent({
      symbol: callSign,
      faction: faction,
    });
  }
  public static async login(agentToken: string) {
    return await API.registerAgent({
      symbol: callSign,
      faction: faction,
    });
  }
}