// type em funções e objetos

type User = {
  nome: string;
  idade: number;
  matriculado: boolean;
};

function resumo(usuario: User) {
  return `Nome: ${usuario.nome} - Idade: ${usuario.idade} - Matriculado: ${usuario.matriculado}`;
}

let u = resumo({
  nome: "joao",
  idade: 25,
  matriculado: true,
});

console.log(u);

// interface

interface Usuario {
  nome: string;
  idade: number;
  matriculado: boolean;
}

function resumo2(usuario: Usuario) {
  return `Nome: ${usuario.nome} - Idade: ${usuario.idade} - Matriculado: ${usuario.matriculado}`;
}

let u2 = resumo2({
  nome: "Maria",
  idade: 25,
  matriculado: true,
});

console.log(u2);

export {};

// type assertion

let nome: any = "joao";

nome = 25;

let idade = nome as number;

console.log(idade);

// types literais

type Status = "online" | "offline";

function status(usuario: Status) {
  return `Status: ${usuario}`;
}

let u3 = status("online");

console.log(u3);

// inferência de tipos

function fazerRequisicao(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
) {
  console.log(`Fazendo requisição para ${url} com método ${method}`);
}

type MethodDetails = {
  url: string;
  method: "GET" | "POST";
};

let req: MethodDetails = {
  url: "https://google.com",
  method: "GET",
};

req.method = "POST";

fazerRequisicao(req.url, req.method);

// type function

type MathFunction = (a: number, b: number) => number;

let soma: MathFunction = (a, b) => a + b;
let subtracao: MathFunction = (a, b) => a - b;
let multiplicacao: MathFunction = (a, b) => a * b;
let divisao: MathFunction = (a, b) => a / b;

console.log(soma(1, 2));
console.log(subtracao(1, 2));
console.log(multiplicacao(1, 2));
console.log(divisao(1, 2));

// function sem retorno void

function removerElemento(arr: number[], index: number): void {
  arr.splice(index, 1);
}

let arr = [1, 2, 3, 4, 5];
removerElemento(arr, 2);
console.log(arr);
