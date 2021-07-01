const { Router } = require('express');
const { getAllDog, getAllInfo, findDog } = require('../Controllers/Dog.js');

const router = Router();

router.get('/',getAllDog,findDog);
router.get('/:id', getAllInfo);

module.exports = router;