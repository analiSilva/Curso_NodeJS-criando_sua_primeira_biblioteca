const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
    throw new Error(erro.message);
}
async function checaStatus(arrayUrls) {
    try{
        const arrayStatus = await Promise
        .all(arrayUrls
            .map(async url => {
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`;
        }));
        return arrayStatus;
    } catch(erro){
        manejaErros(erro)
    }
} 
    
function geraArrayUrls(arrayLinks){
   return arrayLinks
    .map(objetoLink => Object
        .values(objetoLink).join())
}
async function validaUrls(arrayLinks){
    const links =  geraArrayUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    //spread operator(...)
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto, 
        status: statusLinks[indice]
    }) )
    return resultados;
}

module.exports = validaUrls;