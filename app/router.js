'use strict';

module.exports = app => {
  app.get('/','index.index');
  app.post('/api/login','user.login');
  app.post('/api/register','user.register');
  app.get('/api/topics', 'topic.topics');
  app.post('/api/topics', 'topic.create');
  app.get('/api/topics/:id', 'topic.topicDetail');
  app.put('/api/topics/:id', 'topic.putTopic');
  app.delete('/api/topics/:id', 'topic.deleteTopic');
};
