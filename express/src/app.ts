import express, { Application } from "express";
import dotenv from "dotenv";
import routes from "./routes/index";
import path from "path";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.set("view engine", "pug");
app.set("views", "./src/views");
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/routes", routes);

routes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
