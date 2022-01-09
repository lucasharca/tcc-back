import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id, name, email, api_key, api_secret, password } = request.body;
    const service  = new UpdateUserService();

    const result = await service.execute({ id, name, email, api_key, api_secret, password });

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}