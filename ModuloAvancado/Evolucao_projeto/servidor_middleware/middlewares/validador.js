const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv();
addFormats(ajv);


const validarSchema = (schema) => {
    const validate = ajv.compile(schema);
    
    return (req, res, next) => {
        const isValid = validate(req.body);
        if (!isValid) {
            return res.status(400).json({
                erro: "Dados inválidos",
                detalhes: validate.errors
            });
        }
        next();
    };
};

module.exports = validarSchema;