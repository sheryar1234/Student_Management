import "./db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { adminRouter } from "./Routes/auth.js";
import { StudentRoutes } from "./Routes/StudentRoutes.js";
import { TArouter } from "./Routes/TAauth.js";
import { Facultyrouter } from "./Routes/Facultyauth.js";
import MarksRouter from "./Routes/MarksRoutes.js";

const app = express();
dotenv.config();


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", adminRouter);
app.use("/student", StudentRoutes);
app.use("/ta", TArouter);
app.use("/faculty", Facultyrouter);
app.use("/marks", MarksRouter);


app.listen(process.env.PORT, () => {
  console.log("Server Created");
});


