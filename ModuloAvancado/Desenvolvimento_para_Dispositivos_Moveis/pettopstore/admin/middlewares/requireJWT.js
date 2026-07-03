const jwt = require('jsonwebtoken');
// IMPORTANTE: Esse segredo deve ser exatamente o mesmo usado na hora de gerar o token!
const segredoJWT = 'frase segredo para critografia do jwt';

module.exports = async (req, res, next) => {
  // 1. Verifica se o cabeçalho de autorização foi enviado
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Não autorizado'
    });
  }

  try {
    // 2. Divide a string pelo espaço ("Bearer TOKEN") e pega apenas o token (posição 1)
    const token = req.headers.authorization.split(' ')[1];
    
    // 3. Valida o token usando o segredo criptográfico
    const decodedJWT = jwt.verify(token, segredoJWT);
    
    // 4. Salva os dados decodificados no res.locals para as próximas rotas usarem
    res.locals.jwt = decodedJWT;
    
    // 5. Autoriza a requisição a continuar
    next();
  } catch (error) {
    // Se o token estiver vencido, malformado ou com segredo errado, cai aqui
    return res.status(401).json({
      message: 'Token inválido'
    });
  }
};