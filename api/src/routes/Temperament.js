const { Router } = require('express');
const getAllTemperament = require('../Controllers/Temperament.js')

const router = Router();

router.get('/', getAllTemperament)

module.exports = router;