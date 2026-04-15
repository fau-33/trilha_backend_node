import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ list: ["Produto 1", "Produto 2", "Produto 3"] });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, produto: "Teclado XYZ", preco: 100.99 });
});

export default router;
