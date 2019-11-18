var express = require('express');
var PORT = process.env.PORT || 3000;
var index  = require('./routes/index');
var relations = require('./routes/relations');
var app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/', index)
app.use('/one-to-one' , relations)


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

