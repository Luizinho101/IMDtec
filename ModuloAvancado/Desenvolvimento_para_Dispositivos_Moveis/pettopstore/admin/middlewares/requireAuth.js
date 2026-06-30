const knexConfig = require("../knexfile");
const knex = require('knex')(knexConfig);

module.exports = async (req, res, next) => {
  // verifica se a sessão está vazia (deslogado)
  if (!req.session || !req.session.logged_as) {
    return res.redirect('/auth/login_form');
  }
  
  // caso a sessão exista, o usuário está logado.
  const idAdminLogado = req.session.logged_as;
  
  // buscar o administrador no banco de dados pelo id
  const employee = await knex.table('employees').where({ id: idAdminLogado }).first();
  
  // coloca o employee logado no res.locals para ficar disponível nas views e rotas
  res.locals.employee = employee;
  
  next(); // continua para a próxima função/rota
};