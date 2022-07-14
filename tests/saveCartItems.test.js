const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se ao executar a função com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado', () => {
    const actual = localStorage.setItem;
    saveCartItems('<ol><li>Item</li></ol>');

    expect(actual).toHaveBeenCalled();
  });

  it('Testa se ao executar a função com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado com os parâmetros "cartItems" e o argumento de "saveCartItems", respectivamente', () => {
    saveCartItems("<ol><li>Item</li></ol>");

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', "<ol><li>Item</li></ol>");
  });
});