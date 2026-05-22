
const pessoaSchema = {
    type: "object",
    properties: {
        nome: { type: "string", minLength: 3 },
        sobrenome: { type: "string", minimum: 0 }
    },
    required: ["nome", "sobrenome"], 
    additionalProperties: false 
};

module.exports = pessoaSchema