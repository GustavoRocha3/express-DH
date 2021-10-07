function createPet(id, nome, raca, pedigree) {
    return {
        id,
        nome,
        raca,
        texto: `Olá, eu me chamo ${nome}`,
        pedigree
    }
}

module.exports = {
    createPet
}