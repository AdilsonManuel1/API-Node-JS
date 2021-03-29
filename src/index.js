const express = require('express');
const bodyParser  = require('body-Parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.send('Parabens');
});

require('./controllers/authController')(app);
app.listen(3000);