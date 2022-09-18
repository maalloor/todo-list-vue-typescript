import express from "express";
import morgan from "morgan";
import cors from 'cors';
import taskApi from "./routes/api";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api", taskApi);

export default app;