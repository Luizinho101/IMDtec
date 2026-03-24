const schema = {
  type: "object",
  properties: {
    nome: {type: "string"},
    descricao: {type: "string"}
  },
  required: ["nome", "descricao"],
  additionalProperties: false
}

module.exports = schema