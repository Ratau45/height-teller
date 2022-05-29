
const mongoose = require('mongoose')
const castAggregation = require('mongoose-cast-aggregation');

mongoose.plugin(castAggregation);

const userTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    height :{
        type:Number,
        //set: function (w) { return Math.round(2) ;},
        required: true
    },
    email:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    
})

 
module.exports = mongoose.model('mytable',userTemplate,)