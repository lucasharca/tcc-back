import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { FindUserController } from './controllers/FindUserController';
import { GetUsersController } from './controllers/GetUsersController';
import { UpdateUserController } from './controllers/UpdateUserController';

const routes = Router();

routes.post("/user", new CreateUserController().handle);
routes.get("/users", new GetUsersController().handle);
routes.get("/login", new FindUserController().handle);
routes.put("/user", new UpdateUserController().handle);
routes.delete("/user", new DeleteUserController().handle);

export default routes;