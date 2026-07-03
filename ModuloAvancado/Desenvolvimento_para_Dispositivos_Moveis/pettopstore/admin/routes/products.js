const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);
const multer  = require('multer');
const upload = multer({ dest: './public/images' });

// Listar produtos trazendo a categoria de cada um
router.get('/', async (req, res) => {
  const products = await knex.table('products').select();
  
  for (const product of products) {
    product.category = await knex.table('categories').where('id', '=', product.category_id).first();
  }
  
  res.render('products/list', { products });
});

// Formulário de novo produto trazendo as categorias do banco
router.get('/new', async (req, res) => {
  const categories = await knex.table('categories').select();
  res.render('products/new', { categories });
});

// Criar o produto salvando o category_id enviado pelo select
router.post('/create', upload.single('photo'), async (req, res) => {
  await knex.table('products').insert({
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price),
    photo: req.file.filename,
    category_id: req.body.category_id
  });
  res.redirect('/products');
});

module.exports = router;