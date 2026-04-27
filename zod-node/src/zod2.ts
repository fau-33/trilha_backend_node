import z from "zod";

// Validação de stringsm Validations e transformations
const pattern = z.object({
  id: z.string().uuid(),
  name: z.string().toUpperCase().min(2).max(20),
  email: z.string().email("Digite um email válido").toLowerCase(),
  description: z.string().trim().max(100, "Descrição muito longa"),
  url: z.string().url("Digite uma URL válida"),
  emoji: z.string().emoji(),
  regra: z.string().regex(/^[a-z][0-9]$/),
  imagem: z.string().endsWith(".jpg", "Digite uma imagem .jpg"),
  ip: z.string().ipv4("Digite um IP válido"),
});

const result = pattern.parse({
  id: "7b3681ba-c1f4-4d9c-94a6-8f3a3f73f73f",
  name: "Flávio",
  email: "FLAVIO@gmail.com",
  description: "    aqui é uma messagem teste   ",
  url: "https://google.com",
  emoji: "😃",
  regra: "a1",
  imagem: "imagem.jpg",
  ip: "192.168.1.1",
});

console.log(result);
