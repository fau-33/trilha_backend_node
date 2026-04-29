import { z } from "zod";

// Idade: inteiro entre 0 e 120
const idade = z.number().int().min(0).max(120);
idade.parse(25); // ✅
idade.parse(25.5); // ❌ não é inteiro
idade.parse(-1); // ❌ menor que 0

// Preço: positivo com no máximo 2 casas decimais
const preco = z.number().positive().multipleOf(0.01);
preco.parse(9.99); // ✅
preco.parse(0); // ❌ não é positivo
preco.parse(9.999); // ❌ não é múltiplo de 0.01

// Porcentagem: entre 0 e 100
const porcentagem = z.number().min(0).max(100);
porcentagem.parse(75.5); // ✅
porcentagem.parse(101); // ❌

// Nota de 0 a 10, com incrementos de 0.5
const nota = z.number().min(0).max(10).multipleOf(0.5);
nota.parse(7.5); // ✅
nota.parse(7.3); // ❌
