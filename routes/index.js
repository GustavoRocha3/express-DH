const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/teste
router.get('/teste', (req, res) => {
  res.json({teste: 'ok'});
})

module.exports = router;
