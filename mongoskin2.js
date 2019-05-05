//var mongo = require("mongodb").MongoClient;
var db = require("mongoskin").db('mongodb://localhost:27017/music');

//db.bind("band");
db.collection("albums").find().toArray(function(err,result){
	if(err) throw err;
	console.log(result); 
	db.close();
});
	
