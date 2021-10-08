const service = require('../models/servico');

const controllerService = {
    index: (req, res) => {
        res.json([
            service.createService(1, 'Banho', 'Paulo', 39, 99),
            service.createService(2, 'Tosa', 'Paulo', 20, 00),
            service.createService(3, 'Tosa higienica', 'Roberto', 45, 00),
            service.createService(4, 'Banho Medicinal', 'Sheila', 60, 00)
        ]);
    }
}

module.exports = controllerService;