const express = require('express');
const router = express.Router();

/* GET users listing. */
// http://localhost:3000/users/
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
