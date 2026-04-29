import { z } from "zod";

const pattern = z.object({
  fuel: z.enum(["gasolina", "diesel", "etanol", "gnv", "eletric", "flex"]),
});

const result = pattern.parse({
  fuel: "diesel",
});

console.log(result);
