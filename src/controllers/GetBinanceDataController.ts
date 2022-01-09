import { Request, Response } from "express";
import { GetDataFromBinanceService } from "../services/binance/GetDataFromBinanceService";

export class GetBinanceDataController {
  async handle(request: Request, response: Response) {
    const {api_key, api_secret} = request.body;
    const service = new GetDataFromBinanceService();

    const result = await service.execute({apiKey: api_key, apiSecret: api_secret});

    if ( result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}