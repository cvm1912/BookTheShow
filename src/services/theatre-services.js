const Theatre = require('../models/thearers.model');
const createTheater = async (data) =>{
    try{
        const response = await Theatre.create(data);
        return response;
    }catch(err){
        console.log(err);
        throw err;
    }

}
module.exports = {
   createTheater
}