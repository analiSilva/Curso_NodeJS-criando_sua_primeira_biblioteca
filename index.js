const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  while((temp = regex.exec(texto)) !== null){
    arrayResultados.push({ [temp[1]]: temp[2] })
  }

  return(arrayResultados)
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoArquivo){
  const encoding = "utf-8";
  try{
    const texto = await fs.promises.readFile(caminhoArquivo, encoding)
    console.log(extraiLinks(texto))
  } catch (erro) {
    trataErro(erro)
  } 
}

/* function pegaArquivo(caminhoArquivo){
  const encoding = "utf-8";
  fs.promises
  .readFile(caminhoArquivo, encoding)
  .then((texto) => console.log(chalk.blue(texto)))
  .catch((erro) => trataErro(erro))
} */

/* function pegaArquivo(caminhoArquivo) {
  const encoding = "utf-8"
  fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
    if(erro) {
      trataErro(erro);
    }
    console.log(chalk.green(texto))
  })
} */

pegaArquivo('./arquivos/texto1.md')