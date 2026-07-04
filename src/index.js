const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const products = [
  { id: 1, name: "Wireless Mouse", price: 599, stock: 120 },
  { id: 2, name: "Mechanical Keyboard", price: 2499, stock: 45 },
  { id: 3, name: "USB-C Hub", price: 1299, stock: 80 }
];

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/products', (req, res) => res.json(products));

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(product);
});

app.listen(PORT, () => console.log(`product-service running on port ${PORT}`));
