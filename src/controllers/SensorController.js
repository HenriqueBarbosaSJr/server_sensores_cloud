const knex = require('../database');

module.exports = {

    async index(req, res){

        const results = await knex('sensores');
        
        return res.json(results);
    },

    
    async listLast (req, res, next){
        try {
            const result = await knex ('sensores').orderBy('id', 'desc').limit(1);
            
            return res.json(result);

        } catch (error) {
            next(error)
        }
    },


    async create(req, res, next){
        
        try{
            const { sensor1 } = req.body;
            const { sensor2 } = req.body;
            const { sensor3 } = req.body;
            await knex ('sensores')
            .insert({ sensor1 , sensor2,  sensor3 });
            
            return res.status(201).send();
        } catch (error){
            next(error);

        }   
    },

}