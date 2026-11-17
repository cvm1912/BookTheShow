const theatreService = require('../services/theatre-services');


const create = async(req,res) =>{
    try{
        const response = await theatreService.createTheater(req.body);
        res.status(201).json({
            success: true,
            error: {},
            message: "Theatre created successfully",
            data: response
        });
    }catch(err){
        console.error("Error creating theatre:", err);
        res.status(500).json({
            success: false,
            message: "Error creating theatre",
            error: err.message
        });
       
    }
} 

module.exports = {
    create
}