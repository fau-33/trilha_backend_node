import express, { type RequestHandler } from "express";
import produtosRouter from "./produtos.js";
import voosRouter from "./voos.js";
import { interferir } from "../middlewares/interferir.js";

const router = express.Router();

//router.use(interferir);

router.use("/produtos", produtosRouter);
router.use("/voos", voosRouter);

router.get("/ping", (req, res) => {
  console.log("Executando o Ping");
  res.json({ pong: true });
});

router.get("/", (req, res) => {
  let name: string = "Flávio";
  let idade: number = 43;
  res.json({ name, idade });
});

export default router;
