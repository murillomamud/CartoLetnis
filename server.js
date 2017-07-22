var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');

app.use(cors({origin: '*'}));
/* configurar o middleware express.static */
app.use(express.static('./webapp'));
app.get('/', function (req, res){

    res.sendFile(path.join(__dirname + '/webapp/index.html'))

});

app.listen(process.env.PORT || 5000);