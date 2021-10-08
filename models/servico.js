function createService(id, servico, responsavel, valor) {
    return {
        id,
        servico,
        responsavel,
        valor,
        texto: `Você optou pelo serviço: ${servico}`

    }
}

module.exports = {
    createService
}