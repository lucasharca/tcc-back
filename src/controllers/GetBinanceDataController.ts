import { Request, Response } from "express";
import { GetDataFromBinanceService } from "../services/binance/GetDataFromBinanceService";

export class GetBinanceDataController {
  async handle(request: Request, response: Response) {
    const service = new GetDataFromBinanceService();

    const result = await service.execute();

    return response.json(result)
  }
}