console.log('Desafio da semana #2');
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, 
// passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const total = soma(1, 2) + 5;

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var teste;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue() {
  teste = 10;
  return 'O valor da variável agora é ' + teste;
}

// Invoque a função criada acima.
addValue()

// Qual o retorno da função? (Use comentários de bloco).
/*  */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function sumAndMultiply(arg1, arg2, arg3) {
    if(arg1 === undefined || arg2 === undefined || arg3 === undefined) {
        return 'Preencha todos os valores corretamente';
    }
    return (arg1 * arg2 * arg3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
sumAndMultiply(2, 10)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
sumAndMultiply(2, 10, 1)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//22

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function crazy(arg1, arg2, arg3) {
    let param = [arg1, arg2, arg3].filter(elm => elm !== undefined);
    switch(param.length) {
        case 3:
            return (arg1 + arg2) / arg3;
            break;
        case 2:
            return param[0] + param[1];
            break;
        case 1:
            return param[0];
            break;
        case 0:
            return false;
            break;
        default:
            return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades 
// (com nenhum argumento, com um, com dois e com três.)
// Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
crazy() // false
crazy(10) //10
crazy(10, 20); // 30
crazy(10, 20, 30); // 1