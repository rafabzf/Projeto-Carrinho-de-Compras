// const { fetchItem } = require("./helpers/fetchItem");

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.currentTarget.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const lista = async () => {
  const selecionandoItems = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const { results } = await data;

  results.forEach(({ id, title, thumbnail }) => {
  const produto = createProductItemElement({ sku: id, name: title, image: thumbnail });
  selecionandoItems.appendChild(produto);
  });
};

const addItem = async () => {
  const listItens = document.querySelectorAll('.item');
  const cartItens = document.querySelector('.cart__items');
  listItens.forEach(async (item) => {
    const itemId = item.firstChild.innerText;
    const data = await fetchItem(itemId);
    const { id, title, price } = data;
    const object = { sku: id, name: title, salePrice: price };
  
  item.addEventListener('click', () => {
    cartItens.appendChild(createCartItemElement(object));
  });
  });
};

window.onload = async () => {
  await lista();
  await addItem();
};