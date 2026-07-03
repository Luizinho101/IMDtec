const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);

router.get('/report', async(req, res) => {
  const sales = await knex.table('sales');

  for (const sale of sales) {
    sale.items = await knex.table('items').where('sale_id', '=', sale.id);
    
    if (sale.employee_id !== null) {
      sale.employee = await knex.table('employees').where('id', '=', sale.employee_id).first();
    }
    if (sale.client_id !== null) {
      sale.client = await knex.table('clients').where('id', '=', sale.client_id).first();
    }

    for (const item of sale.items) {
      item.product = await knex.table('products').where('id', '=', item.product_id).first();
    }
  }

  res.render('sales/report', { sales });
});

module.exports = router;