const axios = require('axios');
const {Temperament} = require('../db.js') ;
const {
    BASE_URL,
    HEADERS } = require('../../constants')

async function getAllTemperament(req,res,next){
    try {
        const api = await axios({
            method: 'get',
            url: BASE_URL,
            headers: HEADERS
          });

        api.data.forEach((breed)=>{
            if(breed.temperament){
                const temperaments = breed.temperament.split(", ");

                temperaments.forEach( async(name)=>{
                    await Temperament.findOrCreate({where:{name}})
                });

            }
        });

        const r = await Temperament.findAll();
        res.status(200).send(r);

    } catch (error) {
        next(error);
    }


    // api.data.results.forEach( recipe => {
    //         recipe.diets.forEach( async diet => {
    //             return await Typediet.findOrCreate({where: {name: diet}})
    //         });
    //     });
    // })
    // .then(()=>{
    //     const typediet = Typediet.findAll()
    //     typediet
    //     .then((r)=>{
    //         return res.send(r);
    //     })
    // })
    // .catch((e)=>(next(e)))
}
module.exports = getAllTemperament;
