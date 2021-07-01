const axios = require('axios');
const { Dog, Temperament } = require('../db');
const {v4: uuidv4} = require('uuid');
const {Op} = require('sequelize');
const {
    BASE_URL,
    BASE_ID,
    BASE_SEARCH_URL,
    HEADERS } = require('../../constants.js');

async function getAllDog(req,res,next){
     if(req.query.name){
         next();
     }else{
         try {

            const bs = await Dog.findAll();
            const api = await axios({
                method: 'get',
                url: BASE_URL,
                headers: HEADERS
              });

            if(bs.length>0){
                const temperaments = []
                const tempbs = await bs[0].getTemperaments()//  Metodo especial que me trae todos los temperamentos de una raza
                tempbs.map(item=>temperaments.push(item.dataValues.name))
                bs.map((dog)=>{
                    dog.dataValues["temperament"] = temperaments.join(", ")
                })
            }

            res.status(200).send(bs.concat(api.data))

        } catch (error) {
            next(error);
        }
     }
}

async function getAllInfo(req,res,next){
    const id = req.params.id;
    try {
        if(id.includes('-')){
            const bsDogs = await Dog.findOne({where:{id}});
            const temperaments = []
            const temperament = await bsDogs.getTemperaments()//  Metodo especial que me trae todos los temperamentos de una raza
            temperament.map(item=>temperaments.push(item.dataValues.name))
            console.log(bsDogs.dataValues)
            return res.send({
                ...bsDogs.dataValues,
                weight : {metric: bsDogs.dataValues.weight},
                height: {metric:bsDogs.dataValues.height},
                temperaments});
        }else{
            const api = await axios({
                method: 'get',
                url: `${BASE_ID}${id}`,
                headers: HEADERS
            });
            const{
                name,
                life_span,
                reference_image_id,
                weight,
                height} = api.data[0].breeds[0];

                res.status(200).send({
                    id,
                    name,
                    life_span,
                    reference_image_id,
                    weight,
                    height
                });

        }
    }
    catch (error){
        res.status(400).send('No found')
        next(error);
    }
}

async function addDog(req,res,next){
    try {
        const {
            name,
            temperaments, //viene en un array desde el front
            lmin,
            lmax,
            wmax,
            wmin,
            hmax,
            hmin
        } = req.body;

        const life_span = lmin.concat(' - ',lmax," years");
        const weight = wmin.concat(' - ',wmax);
        const height = hmin.concat(' - ',hmax);

        if(name && weight && height && temperaments.length>0){
            const id = uuidv4();
            const Breed = await Dog.create({
                id,
                name,
                life_span,
                weight,
                height
            });

            temperaments.forEach(async (name)=>{
                const [temperament,created] = await Temperament.findOrCreate({where:{name}});
                return await Breed.addTemperament(temperament.dataValues.id);
            })
            res.send("Added Dog")
        }else{
            res.status(400).send("Required Fields")
        }
    } catch (error) {
        res.status(400).send('error')
        next(error);
    }
}

async function findDog(req,res,next){
    try {
        const name = req.query.name;
        const api = await axios({
            method: 'get',
            url: `${BASE_SEARCH_URL}${name}`,
            headers: HEADERS
        });
        const bs = await Dog
        .findAll({
            where:{
                name: {
                    [Op.substring]: `${name}`
                }
            }
        });

        if(bs.length>0){
            res.status(200).send(bs.concat(api.data))
        }else{
            res.status(200).send(api.data)
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllDog,
    getAllInfo,
    addDog,
    findDog
}