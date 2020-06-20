var db = require("../db");


module.exports.index = function(req,res) {
    var page = parseInt(req.query.page) || 1;//n
    var perPage = 8;//x

    var start = ( page -1) * perPage;
    var end  = page * perPage;

    res.render('products/index',{
        products: db.get('product').value()
        .slice(start, end)
    });
};

module.exports.search = function(req, res){
    var q = req.query.q;
    var matchedProduct = db.get('product').value().filter(function(product){
        return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('product/index',{
        product: matchedProduct 
        });
};
