var express = require('express');
var router = express.Router();
const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const segredoJWT = 'frase segredo para critografia do jwt';

// POST /api/auth/employee/sign_in (Login do Funcionário para o PDV)
router.post('/employee/sign_in', async(req, res) => {
  // busca employee no banco com esse email
  const employee = await knex.table('employees').where({ email: req.body.email }).first();

  // Caso o employee não exista ou a senha esteja incorreta
  if (!employee || !bcrypt.compareSync(req.body.password, employee.password)) {
    return res.status(401).json({
      message: 'Funcionário não existe ou senha incorreta'
    });
  }

  // conteúdo (payload) do token JWT
  const conteudoJWT = {
    employee: employee
  };

  // gera o token assinado com expiração de 2 dias
  const token = jwt.sign(conteudoJWT, segredoJWT, { expiresIn: '2 days' });

  // anexa o token ao objeto para retornar ao PDV
  employee.token = token;
  return res.json({ employee });
});

// POST /api/auth/client/sign_in (Login do Cliente para a Loja Virtual)
router.post('/client/sign_in', async(req, res) => {
  // busca client no banco com esse email
  const client = await knex.table('clients').where({ email: req.body.email }).first();

  // Caso o client não exista ou a senha esteja incorreta
  if (!client || !bcrypt.compareSync(req.body.password, client.password)) {
    return res.status(401).json({
      message: 'Cliente não existe ou senha incorreta'
    });
  }

  // conteúdo (payload) do token JWT
  const conteudoJWT = {
    client: client
  };


  const token = jwt.sign(conteudoJWT, segredoJWT, { expiresIn: '2 days' });

  client.token = token;
  return res.json({ client });
});


router.post('/client/registration', async(req ,res) => {

  const existingClient = await knex.table('clients').where({ email: req.body.email }).first();

  if (existingClient) {
    return res.status(400).json({ 
      message: 'Cliente já existe com esse e-mail'
    });
  }


  let newClientData = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };


  let clientIDs = await knex.table('clients').insert(newClientData);

  return res.json({
    message: 'Cliente registrado com sucesso',
    clienteID: clientIDs[0]
  });
});

module.exports = router;