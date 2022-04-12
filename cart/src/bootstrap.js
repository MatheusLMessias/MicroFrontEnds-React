import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} itens in your cart</div>`
console.log('hello');

document.querySelector('#dev-carts').innerHTML = cartText; //seletor     