import faker from 'faker';

 
const mount = (el) =>{ //mount recebe uma referência a um elemento HTML, 
//Dentro da função, faremos tudo o que for necessário para iniciar nosso aplicativo e produzir algum HTML e renderizá-lo ou exibi-lo dentro desse elemento.
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`; 
  }
  
  el.innerHTML = products; //seletor   
}

export { mount }; //Export a funcao para ser usada em outro ambiente

if(process.env.NODE_ENV === 'development'){ //garantindo que estamos executando o projeto no modo de desenvolvimento
  
  const el = document.querySelector('#dev-products'); //verificação para decidir se estamos ou não executando produtos isoladamente
  //compara com a chamada do HTML do products

  if(el){//assumindo que a chamada HTML do container é diferente do products, só caira nessa condicao se for isolado
    
    mount(el)//renderiza a funcao mount isoladamente no products
  }

}


