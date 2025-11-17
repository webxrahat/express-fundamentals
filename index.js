import express from "express";
const PORT = 8000;

const app = express();

app.listen(port, () => console.log(`the app is runing on ${port} port`));
