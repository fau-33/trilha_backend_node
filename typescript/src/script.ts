let numero1 = document.getElementById("number1") as HTMLInputElement;
let numero2 = document.getElementById("number2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLButtonElement;
let res = document.getElementById("resultado") as HTMLDivElement;

function calcular(n1: number, n2: number): number {
  return n1 + n2;
}

botao.addEventListener("click", () => {
  res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
