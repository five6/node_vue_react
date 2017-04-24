'use strict';

module.exports = app => {
  //view
  app.get('/','index.index');
  app.get('/view/index','index.index');
  app.get('/view/login','index.login');
  app.get('/view/register','index.register');
  app.get('/view/logs','index.logs');
  app.get('/view/album','index.album');
   app.get('/view/profile','index.profile');
  //api
  app.post('/api/login','user.login');
  app.post('/api/logout','user.logout');
  app.post('/api/register','user.register');
  app.get('/api/books','user.books');
  app.post('/api/user/update','user.update');
  app.get('/api/events','event.list');
  app.get('/api/events/userEventList','event.userEventList');
  app.get('/api/events/:id','event.detail');
  app.post('/api/events/create','event.create');
  app.put('/api/events/update/:id','event.update');
  app.delete('/api/events/delete/:id','event.delete');
};
