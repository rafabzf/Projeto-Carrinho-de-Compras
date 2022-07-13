require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se é uma função', () => {
    const actual = typeof fetchItem;
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  it('Testa se ao chamar a função com o argumento "MLB1615760527" se utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', () => {
    const expected = "https://api.mercadolibre.com/items/MLB1615760527";
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(expected);
  });

  it('Testa se ao executar a função com o argumento do item "MLB1615760527", a função fetch é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se o retorno da função com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto "item"', async () => {
    const actual = await fetchItem('MLB1615760527');

    expect(actual).toEqual(item);
  });

  it('Testa se chamando a função sem argumento, retorna um erro', async () => {
    const actual = await fetchItem();
    
    expect(actual).toEqual(new Error('You must provide an url'));
  });
});
