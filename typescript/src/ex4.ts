// types em objetos
function resumo(usuario: {
  nome: string;
  idade?: number;
  matriculado?: boolean;
}) {
  if (usuario.idade !== undefined) {
    return `Nome: ${usuario.nome} - Idade: ${usuario.idade} - Matriculado: ${usuario.matriculado}`;
  } else {
    return `Nome: ${usuario.nome}, tudo bem?`;
  }
}

let u = {
  nome: "joao",
  idade: 25,
  matriculado: true,
};

console.log(resumo(u));

// Union types
function mostrarIdade(idade: number | string) {
  console.log(`Idade: ${idade}`);
}

mostrarIdade(25);
mostrarIdade("25");
