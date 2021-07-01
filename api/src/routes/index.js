const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const DogRoutes = require('./Dog.js');
const TemperamentRoutes = require('./Temperament.js');
const { addDog } = require('../Controllers/Dog.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', DogRoutes);
router.post('/dog',addDog)
router.use('/temperaments', TemperamentRoutes)

module.exports = router;
