const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se ao chamar a função, o método "localStorage.getItem" é chamado', () => {
    getSavedCartItems();
    const actual = localStorage.getItem;

    expect(actual).toHaveBeenCalled();
  });

  it('Testa se ao executar a função, o método "localStorage.getItem" é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems();
    const actual = localStorage.getItem;

    expect(actual).toHaveBeenCalledWith('cartItems');
  });
});
