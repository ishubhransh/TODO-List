module.exports.home = function(req,res){
    return res.render('home',{
        title: "Todo-List",
        h1: "My title"
    });
}

module.exports.index= function(req,res){
    console.log('Posting res');
    return res.redirect('/task');
}