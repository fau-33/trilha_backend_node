import { readFile, unlink, writeFile } from "fs/promises";

const exec = async () => {
  //await unlink("./teste.txt");
  /* const fileName = "./teste.txt";
  const fileContent = await readFile(fileName, "utf-8");

  const list = fileContent.split("\n");
  list.push("Luciana");
  const listTxt = list.join("\n");
  await writeFile(fileName, listTxt); */
};

exec();
