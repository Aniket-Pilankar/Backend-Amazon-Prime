const express = require('express')
const cors = require('cors');
const app = express();
const connect = require('./server/src/configs/db');

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 5000,async() => {
    try{
        await connect();
        console.log('listening on port 5000');
    }
    catch(e){
        console.log(e.message);
    }
})