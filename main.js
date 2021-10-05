const capitais_regiao = require('./data/capitais_regiao.json');
const rotas_unidirecionais = require('./data/rotas_unidirecionais.json');
const regioes = require('./data/regioes.json');
// const fs = require('fs');

// Resultado do mapeamento das rotas unidirecionais, precisaria criar uma funcão para fazê-lo
// const mapeia rotas_unidirecionais, resultado abaixo:
const regiao_regiao = {
    "Norte": "Nordeste",
    "Sudeste": "Centro, Sul",
}
/* Precisamos:
    - Rota que chegue no Sudeste
    - Rota que chegue no Norte
    - Rota que saia do Nordeste
    - Rota que saia do Centro
    - Rota que saia do Sul
*/
// ou seja precisamos que o objeto regiao_regiao tenha as keys(Nordeste, Centro e Sul)
// e tenha em alguma delas as chaves Sudeste e Norte

/* funcionaria
    Nordeste -> Sudeste
    Sul -> Sudeste
    Centro -> Norte
*/

const getOriginByDestination = (object, value) => {
    return Object.keys(object).find((key) => object[key].includes(value) )
}

// mostra que não existe nenhuma rota que chega no sudeste, diretamente
console.log(getOriginByDestination(regiao_regiao, "Sudeste"));

// mostra que existe rota que chega no centro, diretamente
console.log(getOriginByDestination(regiao_regiao, "Centro"));


const check_origin_exists = (object, value) => {
    return Object.keys(object).includes(value);
}
// mostra que existe rota saindo do Norte
console.log(check_origin_exists(regiao_regiao, "Norte"))

// mostra que não existe rota saindo do Sul
console.log(check_origin_exists(regiao_regiao, "Sul"))

// Precisamos de uma função pra checar se é possivel sair de uma região e ir para outra.
const check_route_regiao_regiao = (origem, destino, conexao_regiao) => {
    // aqui vamos identificar de que regiao é cada capital e verificar se existe uma rota
    // vamos utilizar a variavel 'regiao_regiao' para verificar se existe conexao.

    //1- primeiro passo: Verificar se é possivel sair da regiao(capital) de origem, ou seja se existe uma chave com valor da regiao na variavel regiao_regiao
    // para isso usamos a funcao check_origin_exists()

    //2- verificar se é possivel chegar na regiao de destino, verificando se existe alguma chave que tenha o o valor de destino como value
    // para isso utilizamos a funcao getOriginByDestination

    /*3 - Caso seja possivel sair da origem e chegar no destino, verificar se é uma rota direta.
        Se existir uma rota direta, ok,
        Se não existir uma rota direta, verificar se existe uma rota intermediaria.
        Esse é um loop
    */

    //4 - Finalmente Caso não exista a rota, direta ou composta chamar uma função para criar ela
}

const criar_rota = (origem, destino) => {
    // escrever no arquivo rotas_unidirecionais com uma capital de destino e uma de origem
    // chamar o metodo para mapear as rotas novamente
}

// aqui vamos utilizar o array 'regioes'
const check_full_routes = () => {
    // utilizando essa função checa se é possivel sair de cara região e chegar em cada região
    // chamando as duas funcoes acima, e criando as rotas quando necessaria
    // vamos contar quantas vezes foi chamada funcao de criar rota
    // finalmente retornar o valor numerico de quantas rotas foram criadas
}