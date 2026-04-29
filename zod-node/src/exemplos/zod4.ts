import { z } from "zod";

const pattern = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("E-mail inválido!"),
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .gte(18, "Age must be greater than or equal to 18"),
});

const result = pattern.parse({
  name: "Flavio ",
  email: "flavio@gmail.com",
  age: 25,
});

console.log(result);
