const express=require('express');
const bodyParser= require ('body-parser');
const app = express()
const database=require('./database.js')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',express.static('public'));

app.use(function(err, req, res, next){
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err:{};

  //render the error page
  res.status(err.status || 500);
  res.render('error');
});

   app.get('/shuruKro', function(req,res,next){
      console.log('in get');
      database.getCases(function(cases){
        console.log('in shuru karo server');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({key:cases}));
        // res.json({data:cases});
      });

    })

  app.listen(3000,function(){
  console.log('server running on port 3000');
  database.connect();
})
