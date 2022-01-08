import { Request, Response } from "express";
import { FindUserService } from "../services/FindUserService";

export class FindUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const service  = new FindUserService();

    const result = await service.execute({ email, password });

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}