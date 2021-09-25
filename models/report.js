const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const report = new Schema({
    userId:{
        type:String,   
    },
    marketId:{
        type:String
    },
    marketName:{
        type:String
    },
    cmdtyId:{
        type:String
    },
    marketType:{
        type:String
    },
    cmdtyName:{
        type:String
    },
    priceUnit:{
        type:String
    },
    convFctr:{
        type:Number
    },
    price:{
        type:Number
    }
});


module.exports = mongoose.model("report",report);