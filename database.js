const mongoose = require('mongoose')
require('dotenv').config()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var caseSchema = new Schema({
    _id: ObjectId,
    case_no : Number,
    branch : String,
    reporting_method : String,
    date : String,
    time : String,
    category: String,
    sub_category: String,
    priority: String,
    nature: String,
    case_manager: String,
    case_reporter: String,
    case_status: String
});

var cases = mongoose.model('cases',caseSchema);

function connect(){
    mongoose.connect(process.env.Database_GMP_URL,function(err){
      if(err) throw err;
      console.log("connected");
    });
    }

function getCases(callback){
    cases.find({},function (err,data) {
        if (err) throw err;
        console.log(">>>> " + data );
        callback(data);
    })
    }


module.exports={
    connect,getCases
    }
