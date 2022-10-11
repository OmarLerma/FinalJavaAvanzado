import express from "express";
import morgan from "morgan";
//Routes
import laguageRouts from "./routes/language.routes";

const app = express();

//Settings
app.set("port", 4000)

//Middelwares
app.use(morgan("dev"));
app.use(express.json());

 //Routes
app.use("/api/lenguaje", laguageRouts);


export default app;

