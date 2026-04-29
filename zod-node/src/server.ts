import express from "express";
import { z } from "zod";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/ping", (req, res) => {
  res.json({ pong: true });
});

server.post("/user", (req, res) => {
  const userSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
  });

  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: "Dados inválidos!" });
  }

  const { name, email, age } = result.data;

  console.log("Dados recebidos: ");
  console.log(name, email, age);

  res.status(201).json({ result: "Tudo ok" });
});

server.listen(3000, () => {
  console.log("Servidor rodando: http://localhost:3000");
});
