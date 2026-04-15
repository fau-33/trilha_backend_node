import express from "express";
import produtosRouter from "./produtos.js";
import voosRouter from "./voos.js";

const router = express.Router();

router.use("/produtos", produtosRouter);
router.use("/voos", voosRouter);

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

router.get("/", (req, res) => {
  let name: string = "Flávio";
  let idade: number = 43;
  res.json({ name, idade });
});

export default router;
