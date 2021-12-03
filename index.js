const   express =  require('express');
const   app     =  express();
const   port    =  8000;
const   router  =  require('./routes/home');

app.set('view engine','ejs');
app.set('views','./views');

app.use('/', router);

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})