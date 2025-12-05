var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
//middleware
app.use('/app',
    function(req,res,next){
        console.log('The example middleware called');
        next();
    }
);
//get- metodi
app.get('/app', (req, res) => res.send('Saanko esitellä'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
//get- metodi yhdellä parametrilla
app.get("/app/:num", (req, res) => {

  res.send('appin numero ' + req.params.num);
});
//get- metodi kahdella parametrilla
app.get("/app/:num/:name", (req, res) => {

    res.send('saanko esitellä ' + req.params.name + ' ' + req.params.num);
});
//get bonus

app.get('/app/:num/:name/:img', (req, res) => {
  const { num, name, img } = req.params;



  const imgUrl = `/images/${img}`;


  res.send('saanko esitellä ' + req.params.name + ' ' + req.params.num + `<br><img src="${imgUrl}" alt="${name}">`);
});

//post- metodi
app.post('/post', (req, res) => {
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
    });
