'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/dashboard','home.dashboard');
  app.get('/news', 'home.list');
  app.get('/news/1', 'home.n1');
  app.get('/news/2', 'home.n2');
};
