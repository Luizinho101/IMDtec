var express = require('express');
var router = express.Router();
const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);

router.get('/search', async(req, res) => {
  let productsQuery = knex.table('products');

  if (req.query.term) {
    productsQuery = productsQuery
      .where('products.name', 'LIKE', `%${req.query.term}%`)
      .orWhere('products.description', 'LIKE', `%${req.query.term}%`);
  }

  if (req.query.category_id) {
    productsQuery = productsQuery.where('products.category_id', '=', req.query.category_id);
  }

  if (req.query.order) {
    if (req.query.order === 'name') {
      productsQuery = productsQuery.orderBy('products.name');
    } else if (req.query.order === 'price') {
      productsQuery = productsQuery.orderBy('products.price');
    }
  }

  productsQuery = productsQuery
    .leftJoin('categories', 'products.category_id', 'categories.id')
    .select('products.*', 'categories.name as categoryName');

  const products = await productsQuery;
  return res.json({ products });
});

router.get('/:id', async (req, res) => {
  const product = await knex.table('products')
    .where('products.id', '=', req.params.id)
    .leftJoin('categories', 'products.category_id', 'categories.id')
    .select('products.*', 'categories.name as categoryName')
    .first();

  return res.json({ product });
});

module.exports = router;