webpackJsonp([1],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Topics__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_topic__ = __webpack_require__(67);





class TopicsRoot extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
      { store: __WEBPACK_IMPORTED_MODULE_3__reducers_topic__["a" /* default */] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Topics__["a" /* default */], null)
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopicsRoot;


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_topic__ = __webpack_require__(33);




class AddTopic extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
		this.onSumit = this.onSumit.bind(this);
	}
	onSumit() {
		const tab = document.querySelector("#topic-create-tab").value;
		const title = document.querySelector("#topic-create-title").value;
		const content = document.querySelector("#topic-create-content").value;
		const topic = {
			tab: tab,
			title: title,
			content: content
		};
		this.props.addTopic(topic);
	}
	render() {
		const { topic } = this.props;
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'ui tab attached', 'data-tab': 'topics-create' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'form ui' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'form',
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'field' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'label',
							null,
							'\u7C7B\u578B'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'ui left icon input' },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'select',
								{ id: 'topic-create-tab', value: topic.tab },
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'option',
									{ value: 'share' },
									'\u5206\u4EAB'
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'option',
									{ value: 'ask' },
									'\u95EE\u7B54'
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'option',
									{ value: 'job' },
									'\u62DB\u8058'
								)
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'field' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'label',
							null,
							'\u6807\u9898'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'ui left icon input' },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'topic-create-title', value: topic.title })
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'field' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'label',
							null,
							'\u5185\u5BB9'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'ui left icon input' },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { id: 'topic-create-content', value: topic.content })
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'button',
						{ type: 'button', onClick: this.onSumit, className: 'ui primary button' },
						'\u53D1\u8868'
					)
				)
			)
		);
	}
}
/* unused harmony export default */
;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_topic__ = __webpack_require__(33);





class TopicList extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayDelete: {
				display: "none"
			}
		};
		console.log(props);
		this.tab_cn = this.tab_cn.bind(this);
		this.topicDate = this.topicDate.bind(this);
		this.getTopicDetail = this.getTopicDetail.bind(this);
		this.deleteTopic = this.deleteTopic.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);
		this.getMoreTopics = this.getMoreTopics.bind(this);
	}
	componentDidMount() {}
	componentWillReceiveProps(nextProps) {}
	getMoreTopics(element) {
		const topicId = element.target.attributes["data-topic-id"].value;
		this.props.getMoreTopics(topicId);
	}
	getTopicDetail(element) {
		var topicId = element.target.attributes["data-topic-id"].value;
		window.location.href = "/view/topic/" + topicId;
	}
	deleteTopic(element) {
		var topicId = element.target.attributes["data-topic-id"].value;
		this.props.deleteTopic(topicId);
		// alert("will delete topic that topicId = "+ topicId)
	}
	tab_cn(tab) {
		if (tab == "ask") {
			return "问答";
		} else if (tab == "share") {
			return "分享";
		} else if (tab == "job") {
			return "招聘";
		} else {
			return "其他";
		}
	}
	topicDate(date) {
		return moment(date).fromNow();
	}
	onMouseOver(element) {
		$(element.target).find(".deleteTopic").show();
	}
	onMouseOut(element) {
		$(element.target).find(".deleteTopic").hide();
	}
	render() {
		const self = this;
		const { topics } = this.props;
		const { totalCount } = this.props;
		function MoreTopic({ topics, totalCount }) {
			if (topics.length) {
				const lastTopic = topics[topics.length - 1];
				const lastTopicId = lastTopic.id;
				if (totalCount > topics.length) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ 'data-topic-id': lastTopicId, onClick: e => self.getMoreTopics(e), className: 'getMoreTopic event button' },
						' \u52A0\u8F7D\u66F4\u591A '
					);
				} else {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'getMoreTopic event button' },
						' \u6CA1\u6709\u66F4\u591A\u4E86 '
					);
				}
			} else {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null);
			}
		}
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'ui feed', id: 'topic-event-feed' },
			topics.map(item => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ key: item.id, className: 'event' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'label' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: item.author ? item.author.avatar_url ? item.author.avatar_url : "" : "" })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'content' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'summary', onMouseOver: e => this.onMouseOver(e), onMouseLeave: e => this.onMouseOut(e) },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'a',
							{ className: 'user topic-user' },
							item.author ? item.author.loginname ? item.author.loginname : "" : ""
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'span',
							{ 'data-topic-id': item.id, onClick: e => this.getTopicDetail(e) },
							item.title
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'date' },
							this.topicDate(item.create_at)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'date deleteTopic', style: this.state.displayDelete },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'a',
								{ 'data-topic-id': item.id, onClick: e => this.deleteTopic(e) },
								'\u5220\u9664'
							)
						)
					)
				)
			)),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MoreTopic, { topics: topics, totalCount: totalCount })
		);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopicList;
;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_topic_AddTopic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_topic_TopicList__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_topic_Topicdetail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_topic__ = __webpack_require__(33);










class TopicsApp extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
		this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_topic__["b" /* fetch_topics_if_need */])(this.props.topics));
		this.deleteTopic = this.deleteTopic.bind(this);
		this.addTopic = this.addTopic.bind(this);
		this.getMoreTopics = this.getMoreTopics.bind(this);
	}
	deleteTopic(id) {
		this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_topic__["c" /* fetch_delete_topic_if_need */])(id));
	}
	addTopic(topic) {
		this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_topic__["d" /* fetch_add_topc_if_need */])(topic));
	}
	getMoreTopics(topicId) {
		this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_topic__["e" /* fetch_get_more_topc_if_need */])(topicId));
	}
	componentDidMount() {}
	componentDidUpdate(prevProps, prevState) {}
	componentWillReceiveProps(nextProps) {}
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'ui content' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_topic_TopicList__["a" /* default */], { deleteTopic: this.deleteTopic, getMoreTopics: this.getMoreTopics, totalCount: this.props.totalCount, topics: this.props.topics })
		);
	}
}

TopicsApp.propTypes = {
	topics: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
	totalCount: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
};

function mapStateToProps(state) {
	return {
		totalCount: state.totalCount,
		topics: state.topics,
		topic: state.topic
	};
}
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(TopicsApp));

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_topic_TopicsRoot__ = __webpack_require__(116);




const nodeDiv = document.getElementById("topic-container");
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_topic_TopicsRoot__["a" /* default */], null), nodeDiv);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export action_get_topic_list */
/* unused harmony export action_received_topic_list */
/* unused harmony export action_get_topic_detail */
/* unused harmony export action_received_topic_detail */
/* unused harmony export action_delete_topic */
/* unused harmony export action_received_delete_topic */
/* unused harmony export action_add_topic */
/* unused harmony export action_received_add_topic */
/* unused harmony export action_get_more_topic */
/* unused harmony export action_received_more_topics */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(65);


function action_get_topic_list(topics) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* GET_TOPIC_LIST */],
		topics
	};
}

function action_received_topic_list(topics, totalCount) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* RECEIVED_TOPIC_LIST */],
		topics,
		totalCount
	};
}

function action_get_topic_detail(topicId) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["c" /* GET_TOPIC_DETAIL */],
		topicId
	};
}
function action_received_topic_detail(topic) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["d" /* RECEIVED_TOPIC_DETAIL */],
		topic
	};
}
function action_delete_topic(topicId) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["e" /* DELETE_TOPIC */],
		topicId
	};
}
function action_received_delete_topic(topicId) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["f" /* RECEIVED_DELETE_TOPIC */],
		topicId
	};
}
function action_add_topic(topic) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["g" /* ADD_TOPIC */],
		topic
	};
}
function action_received_add_topic(topic) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["h" /* RECEIVED_ADD_TOPIC */],
		topic
	};
}
function action_get_more_topic(topicId) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["i" /* GET_MORE_TOPICS */],
		topicId
	};
}
function action_received_more_topics(topics) {
	return {
		type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["j" /* RECEIVED_GET_MORE_TOPICS */],
		topics
	};
}
const fetch_topicDetail = topicId => dispatch => {
	dispatch(action_get_topic_detail(topicId));
	$.ajax({
		url: "/api/topics/" + topicId,
		method: "get",
		type: "json",
		success: function (topics) {
			return dispatch(action_received_topic_detail(topics));
		},
		error: function (err, status) {
			console.log(err);
		}
	});
};
const fetch_topics = topics => dispatch => {
	dispatch(action_get_topic_list(topics));
	$.ajax({
		url: "/api/topics",
		method: "get",
		type: "json",
		success: function (result) {

			return dispatch(action_received_topic_list(result.topics, result.totalCount));
		},
		error: function (err, status) {
			console.log(err);
		}
	});
};
const fetch_delete_topic = topicId => dispatch => {
	dispatch(action_delete_topic(topicId));
	$.ajax({
		url: "/api/topics/" + topicId,
		method: "delete",
		type: "json",
		success: function () {
			return dispatch(action_received_delete_topic(topicId));
		},
		error: function (err, status) {
			console.log(err);
		}
	});
};
const fetch_add_topic = topic => dispatch => {
	dispatch(action_delete_topic(topic));
	$.ajax({
		url: "/api/topics/create",
		method: "post",
		type: "json",
		data: {
			topic: topic
		},
		success: function () {
			console.log("add topic success");
		},
		error: function (err, status) {
			console.log(err);
		}
	});
};
const fetch_get_more_topic = topicId => dispatch => {
	dispatch(action_get_more_topic(topicId));
	$.ajax({
		url: "/api/topics/more",
		method: "get",
		type: "json",
		data: {
			topicId: topicId
		},
		success: function (topics) {
			dispatch(action_received_more_topics(topics));
		},
		error: function (err, status) {
			console.log(err);
		}
	});
};
const fetch_topics_if_need = topics => (dispatch, getState) => {
	dispatch(fetch_topics(topics));
};
/* harmony export (immutable) */ __webpack_exports__["b"] = fetch_topics_if_need;


const fetch_topicDetail_if_need = topicId => (dispatch, getState) => {
	dispatch(fetch_topicDetail(topicId));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = fetch_topicDetail_if_need;


const fetch_delete_topic_if_need = topicId => (dispatch, getState) => {
	dispatch(fetch_delete_topic(topicId));
};
/* harmony export (immutable) */ __webpack_exports__["c"] = fetch_delete_topic_if_need;


const fetch_add_topc_if_need = topic => (dispatch, getState) => {
	dispatch(fetch_add_topic(topic));
};
/* harmony export (immutable) */ __webpack_exports__["d"] = fetch_add_topc_if_need;


const fetch_get_more_topc_if_need = topicId => (dispatch, getState) => {
	dispatch(fetch_get_more_topic(topicId));
};
/* harmony export (immutable) */ __webpack_exports__["e"] = fetch_get_more_topc_if_need;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(15);




class TopicDetail extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
		this.replaceContent = this.replaceContent.bind(this);
	}
	componentDidMount() {}
	replaceContent(content) {
		return { __html: content };
	}
	render() {
		const topic = this.props.topic || {};
		console.log(topic);
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'ui content' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'ui piled segment' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h4',
					{ className: 'ui header' },
					topic.title
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', { dangerouslySetInnerHTML: { __html: topic.content } })
			)
		);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopicDetail;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//topic 
const GET_TOPIC_LIST = "GET_TOPIC_LIST";
/* harmony export (immutable) */ __webpack_exports__["a"] = GET_TOPIC_LIST;

const RECEIVED_TOPIC_LIST = "RECEIVED_TOPIC_LIST";
/* harmony export (immutable) */ __webpack_exports__["b"] = RECEIVED_TOPIC_LIST;

const GET_TOPIC_DETAIL = "GET_TOPIC_DETAIL";
/* harmony export (immutable) */ __webpack_exports__["c"] = GET_TOPIC_DETAIL;

const RECEIVED_TOPIC_DETAIL = "RECEIVED_TOPIC_DETAIL";
/* harmony export (immutable) */ __webpack_exports__["d"] = RECEIVED_TOPIC_DETAIL;

const DELETE_TOPIC = "DELETE_TOPIC";
/* harmony export (immutable) */ __webpack_exports__["e"] = DELETE_TOPIC;

const RECEIVED_DELETE_TOPIC = "RECEIVED_DELETE_TOPIC";
/* harmony export (immutable) */ __webpack_exports__["f"] = RECEIVED_DELETE_TOPIC;

const ADD_TOPIC = "ADD_TOPIC";
/* harmony export (immutable) */ __webpack_exports__["g"] = ADD_TOPIC;

const RECEIVED_ADD_TOPIC = "RECEIVED_ADD_TOPIC";
/* harmony export (immutable) */ __webpack_exports__["h"] = RECEIVED_ADD_TOPIC;

const GET_MORE_TOPICS = "GET_MORE_TOPICS";
/* harmony export (immutable) */ __webpack_exports__["i"] = GET_MORE_TOPICS;

const RECEIVED_GET_MORE_TOPICS = "RECEIVED_GET_MORE_TOPICS";
/* harmony export (immutable) */ __webpack_exports__["j"] = RECEIVED_GET_MORE_TOPICS;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//topic 
const GET_TOPIC_LIST = "GET_TOPIC_LIST";
/* harmony export (immutable) */ __webpack_exports__["a"] = GET_TOPIC_LIST;

const RECEIVED_TOPIC_LIST = "RECEIVED_TOPIC_LIST";
/* harmony export (immutable) */ __webpack_exports__["b"] = RECEIVED_TOPIC_LIST;

const GET_TOPIC_DETAIL = "GET_TOPIC_DETAIL";
/* harmony export (immutable) */ __webpack_exports__["c"] = GET_TOPIC_DETAIL;

const RECEIVED_TOPIC_DETAIL = "RECEIVED_TOPIC_DETAIL";
/* harmony export (immutable) */ __webpack_exports__["d"] = RECEIVED_TOPIC_DETAIL;

const DELETE_TOPIC = "DELETE_TOPIC";
/* harmony export (immutable) */ __webpack_exports__["e"] = DELETE_TOPIC;

const RECEIVED_DELETE_TOPIC = "RECEIVED_DELETE_TOPIC";
/* harmony export (immutable) */ __webpack_exports__["f"] = RECEIVED_DELETE_TOPIC;

const ADD_TOPIC = "ADD_TOPIC";
/* harmony export (immutable) */ __webpack_exports__["g"] = ADD_TOPIC;

const RECEIVED_ADD_TOPIC = "RECEIVED_ADD_TOPIC";
/* harmony export (immutable) */ __webpack_exports__["h"] = RECEIVED_ADD_TOPIC;

const GET_MORE_TOPICS = "GET_MORE_TOPICS";
/* harmony export (immutable) */ __webpack_exports__["i"] = GET_MORE_TOPICS;

const RECEIVED_GET_MORE_TOPICS = "RECEIVED_GET_MORE_TOPICS";
/* harmony export (immutable) */ __webpack_exports__["j"] = RECEIVED_GET_MORE_TOPICS;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);





const initialState = {
	topics: [],
	totalCount: 0,
	topic: {}
};
function topicReducer(state = initialState, action) {
	switch (action.type) {
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["a" /* GET_TOPIC_LIST */]:
			return Object.assign({}, state, {
				totalCount: state.totalCount,
				topics: action.topics
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* RECEIVED_TOPIC_LIST */]:
			return Object.assign({}, state, {
				topics: action.topics,
				totalCount: action.totalCount
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["c" /* GET_TOPIC_DETAIL */]:
			return Object.assign({}, state, {
				topicId: action.topicId
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["d" /* RECEIVED_TOPIC_DETAIL */]:
			return Object.assign({}, state, {
				topic: action.topic
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["e" /* DELETE_TOPIC */]:
			return Object.assign({}, state, {
				topicId: action.topicId
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["f" /* RECEIVED_DELETE_TOPIC */]:
			return Object.assign({}, state, {
				topics: state.topics.filter(topic => topic.id !== action.topicId)
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["g" /* ADD_TOPIC */]:
			return Object.assign({}, state, {
				topic: action.topic
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["h" /* RECEIVED_ADD_TOPIC */]:
			return Object.assign({}, state, {
				topic: action.topic
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["i" /* GET_MORE_TOPICS */]:
			return Object.assign({}, state, {
				topicId: action.topicId
			});
		case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["j" /* RECEIVED_GET_MORE_TOPICS */]:
			const newTopics = action.topics;
			const nowTopics = state.topics;

			return Object.assign({}, state, {
				totalCount: state.totalCount,
				topics: nowTopics.concat(newTopics)
			});
		default:
			return state;
	}
}
const middleware = [__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a];
if (process.env.NODE_ENV !== 'production') {
	middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux_logger__["createLogger"])());
}

const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["b" /* createStore */])(topicReducer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["c" /* applyMiddleware */])(...middleware));

/* harmony default export */ __webpack_exports__["a"] = (store);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

},[258]);
//# sourceMappingURL=topics.js.map