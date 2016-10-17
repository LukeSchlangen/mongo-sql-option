var express = require('express');
var app = express();
var index = require('./routes/index');
var bodyParser = require('body-parser');

app.set("port", 5000);

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

app.get("/", index);
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Additional routes go below here
