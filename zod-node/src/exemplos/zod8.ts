import { z } from "zod";

const pattern = z.object({
  name: z.string().transform((val) => val.toUpperCase()),
  email: z
    .string()
    .email()
    .transform((val) => val.split("@")[1]),
  tecnologias: z.string().array(),
});

const result = pattern.parse({
  name: "flavio",
  email: "flavio@f10web.com.br",
  tecnologias: ["node", "react", "typescript", "c"],
});

console.log(result);
