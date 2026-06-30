
var knexConfig = require('../knexfile');

var knex = require('knex')(knexConfig);
var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();


router.get('/login_form', async (req, res) => {
 
  res.render('auth/login_form', { error: req.query.error });
});


router.post('/sign_in', async (req, res) => {
 
  const employee = await knex.table('employees').where({ email: req.body.email, is_admin: true }).first();
  
  if (!employee) {
    return res.redirect('/auth/login_form?error=1');
  }
 
  if (bcrypt.compareSync(req.body.password, employee.password)) {
  
    req.session.logged_as = employee.id;
   
    return res.redirect('/');
  } else {

    req.session = null;

    return res.redirect('/auth/login_form?error=1');
  }
});


router.get('/sign_out', async (req, res) => {
  req.session = null;
  return res.redirect('/auth/login_form');
});

module.exports = router;