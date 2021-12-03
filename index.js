const   express =  require('express');
const expressLay= require('express-ejs-layouts');
const   app     =  express();
const   port    =  8000;
const   router  =  require('./routes/home');

app.use(expressLay);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));

app.use('/', router);

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})