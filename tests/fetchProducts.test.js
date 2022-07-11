require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se é uma função', () => {
    const actual = typeof fetchProducts;
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  it('Testa se fetch é chamada quando executar a função com o argumento computador', async () => {
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se a função fetch utiliza o endpoint correto', async () => {
    await fetchProducts('computador');
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

    expect(fetch).toHaveBeenCalledWith(expected);
  });

  it('Testa se o retorno da função com o argumento computador é igual ao objeto computadorSearch', async () => {
     const actual = await fetchProducts('computador');
     const expected = computadorSearch;

     expect(actual).toEqual(expected);
  });

  it('Testa se não for passado nenhum argumento, retorna um erro', async () => {
    const actual = await fetchProducts();

    expect(actual).toEqual(new Error('You must provide an url'))
  });
});
