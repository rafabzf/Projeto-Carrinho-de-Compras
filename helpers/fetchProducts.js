const fetchProducts = async (produto) => {
 try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
 } catch (error) {
  return new Error('You must provide an url');
 }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
