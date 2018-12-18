var express = require('express');

var app = express();

var fortune = require('./libs/fortune');

var handlebars = require('express-handlebars')
  .create({
    defaultLayout: 'main'
  });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  // res.type('text/plain');
  // res.send('Meadowlark Travel');
  res.render('home');
});

app.get('/about', function (req, res) {
  // res.type('text/plain');
  // res.send('About Meadowlark Travel');
  res.render('about', {
    fortune: fortune.getFortune()
  });
});

app.use(function (req, res) {
  // res.type('text/plain');
  res.status(404);
  // res.send('404 - Not Found');
  res.render('404');
});

app.use(function (req, res) {
  console.error(err.stack);
  // res.type('text/plain');
  res.status(500);
  // res.send('500 - Server Error');
  res.render('500');
});

app.listen(app.get('port'), () => {
  console.log(`Server started on port:` + app.get('port'));
});