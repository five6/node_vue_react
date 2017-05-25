webpackJsonp([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Albums__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_album__ = __webpack_require__(122);





class AlbumsRoot extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
            { store: __WEBPACK_IMPORTED_MODULE_3__reducers_album__["a" /* default */] },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Albums__["a" /* default */], null)
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AlbumsRoot;


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export action_get_albums */
/* unused harmony export action_received_albums */
/* unused harmony export action_delete_album */
/* unused harmony export action_received_delete_album */
/* unused harmony export action_add_album */
/* unused harmony export action_received_add_album */
/* unused harmony export action_add_photo */
/* unused harmony export action_received_add_photo */
/* unused harmony export action_delete_photo */
/* unused harmony export action_received_delete_photo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__ = __webpack_require__(114);


function action_get_albums(userId) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["a" /* F_ALBUMS */],
        userId
    };
}
function action_received_albums(albums) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["b" /* R_ALBUMS */],
        albums
    };
}

function action_delete_album(albumId) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["c" /* DEL_ALBUM */],
        albumId
    };
}
function action_received_delete_album(albumId) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["d" /* R_DEL_ALBUM */],
        albumId
    };
}

function action_add_album(album) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["e" /* ADD_ALBUM */],
        album
    };
}
function action_received_add_album(album) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["f" /* R_ADD_ALBUM */],
        album
    };
}

function action_add_photo(photo) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["g" /* ADD_PHOTO */],
        photo
    };
}
function action_received_add_photo(photo) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["h" /* R_ADD_PHOTO */],
        photo
    };
}

function action_delete_photo(photoId) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["i" /* DEL_PHOTO */],
        photoId
    };
}
function action_received_delete_photo(photoId) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes_album__["j" /* R_DEL_PHOTO */],
        photoId
    };
}

const ajax_get_albums = userId => dispatch => {
    dispatch(action_get_albums(userId));
    $.ajax({
        url: "/api/albums",
        method: "get",
        type: "json",
        success: function (topics) {
            dispatch(action_received_albums(topics));
        },
        error: function (err, status) {
            console.log(err);
        }
    });
};

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



class Album extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {}
	render() {
		const { photos } = this.props;
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			null,
			photos.map(photo => {
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'album' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'photo' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: photo.src })
					)
				);
			})
		);
	}
}
/* unused harmony export default */


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_album__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Album__ = __webpack_require__(110);




class Albums extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.showCreateAlbumModal = this.showCreateAlbumModal.bind(this);
        this.onclicCreateAlbum = this.onclicCreateAlbum.bind(this);
    }

    showCreateAlbumModal() {
        $('.createAlbumModal').modal('show');
        $('.albumAuthority').dropdown();
        $('.ui.radio.albumTopic').checkbox();
        ;
    }

    onclicCreateAlbum(element) {
        const name = this.refs.preAlbumName.value;
        const description = this.refs.preAlbumDescription.value;
        const topic = this.refs.preAlbumTopic.value;
        const authority = this.refs.prelbumAuthority.value;
        const album = {
            name: name,
            description, description,
            authority: authority,
            topic: topic

        };
        this.props.createAlbum(album);
    }

    componentDidMount() {}
    render() {

        const { albums } = this.props;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ui' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'toolbar' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ui buttons' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: 'ui red basic button' },
                        '\u4E0A\u4F20\u7167\u7247'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { onClick: e => this.showCreateAlbumModal(e), className: 'ui green basic button' },
                        '\u521B\u5EFA\u76F8\u518C'
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'albums' },
                albums.map(album => {
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'albums-one' },
                        album.name
                    );
                })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui modal createAlbumModal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'header' },
                    '\u521B\u5EFA\u76F8\u518C'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'ui form' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'field' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'label',
                                null,
                                '\u76F8\u518C\u540D\u79F0'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'ui left icon input' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', ref: 'preAlbumName', name: 'albumName', maxLength: '30', placeholder: '' })
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'field' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'label',
                                null,
                                '\u76F8\u518C\u63CF\u8FF0'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'ui left icon input' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { ref: 'preAlbumDescription', name: 'albumDescription', maxLength: '2000', rows: '5', cols: '8', placeholder: '\u975E\u5FC5\u586B' })
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'inline fields' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'label',
                                { htmlFor: 'topic' },
                                '\u4E3B\u9898'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'field' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'ui radio checkbox albumTopic', ref: 'preAlbumTopic' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'topic', defaultChecked: true, tabIndex: '0', className: 'hidden' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        null,
                                        '\u666E\u901A'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'field' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'ui radio checkbox albumTopic' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'topic', tabIndex: '0', className: 'hidden' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        null,
                                        '\u4EB2\u5B50'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'field' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'ui radio checkbox albumTopic' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'topic', tabIndex: '0', className: 'hidden' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        null,
                                        '\u65C5\u6E38'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'field' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'ui radio checkbox albumTopic' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'topic', tabIndex: '0', className: 'hidden' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        null,
                                        '\u6821\u53CB'
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
                                '\u6743\u9650'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'ui albumAuthority selection dropdown', ref: 'prelbumAuthority' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'hidden', name: 'sex' }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'dropdown icon' }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'default text' },
                                    '\u6240\u6709\u4EBA\u53EF\u89C1'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'menu' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'item', 'data-value': '1' },
                                        '\u6240\u6709\u4EBA\u53EF\u89C1'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'item', 'data-value': '2' },
                                        '\u670B\u53CB\u53EF\u89C1'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'item', 'data-value': '3' },
                                        '\u4EC5\u81EA\u5DF1\u53EF\u89C1'
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'actions' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { onClick: e => this.onclicCreateAlbum(e), className: 'ui blue button' },
                        '\u786E\u5B9A'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'ui cancel grey button' },
                        '\u53D6\u6D88'
                    )
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Albums;


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const F_ALBUMS = "F_ALBUMS";
/* harmony export (immutable) */ __webpack_exports__["a"] = F_ALBUMS;

const R_ALBUMS = "R_ALBUMS";
/* harmony export (immutable) */ __webpack_exports__["b"] = R_ALBUMS;


const F_ALBUM = "F_ALBUM";
/* unused harmony export F_ALBUM */

const R_ALBUM = "R_ALBUM";
/* unused harmony export R_ALBUM */


const ADD_ALBUM = "ADD_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["e"] = ADD_ALBUM;

const R_ADD_ALBUM = "R_ADD_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["f"] = R_ADD_ALBUM;


const DEL_ALBUM = "DEL_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["c"] = DEL_ALBUM;

const R_DEL_ALBUM = "R_DEL_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["d"] = R_DEL_ALBUM;


const ADD_PHOTO = "ADD_PHOTO";
/* harmony export (immutable) */ __webpack_exports__["g"] = ADD_PHOTO;

const R_ADD_PHOTO = "R_ADD_PHOTO";
/* harmony export (immutable) */ __webpack_exports__["h"] = R_ADD_PHOTO;


const DEL_PHOTO = "DEL_PHOTO";
/* harmony export (immutable) */ __webpack_exports__["i"] = DEL_PHOTO;

const R_DEL_PHOTO = "R_DEL_PHOTO";
/* harmony export (immutable) */ __webpack_exports__["j"] = R_DEL_PHOTO;


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const F_ALBUMS = "F_ALBUMS";
/* harmony export (immutable) */ __webpack_exports__["a"] = F_ALBUMS;

const R_ALBUMS = "R_ALBUMS";
/* harmony export (immutable) */ __webpack_exports__["b"] = R_ALBUMS;


const F_ALBUM = "F_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["c"] = F_ALBUM;

const R_ALBUM = "R_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["d"] = R_ALBUM;


const ADD_ALBUM = "ADD_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["e"] = ADD_ALBUM;

const R_ADD_ALBUM = "R_ADD_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["f"] = R_ADD_ALBUM;


const DEL_ALBUM = "DEL_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["g"] = DEL_ALBUM;

const R_DEL_ALBUM = "R_DEL_ALBUM";
/* harmony export (immutable) */ __webpack_exports__["h"] = R_DEL_ALBUM;


const ADD_PHOTO = "ADD_PHOTO";
/* harmony export (immutable) */ __webpack_exports__["i"] = ADD_PHOTO;

const R_ADD_PHOTO = "R_ADD_PHOTO";
/* harmony export (immutable) */ __webpack_exports__["j"] = R_ADD_PHOTO;


const DEL_PHOTO = "DEL_PHOTO";
/* harmony export (immutable) */ __webpack_exports__["k"] = DEL_PHOTO;

const R_DEL_PHOTO = "R_DEL_PHOTO";
/* harmony export (immutable) */ __webpack_exports__["l"] = R_DEL_PHOTO;


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_album_Albums__ = __webpack_require__(111);





class AlbumApp extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.createAlbum = this.createAlbum.bind(this);
    this.deleteAlbum = this.deleteAlbum.bind(this);
    this.updateAlbum = this.updateAlbum.bind(this);
    this.getAlbums = this.getAlbums.bind(this);
  }
  componentDidMount() {}
  getAlbums() {
    alert("get albums");
  }
  createAlbum(album) {
    alert(album);
  }
  deleteAlbum() {
    alert("delete alubm");
  }
  updateAlbum() {
    alert("update album");
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_album_Albums__["a" /* default */], { updateAlbum: this.updateAlbum, deleteAlbum: this.deleteAlbum, createAlbum: this.createAlbum, getAlbums: this.getAlbums, albums: this.props.albums });
  }

}
AlbumApp.propTypes = {
  albums: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired
};

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(AlbumApp));

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_album_AlbumsRoot__ = __webpack_require__(106);




const nodeDiv = document.getElementById("album-container");
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_album_AlbumsRoot__["a" /* default */], null), nodeDiv);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);





const initState = {
    albums: []
};

function albumReducer(state = initState, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["a" /* F_ALBUMS */]:
            break;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["b" /* R_ALBUMS */]:
            break;

        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["c" /* F_ALBUM */]:
            break;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["d" /* R_ALBUM */]:
            break;

        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["e" /* ADD_ALBUM */]:
            break;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["f" /* R_ADD_ALBUM */]:
            break;

        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["g" /* DEL_ALBUM */]:
            break;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["h" /* R_DEL_ALBUM */]:
            break;

        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["i" /* ADD_PHOTO */]:
            break;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["j" /* R_ADD_PHOTO */]:
            break;

        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["k" /* DEL_PHOTO */]:
            break;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes_album__["l" /* R_DEL_PHOTO */]:
            break;
        default:
            return state;
    }
}
const middleware = [__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux_logger__["createLogger"])());
}
const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["b" /* createStore */])(albumReducer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["c" /* applyMiddleware */])(...middleware));
/* harmony default export */ __webpack_exports__["a"] = (store);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

},[119]);
//# sourceMappingURL=albums.js.map