'use strict';

module.exports = app => {
    //api使用的
  const auth = app.middlewares.auth();
  //view使用的 也可以在config文件配置
    // const returnLogin = app.middlewares.returnLogin();
  //view
  app.get('/','index.index');
  app.get('/view/index','index.index');
  app.get('/view/login','index.login');
  app.get('/view/register','index.register');
  app.get('/view/topics','index.topics');
  app.get('/view/topic/:id','index.topic');
  app.get('/view/album','index.album');
   app.get('/view/profile','index.profile');
  //user api
  app.post('/api/login','user.login');
  app.post('/api/logout','user.logout');
  app.post('/api/register','user.register');
  app.post('/api/user/update','user.update');
  // event api
  app.get('/api/events','event.list');
  app.get('/api/events/userEventList',auth,'event.userEventList');
  app.get('/api/events/:id',auth,'event.detail');
  app.post('/api/events/create',auth,'event.create');
  app.put('/api/events/update/:id',auth,'event.update');
  app.delete('/api/events/delete/:id',auth,'event.delete');
  // topic api
  app.get("/api/topics",auth,"topics.list");
  app.get("/api/topics/:id",auth,"topics.topic");
  app.post("/api/topics/create",auth,"topics.create");
  app.put("/api/topics/update/:id",auth,"topics.update");
  app.delete("/api/topics/:id",auth,"topics.delete");
  app.get("/api/topics/more",auth,"topics.more");
  //news
  app.get("/api/news/articles","news.articles");
  app.get("/api/news/news/article/:id","news.newsList");
  app.get("/api/news/:id","news.detail");

  //albums
  app.get("/api/albums",auth,"albums.albums");//获取所有相册
  app.get("/api/albums/:id",auth,"albums.album");//获取单个相册
  app.put("/api/albums/:id",auth,"albums.updateAlbum");//更新相册内容
  app.delete("/api/albums/:id",auth,"albums.deleteAlbum");//删除相册
  app.post("/api/albums",auth,"albums.createAlbum");//新增相册
  app.post("/api/albums/:id/photos",auth,"albums.uploadPhotos");//添加图片
  app.delete("/api/albums/:id/photos",auth,"albums.deletePhotos"); //删除图片
};
