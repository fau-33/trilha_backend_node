import { z } from "zod";

// 1. Schema do dado que a API retorna
const UsuarioSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  website: z.string(),
});

// 2. Schema da Promise
const UsuarioPromiseSchema = z.promise(UsuarioSchema);

// 3. Função que busca e valida
async function buscarUsuario(id: number) {
  const promessa = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());

  // valida que é uma Promise e que o valor resolvido bate com o schema
  const usuario = await UsuarioPromiseSchema.parse(promessa);

  return usuario;
}

// 4. Chamando a função
buscarUsuario(10).then((usuario) => {
  console.log(usuario.id);
  console.log(usuario.name);
  console.log(usuario.email);
  console.log(usuario.phone);
  console.log(usuario.website);
});
