import {API} from "@/api";
import {Fail, Result} from "@/utils/ApiResults";
import type {Agent} from "@/models/Agent";

export class AuthService {
  public static async registerAgent(symbol: string, faction: string) {
    return await API.registerAgent({
      symbol: symbol,
      faction: faction,
    });
  }
  public static async getAgent(token: string): Promise<Result<undefined, Agent>> {
    const response = await API.getAgent(token);
    if(response.data){
      return response.data;
    }
    if(response.error){
      return Fail({
        message: response.error.message,
        code: response.error.code,
      });
    }
    return Fail({message: "Unknown error"});
  }
}