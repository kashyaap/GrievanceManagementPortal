var fetcher = require('server.js');
module.exports={
fetchData:function (req,res){

    server.fetchData(function(data){
      res.render('index',{casesData:data});
    })
}


}
