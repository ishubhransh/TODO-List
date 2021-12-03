module.exports.home = function(req,res){
    return res.render('home',{
        title: "Todo-List",
        h1: "My title"
    });
}
