import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserUpdateRequest = {
  id: string;
  name: string;
  email: string;
  api_key: string;
  api_secret: string;
  password: string;
}

export class UpdateUserService {
  async execute({ id, name, email, api_key, api_secret, password }: UserUpdateRequest) {
    const repo = getRepository(User);
    const user  = await repo.findOne({ where: {
      id
    }});

    if(!user) {
      return new Error("User does note exist");
    }

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.api_key = api_key ? api_key : user.api_key;
    user.api_secret = api_secret ? api_secret : user.api_secret;
    user.password = password ? password : user.password;

    const savedUser = await repo.save(user)

    return savedUser;
  }
}