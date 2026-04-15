// Usando types nos parâmetros de uma função

function firstLetterUpperCase(name: string): string {
  let firstLetter = name.charAt(0).toUpperCase();
  return firstLetter + name.substring(1);
}

console.log(firstLetterUpperCase("joao"));

// Contextual Typing em funções anônimas

let nomes = ["joao", "maria", "pedro", 90];

nomes.forEach(function (name) {
  if (typeof name === "string") {
    console.log(name.toUpperCase());
  } else {
    console.log(name);
  }
});
