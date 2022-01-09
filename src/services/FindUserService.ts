import { getRepository } from "typeorm";
import { User } from "../entities/User";
import jwt from "jsonwebtoken";
import config from "../config/auth";

export class FindUserService {
  async execute({ email, password }) {
    const repo = getRepository(User);

    const user  = await repo.findOne({ where: {
      email,
      password
    }});

    if(!user) {
      return new Error("User not found")
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: (1000 * 60 * 60 * 24 * 7)
    })

    return { token, user };
  }
}