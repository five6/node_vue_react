'use strict';
var _ = require("underscore");
module.exports = app => {
    const createRule = {
        accesstoken: 'string',
        title: 'string',
        tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
        content: 'string',
    };
    class TopicsController extends app.Controller {
        *create (ctx) {
            ctx.validate(createRule);
            const id = yield ctx.service.topic.create(ctx.request.body);
            ctx.body = {
                topic_id: id,
            };
            ctx.status = 201;
        }
        *topics(ctx) {
            const topics = yield ctx.service.topic.topics(ctx.request.body);
            yield ctx.res.end(JSON.stringify(topics));
        }
        *topicDetail(ctx){
            const topic = yield ctx.service.topic.topicDetail(ctx.request.body);
        }
        *putTopic(ctx){
            const topic = yield ctx.service.topic.putTopic(ctx.request.body);
        }
        *deleteTopic(ctx){
            const topic = yield ctx.service.topic.deleteTopic(ctx.request.body);
        }
    }
    return TopicsController;
};
