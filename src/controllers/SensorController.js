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
    



}