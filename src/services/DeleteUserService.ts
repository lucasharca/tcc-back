import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class DeleteUserService {
  async execute({ id }) {
    const repo = getRepository(User);

    if(!(await repo.findOne(id))){
      return new Error("User does not exist");
    }

    const user  = await repo.delete(id);
    return { message: "user deleted" };
  }
}