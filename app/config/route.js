let Home = require('../controllers/home');
let Upload = require('../controllers/upload');
let Admin = require('../controllers/admin');
let Cookie = require('../controllers/cookie');
let Ga = require('../controllers/googleAnalystics');

module.exports = function(app, redis, es) {
  function addRedis(req, res, next) {
    res.redis = redis;
    next();
  }

  function addEs(req, res, next) {
    res.es = es;
    next()
  }

  app.get('/', Cookie.checkll, addRedis, Home.home);
  app.get('/archives/', Cookie.checkll, addRedis, Home.archives);
  app.get('/search/', Cookie.checkll, addEs, Home.search)
  app.get('/series/', Cookie.checkll, addRedis, Home.series);
  app.get('/post/:link', Cookie.checkll, addRedis, Home.article);

  // admin
  app.get('/admin/upload', Admin.adminRequire, Cookie.checkll, Upload.upload);
  app.get('/admin/update/:id', Admin.adminRequire, Cookie.checkll, Upload.update);
  app.get('/admin/list', Admin.adminRequire, Cookie.checkll, Upload.list);
  app.delete('/admin/list', Admin.adminRequire, Upload.delete);
  app.get('/admin/login', Cookie.checkll, Upload.tologin);
  app.post('/admin/upload/new', Admin.adminRequire, Cookie.checkll, addRedis, addEs, Upload.save);
  app.post('/admin/login', Cookie.checkll, Admin.login);
  app.get('/admin', Cookie.checkll, Upload.tologin);

  // google analytics
  app.get('/collect', Ga.ga);
  app.get('/r/collect', Ga.gar);

  //404 Error
  app.use(function(req, res, next) {
    res.status(404);
    Cookie.checkll(req, res, next);
    Home.error(req, res);
  });
} 