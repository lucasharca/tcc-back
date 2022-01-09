import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { FindUserController } from './controllers/FindUserController';
import { GetUsersController } from './controllers/GetUsersController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { GetBinanceDataController } from './controllers/GetBinanceDataController';

const routes = Router();

//User Routes
routes.post("/user", new CreateUserController().handle);
routes.get("/users", new GetUsersController().handle);
routes.get("/login", new FindUserController().handle);
routes.put("/user", new UpdateUserController().handle);
routes.delete("/user", new DeleteUserController().handle);

//Binance Routes
routes.get("/data", new GetBinanceDataController().handle);


export default routes;