import { z } from "zod";

const person = z.object({
  name: z.string(),
  age: z.union([z.number(), z.string()]),
});

const employee = z.object({
  role: z.string(),
  salary: z.number().optional(),
});

const employeePerson = z.intersection(person, employee); //person.and(employee);

const result = employeePerson.parse({
  name: "Flavio",
  age: 25,
  role: "Developer",
});

console.log(result);
