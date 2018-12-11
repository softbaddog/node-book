var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));  
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
  console.log('App listening on ' + port);
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'imooc 首页'
  });
});

app.get('/movie/:id', (req, res) => {
  res.render('detail', {
    title: 'imooc 详情页'
  });
});

app.get('/admin/movie', (req, res) => {
  res.render('admin', {
    title: 'imooc 后台录入页'
  });
});

app.get('/admin/list', (req, res) => {
  res.render('list', {
    title: 'imooc 列表页'
  });
});