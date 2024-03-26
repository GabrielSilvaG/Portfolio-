async function buscarDadosPerfil() { /* async function buscarDadosPerfil = Define uma função assíncrona chamada */

    const url = 'https://raw.githubusercontent.com/GabrielSilvaG/Portfolio-/master/data/profile.json?token=GHSAT0AAAAAACOYBXIJZD4OWNKTNA45EPVQZQDFJQQ' /*const url = Declara uma constante chamada url que contém o endereço da API de onde os dados serão buscados.*/
    const fetching = await fetch(url) /*const fetching = await fetch(url) = Usa a função fetch para fazer uma requisição HTTP para a URL especificada. O await faz com que o JavaScript espere até que a requisição seja concluída antes de prosseguir.*/
    return await fetching.json() /*return await fetching.json() = Converte a resposta da requisição em JSON utilizando o método .json(). O await aqui também é usado para esperar que essa conversão seja concluída antes de retornar o resultado da função.*/
}