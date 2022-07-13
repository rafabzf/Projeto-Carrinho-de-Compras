require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se é uma função', () => {
    const actual = typeof fetchItem;
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  it('Testa se ao chamar a função com o argumento "MLB1615760527", ela utiliza o endpoint correto', async () => {
    const actual = await fetchItem('MLB1615760527');
    const expected = 'https://api.mercadolibre.com/items/MLB1615760527'

    expect(actual).toBe(expected);
  });

  it()
});
