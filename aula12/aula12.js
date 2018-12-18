(function(){

    /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  // ?
  var person = {
    name: 'Lucas',
    age: 21,
    weight: 96,
    birthday: '23/08/1997'
  };


  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
 console.log( 'Propriedades de "person":', Object.keys(person) );

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({
    name: 'Livro 1',
    pages: 1
  });

  books.push({
    name: 'Livro 2',
    pages: 2
  });

  books.push({
    name: 'Livro 3',
    pages: 3
  });


  /*
  Mostre no console todos os livros.
  */
 console.log( '\nLista de livros:', books );


  /*
  Remova o último livro, e mostre-o no console.
  */
 console.log( '\nLivro que está sendo removido:', books.pop().name );


  /*
  Mostre no console os livros restantes.
  */
 console.log( '\nAgora sobraram somente os livros:', books  );

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log( '\nLivros em formato string:', JSON.stringify(books) );

  /*
  Mostre os livros nesse formato no console:
  */
 console.log( '\nLivros em formato string:', JSON.stringify(books) );

  /*
  Converta os livros novamente para objeto.
  */
  // ?
  console.log( '\nAgora os livros são objetos novamente:', JSON.parse(JSON.stringify(books)) );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:

  */
  for(let i = 0; i < books.length; i++) {
    for(let prop in books[i]) {
      console.log(`Propriedade`, prop, `valor:`, books[i][prop]);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var arr = ['l', 'u', 'c', 'a', 's', 'lucas'];
  console.log( '\nMeu nome é:', arr.join(''));

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  // ?



  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  // ?
  console.log( '\nMeu nome invertido é:', arr.reverse().join(``) );

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( '\nAgora em ordem alfabética:', arr.sort() );
  //letras maiusculas vem antes das minusculas na hora de "sortea".

}());
