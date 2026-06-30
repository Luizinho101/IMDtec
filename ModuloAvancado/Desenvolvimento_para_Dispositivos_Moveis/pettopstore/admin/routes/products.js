const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);
const multer  = require('multer');

// Configura o destino dos uploads para a pasta public/images
const upload = multer({ dest: './public/images' });

// Listar produtos
router.get('/', async (req, res) => {
  const products = await knex.table('products').select();
  res.render('products/list', { products });
});

// Formulário de novo produto
router.get('/new', async (req, res) => {
  res.render('products/new');
});

// Processar a criação do produto (upload.single intercepta o campo 'photo')
router.post('/create', upload.single('photo'), async (req, res) => {
  await knex.table('products').insert({
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price),
    photo: req.file.filename // salva o nome gerado pelo multer
  });
  res.redirect('/products');
});

module.exports = router;