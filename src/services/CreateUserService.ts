import { getRepository } from "typeorm";
import { User } from "../entities/User";

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: CreateUserRequest) : Promise<User | Error> {
    const repo = await getRepository(User);

    console.log("got in here!")
    if(await repo.findOne({email})){
      return new Error("User already exists")
    }

    const user = repo.create({
      name, 
      email,
      password
    })

    await repo.save(user);
    return user;
  }
}