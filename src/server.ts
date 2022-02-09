import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { DBConnection } from "./database";
import routes from "./routes";

const dbConnect = new DBConnection()

dbConnect.connect()

const app = express();


app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("server running on port: 3333"));