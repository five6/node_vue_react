webpackJsonp([2],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Topic__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_topic__ = __webpack_require__(65);





class TopicsRoot extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
      { store: __WEBPACK_IMPORTED_MODULE_3__reducers_topic__["a" /* default */] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Topic__["a" /* default */], null)
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopicsRoot;


/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_topic_Topicdetail__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_topic__ = __webpack_require__(30);








class TopicApp extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
		const locations = window.location.href.split("/");
		const topicId = locations[locations.length - 1];
		this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_topic__["a" /* fetch_topicDetail_if_need */])(topicId));
		this.state = { topicId: topicId };
	}
	componentDidMount() {}
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'ui content' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_topic_Topicdetail__["a" /* default */], { topicId: this.state.topicId, topic: this.props.topic })
		);
	}
}

function mapStateToProps(state) {
	return {
		topic: state.topic
	};
}
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(TopicApp));

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_topic_TopicRoot__ = __webpack_require__(108);




const nodeDiv = document.getElementById("topic-container");
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_topic_TopicRoot__["a" /* default */], null), nodeDiv);

/***/ }),

/***/ 30:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(63);


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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(14);




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

/***/ 63:
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

/***/ 64:
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(39);
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

},[244]);
//# sourceMappingURL=topic.js.map