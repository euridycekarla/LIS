<!--Importação de itens do arquivo dataset.js,  para ser aplicado no código.-->
import itens from './model/dataset.js';

<!--Importação de foodsModel do arquivo foods.js para ser aplicado no código.-->
import foodsModel from './model/foods.js';

<!--os itens de foodsModel será carregado pela função load.-->
foodsModel.load(itens);
<!-- variável atribuída , e readAll() será a função executada em foodsModel-->
let foods = foodsModel.readAll();
<!-- função initFoodsCard()  que irá criar os cards do cardápio na página, por meio da creatFoodCardItem(item)-->
function initFoodsCard () {
  
  for (let item of foods) {

    const view = createFoodCardItem(item);
    
  <!-- itensCardapio irá capturar os elementos por meio do id, para ser adicionado posteriormente.-->
    //let itensCardapio = document.querySelector('.itens-cardapio');
    
    <!-- os itens serão adicionados na página em uma posição específica, assim como retrata no ('beforeende',view).-->
    
    let itensCardapio = document.getElementById("itens-cardapio");
    itensCardapio.insertAdjacentHTML('beforeend', view);
  }
}
<!-- função de criar itens no cardapio por ação do bootstrap  e ser exibido na página.-->
function createFoodCardItem (item) {

    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;
<!--retorno na constante view, na estrutura html-->
    return view;
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
const foodForm = document.getElementById("foodForm");
<!-- o evento onsubmint irá acionar o botão "Adicionar" para ser adicionado item no cardapio-->
foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.
  event.preventDefault();
<!-- o Object.fromEntries irá transformar uma lista em objeto, nesse caso irá aparecer o elemento passado para foodsModel.creat(newFood). -->
  let newFood = Object.fromEntries(new FormData(foodForm));
  foodsModel.create(newFood);
<!-- a constante irá capturar o novo elemento criado, capturar o id e colocar em um lugar específico no html: ('beforeend', foodCard)
  const foodCard = createFoodCardItem(newFood);
  let itensCardapio = document.getElementById("itens-cardapio");
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);
}
<!-- todos os itens do cardápio serão carregados, finalizando a ação.-->
initFoodsCard();
