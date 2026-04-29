import z from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18).max(120),
  status: z.boolean(),
  characteristcs: z.array(
    z.object({
      name: z.string(),
      value: z.number(),
    }),
  ),
});

type User = z.infer<typeof schema>;

let data: User = {
  name: "Flávio",
  email: "flavio@teste.com",
  age: 90,
  status: true,
  characteristcs: [
    { name: "Mana", value: 99 },
    { name: "Força", value: 10 },
  ],
};

const result = schema.parse(data);

console.log(result);
