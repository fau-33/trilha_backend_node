import { writeFile } from "fs/promises";

const exec = async () => {
  console.log("Iniciando...");

  const list = ["Flávio", "Maria", "Luciana"];
  const listTxt = list.join("\n");

  await writeFile("./teste.txt", listTxt);

  console.log("Arquivo criado com sucesso");
};

exec();
