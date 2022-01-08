import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserUpdateRequest = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UpdateUserService {
  async execute({ id, name, email, password }: UserUpdateRequest) {
    const repo = getRepository(User);
    const user  = await repo.findOne({ where: {
      id
    }});

    if(!user) {
      return new Error("User does note exist");
    }

    user.name = name;
    user.email = email;
    user.password = password;

    const savedUser = await repo.save(user)

    return savedUser;
  }
}