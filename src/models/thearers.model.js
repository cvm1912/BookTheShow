const mongoose = require('mongoose');
const theatreSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "theater name is required."]
    },

    description:String,
    city:{
        type:String,
        required:[true, "City is required."]
    }, 
    pincode:{
        type:String, 
        required:[true, "pincode is required." ]
    },
    address:String,
    movies:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'Movies'
    }
}, {timestamps:true});

const Theatre = mongoose.model('Theatre', theatreSchema);
module.exports = Theatre;