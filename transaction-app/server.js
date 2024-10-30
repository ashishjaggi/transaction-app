const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const transactinRoutes = require('./routes/transactionRoutes')
app = express();
const Port = 3000;

app.use(bodyParser.json());
app.use(cors())
app.use('/api',transactinRoutes);

app.listen(Port, ()=>{
    console.log(`Server is running on port:${Port}`)
})


