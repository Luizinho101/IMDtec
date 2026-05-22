

const produtoSchema = {
    type: "object",
    properties: {
        nome: { type: "string", minLength: 3 },
        preco: { type: "number", minimum: 0 },
        descricao: { type: "string" }
    },
    required: ["nome", "preco"], 
    additionalProperties: false 
};

module.exports = produtoSchema