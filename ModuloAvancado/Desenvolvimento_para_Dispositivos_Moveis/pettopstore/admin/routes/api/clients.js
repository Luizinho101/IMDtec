var express = require('express');
var router = express.Router();
const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);
const requireJWT = require('../../middlewares/requireJWT');

// GET /api/clients - Retorna a lista de clientes (Apenas para funcionários no PDV)
router.get('/', [requireJWT], async (req, res) => {

  // Obtém o JWT decodificado pelo middleware requireJWT
  const jwt = res.locals.jwt;

  // Garante que o token pertence a um funcionário (employee)
  if (!jwt.employee) {
    return res.status(401).json({
      message: 'Não autorizado: Apenas funcionários podem listar clientes.'
    });
  }

  // Busca os clientes trazendo apenas os campos seguros (id, name, email) para não expor as senhas criptografadas!
  const clients = await knex.table('clients').select(['id', 'name', 'email']);
  
  return res.json({
    clients
  });
});

module.exports = router;