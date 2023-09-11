const express = require('express');
const router = express.Router();

router.get('checkLists', (req, res) => {
    console.log('Ola');
    res.send();
})

module.exports = router;