"use strict";
//Exercício — Tipos Primitivos no TypeScript
//Cenário: Você está cadastrando um usuário em um sistema. Declare as variáveis abaixo com o tipo explícito correto e atribua um valor adequado para cada uma:
//O nome do usuário
let nome = "João";
//A idade do usuário
let idade = 25;
//Se o usuário está ativo no sistema
let ativo = true;
//O saldo da conta (pode ter centavos)
let saldo = 100.5;
//Um identificador único para o usuário (usando Symbol)
let id = Symbol("id");
//O endereço do usuário, que ainda não foi preenchido (ausência intencional)
let endereco = null;
//Uma função chamada exibirPerfil que imprime os dados no console, mas não retorna nada
function exibirPerfil() {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Ativo: ${ativo}`);
    console.log(`Saldo: ${saldo}`);
    console.log(`Id: ${String(id)}`);
    console.log(`Endereço: ${endereco}`);
}
//Uma função chamada lancarErro que sempre lança um erro e nunca retorna
function lancarErro() {
    throw new Error("Erro");
}
//Regras:
//Use tipagem explícita em tudo (: tipo)
//Não use any
//A função do item 7 deve usar pelo menos 2 das variáveis declaradas
