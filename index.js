import express from "express";
import rootApp from "./src/app.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
const PORT = 8000;

const app = express();
app.use(express.json());

rootApp(app);
app.use(errorHandler);

app.listen(PORT, () => console.log(`the app is runing on ${PORT} port`));
