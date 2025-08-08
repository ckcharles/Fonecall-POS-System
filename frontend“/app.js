const API = 'http://localhost:5000/api';

async function addProduct() {
  const data = {
    name: document.getElementById('name').value,
    category: document.getElementById('category').value,
    price: parseFloat(document.getElementById('price').value),
    stock: parseInt(document.getElementById('stock').value)
  };

  await fetch(`${API}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadProducts();
}

async function loadProducts() {
  const res = await fetch(`${API}/products`);
  const products = await res.json();
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} - ${p.category} - KES ${p.price} - Stock: ${p.stock}`;
    list.appendChild(li);
  });
}

loadProducts();