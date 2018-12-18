/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var teste = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
var teste1 = function(arg) {
    return arg;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
teste1([1,2,3,4,5])[1]
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
var returnIndex = function(arr, num) {
    return arr[num];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var tipos = [null, undefined, true, `oi`, 2];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ? 
returnIndex(tipos, 0);
returnIndex(tipos, 1);
returnIndex(tipos, 2);
returnIndex(tipos, 3);
returnIndex(tipos, 4);
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book(nomeLivro) {
    var obj = {
        livro1: {
            quantidadePaginas: 1,
            autor: 'autor1',
            editora: 'editora1'
        },
        livro2: {
            quantidadePaginas: 2,
            autor: 'autor2',
            editora: 'editora2'
        },
        livro3: {
            quantidadePaginas: 3,
            autor: 'autor3',
            editora: 'editora3'
        }
    };

    return nomeLivro ? obj[nomeLivro] : obj;
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log("O livro livro1 tem " + book('livro1').quantidadePaginas + " páginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro1 é " + book('livro1').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro livro1 foi publicado pela editora " + book('livro1').editora);