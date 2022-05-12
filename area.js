var mongoose = require("mongoose") 
var EsquemaArea=mongoose.Schema( {
    Nombre:String,
    Abreviatura:String,
    Estado:String

});
module.exports=mongoose.model("Areas",EsquemaArea,"Areas");
