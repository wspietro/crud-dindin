
// Criando array de cursos

let cursos = [{
  id: 0,
  titulo: 'Investimento para Iniciantes',
  descricao: 'Esse curso é para seu primeiro contato com Investimentos!',
  professor: 'Jane Doe',
  listaAulas: [],
},
{
  id: 1,
  titulo: 'Investimento Intermediário',
  descricao: 'Esse curso é para aqueles que já possuem conhecimento na área!',
  professor: 'Clark Kent',
  listaAulas: [],
},

];

// Função para ler cursos
function listarCursos() {

  let htmlCursos = "";

  cursos.map((cursos, indice) => {
    htmlCursos += `
      <article class="card">
        <h2>${cursos.titulo}</h2>
        <p>${cursos.descricao}</p>
        <p>Professor: ${cursos.professor}</p>
      </article>
    `
  })
  // selecionando elemento que irá englobar lista
  let painelCursos = document.querySelector('.painel-cursos');
  console.log(painelCursos)
  // Inserindo lista de cursos no html
  painelCursos.innerHTML = htmlCursos;
  console.log(cursos)
}

// Função criar aula

// Em javascript, a comparação de == é igual a ===, com a diferença de que == fará typecasting(ou seja, converter um tipo no outro).Por exemplo '1' == 1 é true, ao passo que 1 === '1' é false.Recomenda - se sempre usar === porque as regras de typecasting do javascript são confusas e sujeitas a erro.value

// Em javascript, a comparação é sempre feita por referência na memória.Disso decorrem as seguintes conclusões:

// [] === [] é false; isto se dá porque cada vez que se usa`[` e`]` criamos um array literal, é um novo array na memória, e portanto naquela comparação existem 2 arrays novos, um distinto do outro _na memória_.

// Caso se quisesse compará - los em termos de valores(ex: tem eles os mesmos elementos e na mesma sequência), recomenda - se utilizar uma biblioteca como lodash e  sua função _.isEqual()

// Ciente disso, importante lembrar que um array de objetos como`const array = [{name: "Fulano"}, {name: "Fulano"}]` contém na verdade, neste exemplo, 3 referências na memória; uma é o array que encapsula os objetos, e dentro dele apontando para 2 objetos distintos(pois, tal como explicado acima, temos 2 literais de objetos, portanto 2 objetos diferentes foram criados na memória).

// Isto significa, primeiro, que array[0] === array[1] é false, pois são objetos diferentes na memória; se houver o desejo de comparar suas chaves / valores, socorra - se do lodash _.isEqual, que serve também para objetos e é deep.

// Isto também significa que se definirmos`const array2 = array.map(obj => obj)`, teremos que, primeiro, array2 === array1 é false, pois são 2 arrays diferentes na memória, já que.map retorna um NOVO array.

//   Porém, embora um NOVO array(ou seja, o array2 pode ter mais ou menos elementos, o array1 pode ter mais ou menos elementos, etc), os seus elementos foram montados com uma referência aos objetos do array 1(veja que arrow function do .map acima simplesmente retornou o próprio objeto que lhe foi passado, portanto é uma referência ao mesmo objeto na memória).

// Dica: se não há, em javascript, alguma indicação expressa de clonagem, estamos referindo o mesmo objeto na memória.

// Ciente disso, array2[0] === array[0], pois eles são a mesma referência na memória.

// Caso quisessemos clonar array em array2 mas sem manter qualquer referência aos objetos iniciais, socorreriamos de um lodash`const array2 = _.cloneDeep(array)`, pois o cloneDeep, como o nome já diz, faz uma clonagem`deep` de todos os elementos.

// Por fim, é importante ter ciência que seria possível usar um Object.assign tal como`const array2 = array.map(object => Object.assign({}, object))`; aqui também teríamos um NOVO Array(porque.map sempre retorna novo array), mas os elementos de array2 também são novos, pois Object.assign recebe 2 argumentos, um alvo e uma origem, e neste caso passamos como alvo um objeto NOVO, literal, em branco({}), e copiamos para ele as chaves / valores do objeto alvo`object`. 

// Apenas atenção que Object.assign atua de forma`shallow`, ou seja, não avança para os nested em camadas.Ou seja, se um dos objetos fosse { name: "Felipe", interesses: ["programacao", "esportes"] }, o Object.assign criaria um novo objeto(portanto poder - se - ia alterar.name e eles seriam diferentes em cada um dos objetos), mas o ARRAY que está na chave`interesses` de cada um dos 2 objetos é, na verdade, O MESMO ARRAY na memória, se alterado em 1, altera - se no outro.value

// Neste caso, caso se tivesse utilizado um _.cloneDeep, os arrays seriam duplicados como novos objetos também.



function adicionarAula(idCurso, linkAula) {
  let cursoEncontrado = cursos.find(curso => {
    return curso.id === idCurso
  })
  cursoEncontrado.listaAulas.push(linkAula)
}

adicionarAula(0, 'teste')
console.log(cursos)


// Cadastro de curso no HTML
let btnEnviar = document.querySelector('#btnEnviar');

// Capturar campos formuiluário
btnEnviar.addEventListener('click', evento => {
  evento.preventDefault();

  let tituloInput = document.querySelector('#titulo');
  let descricaoInput = document.querySelector('#descricao');
  let professorInput = document.querySelector('#professor');


  // Adicionando novo curso ao clicar
  cursos.push({
    id: cursos.length,
    titulo: tituloInput.value,
    descricao: descricaoInput.value,
    professor: professorInput.value
  })

  tituloInput.value = ""
  descricaoInput.value = ""
  professorInput.value = ""

  // atualizar cursos no html
  listarCursos();
})

// atualizar html ao carregar a página
listarCursos();







