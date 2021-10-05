const capitais_regiao = require('./data/capitais_regiao.json')
const rotas_unidirecionais = require('./data/rotas_unidirecionais.json')

// Resultado do mapeamento das rotas unidirecionais, precisaria criar uma funcão para fazê-lo
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
    
    // primeiro passo: Verificar se é possivel sair da regiao(capital) de origem, ou seja se existe uma chave com valor da regiao na variavel regiao_regiao
    // verificar se é possivel chegar na regiao de destino, verificando se existe alguma chave que tenha o o valor de destino como value
}



