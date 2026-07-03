var express = require('express');
var router = express.Router();
const requireJWT = require('../../middlewares/requireJWT');
const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);

router.get('/:sale_id', [requireJWT], async (req, res) => {
  const jwt = res.locals.jwt;

  if (!jwt.employee) {
    return res.status(401).json({
      message: 'Não é funcionário'
    });
  }

  const sale = await knex.table('sales').where('sales.id', '=', req.params.sale_id).first();
  sale.items = await knex.table('items').where('sale_id', '=', sale.id);

  for (const item of sale.items) {
    item.product = await knex.table('products').where('id', '=', item.product_id).first();
  }

  return res.json({ sale });
});

router.post('/', [requireJWT], async (req, res) => {
  const jwt = res.locals.jwt;
  let sale = {};

  if (jwt.employee) {
    sale.client_id = req.body.client_id;
    sale.employee_id = jwt.employee.id;
  } else if (jwt.client) {
    sale.client_id = jwt.client.id;
    sale.employee_id = null;
  } else {
    return res.status(401).json({
      message: 'Não é cliente nem funcionário'
    });
  }

  const result = await knex.table('sales').insert(sale);
  sale.id = result[0];

  const items = [];
  for (const productID of req.body.productIDs) {
    items.push({
      sale_id: sale.id,
      product_id: productID
    });
  }

  await knex.table('items').insert(items);
  return res.json({ sale });
});

module.exports = router;