var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
const requireAuth = require('./middlewares/requireAuth');
var productsRouter = require('./routes/products');

// Criação do app Express (deve vir antes de usar os middlewares)
var app = express();

// Configurando o gerenciador de sessões por cookies
app.use(cookieSession({
  name: 'pettopstore_session', 
  keys: ['chave_secreta_para_criptografia'], 
  maxAge: 24 * 60 * 60 * 1000, 
}));

// Configuração da View Engine (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/auth', authRouter);
app.use('/', [requireAuth], indexRouter);
app.use('/products', [requireAuth], productsRouter); // <-- Adicione essa linha aqui

// Tratamento de erro 404 (Página Não Encontrada)
app.use(function(req, res, next) {
  next(createError(404));
});

// Tratamento geral de erros internos do servidor
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;