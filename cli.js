const chalk = require('chalk');
const pegaArquivo = require('./index');
const caminho = process.argv;
const validaUrls = require('./http-validacao');

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if(caminho[3] === "validar"){
        console.log(chalk.yellow('links validados'), await validaUrls(resultado))
    } else {
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto(caminho);