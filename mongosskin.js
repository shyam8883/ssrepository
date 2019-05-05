const db = require("mongoskin").db("mongodb://localhost:27017/rockband");
db.bind("band");
db.createCollection("rock")
	
	console.log("Collection Created");
	db.close();
});
	
	


