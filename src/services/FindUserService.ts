import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class FindUserService {
  async execute({ email, password }) {
    const repo = getRepository(User);

    const user  = await repo.findOne({ where: {
      email,
      password
    }});
    return user;
  }
}