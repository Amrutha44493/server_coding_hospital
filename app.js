const express=require("express");
//initialising express
//imprt local modules
const base_route=require('./routes/hospital');
const app=express();
const port=4000;
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static('./public'));
//middleware api
app.use('/',base_route);
app.listen(port,()=>
    {
        console.log("server is listening");
    })