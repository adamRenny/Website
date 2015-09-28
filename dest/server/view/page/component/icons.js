'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PageIcons = (function (_React$Component) {
    _inherits(PageIcons, _React$Component);

    function PageIcons() {
        _classCallCheck(this, PageIcons);

        _get(Object.getPrototypeOf(PageIcons.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PageIcons, [{
        key: 'render',
        value: function render() {

            return _react2['default'].createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg',
                    /*xmlns:xlink="http://www.w3.org/1999/xlink"*/
                    version: '1.1',
                    id: 'logos',
                    className: 'preloadSource' },
                _react2['default'].createElement(
                    'defs',
                    null,
                    _react2['default'].createElement(
                        'symbol',
                        { id: 'logo-npm',
                            viewBox: '0 0 500 195',
                            preserveAspectRatio: 'xMinYMin' },
                        _react2['default'].createElement('path', { d: 'M0,0 L500,0 L500,168 L250,168 L250,195 L139,195 L139,168 L0,168 Z M28.304251,139.493165 L83.536238,139.49349 L83.5362388,55.5592922 L111.304251,55.5592922 L111.304251,139.493491 L138.822477,139.493491 L138.822477,28.4929443 L28.304251,28.4929443 Z M166.333333,28 L166.666667,168 L221.666667,168 L221.666667,140.067308 L277.345845,140.067308 L277.345845,28 Z M221,55 L250,55 L250,112 L221,112 Z M305.333333,28 L305.333333,139 L360.664651,139 L360.664651,55.666008 L388.33133,55.666008 L388.33133,139.000547 L415.967888,139.000547 L415.967888,56 L443.664659,56 L443.664659,139 L471.338699,139 L471.338699,28 Z M305.333333,28', fill: '#CD3632' })
                    ),
                    _react2['default'].createElement(
                        'symbol',
                        { id: 'logo-twitter',
                            viewBox: '0 0 6702.7121 5445',
                            preserveAspectRatio: 'xMinYMin' },
                        _react2['default'].createElement('path', { fill: '#41ABE1', d: 'M 6701,645 C 6454,754 6189,828 5911,861 6195,691 6413,421 6515,100 6249,258 5955,372 5642,434 5391,167 5034,0 4638,0 3879,0 3263,616 3263,1375 c 0,108 12,213 36,313 C 2156,1631 1143,1083 465,251 347,454 279,690 279,942 c 0,477 243,898 612,1144 -225,-7 -437,-69 -623,-172 0,6 0,11 0,17 0,666 474,1222 1103,1348 -115,31 -237,48 -362,48 -89,0 -175,-9 -259,-25 175,546 683,944 1284,955 -471,369 -1063,589 -1708,589 -111,0 -220,-7 -328,-19 608,390 1331,618 2108,618 2529,0 3912,-2095 3912,-3912 0,-60 -1,-119 -4,-178 269,-194 502,-436 686,-712 z' })
                    ),
                    _react2['default'].createElement(
                        'symbol',
                        { id: 'logo-codepen',
                            viewBox: '0 0 120 120',
                            preserveAspectRatio: 'xMinYMin' },
                        _react2['default'].createElement('path', { fill: '#000000', d: 'M60.048 0C26.884 0 0 26.9 0 60.048s26.884 60 60 60.047c33.163 0 60.047-26.883 60.047-60.047 S93.211 0 60 0z M60.048 110.233c-27.673 0-50.186-22.514-50.186-50.186S32.375 9.9 60 9.9 c27.672 0 50.2 22.5 50.2 50.186S87.72 110.2 60 110.233z' }),
                        _react2['default'].createElement('path', { fill: '#000000', d: 'M97.147 48.319c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.268 c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156 c-0.033-0.072-0.068-0.143-0.108-0.211c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193 c-0.035-0.047-0.072-0.094-0.109-0.139c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125 c-0.059-0.053-0.119-0.104-0.181-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.817 23.5 c-1.072-0.715-2.468-0.715-3.54 0L24.34 46.081c-0.018 0.012-0.034 0.027-0.053 0.039c-0.05 0.035-0.097 0.072-0.144 0.1 c-0.062 0.049-0.123 0.1-0.181 0.152c-0.045 0.039-0.086 0.082-0.128 0.125c-0.056 0.055-0.108 0.113-0.158 0.2 c-0.038 0.045-0.075 0.092-0.11 0.139c-0.047 0.062-0.092 0.127-0.134 0.193c-0.032 0.049-0.062 0.098-0.092 0.1 c-0.039 0.068-0.074 0.139-0.108 0.211c-0.024 0.051-0.05 0.104-0.071 0.156c-0.031 0.076-0.057 0.154-0.082 0.2 c-0.017 0.051-0.035 0.102-0.05 0.154c-0.023 0.088-0.039 0.178-0.056 0.268c-0.008 0.047-0.02 0.092-0.025 0.1 c-0.019 0.137-0.029 0.275-0.029 0.416V71.36c0 0.1 0 0.3 0 0.418c0.006 0 0 0.1 0 0.1 c0.017 0.1 0 0.2 0.1 0.268c0.015 0.1 0 0.1 0.1 0.154c0.025 0.1 0.1 0.2 0.1 0.2 c0.021 0.1 0 0.1 0.1 0.154c0.034 0.1 0.1 0.1 0.1 0.213c0.029 0 0.1 0.1 0.1 0.1 c0.042 0.1 0.1 0.1 0.1 0.193c0.035 0 0.1 0.1 0.1 0.139c0.05 0.1 0.1 0.1 0.2 0.2 c0.042 0 0.1 0.1 0.1 0.125c0.058 0.1 0.1 0.1 0.2 0.152c0.047 0 0.1 0.1 0.1 0.1 c0.019 0 0 0 0.1 0.039L58.277 96.64c0.536 0.4 1.2 0.5 1.8 0.537c0.616 0 1.233-0.18 1.77-0.537 l33.938-22.625c0.018-0.012 0.034-0.027 0.053-0.039c0.05-0.035 0.097-0.072 0.145-0.109c0.062-0.049 0.122-0.1 0.181-0.152 c0.044-0.039 0.085-0.082 0.127-0.125c0.056-0.055 0.108-0.113 0.159-0.172c0.037-0.045 0.074-0.09 0.109-0.139 c0.048-0.062 0.092-0.127 0.135-0.193c0.03-0.049 0.062-0.098 0.091-0.146c0.04-0.07 0.075-0.141 0.108-0.213 c0.024-0.051 0.05-0.102 0.071-0.154c0.031-0.078 0.057-0.156 0.082-0.234c0.017-0.051 0.036-0.102 0.05-0.154 c0.023-0.088 0.04-0.178 0.056-0.268c0.008-0.045 0.02-0.092 0.026-0.137c0.018-0.139 0.028-0.277 0.028-0.418V48.735 C97.176 48.6 97.2 48.5 97.1 48.319z M63.238 32.073l25.001 16.666L77.072 56.21l-13.834-9.254V32.073z M56.856 32.1 v14.883L43.023 56.21l-11.168-7.471L56.856 32.073z M29.301 54.708l7.983 5.34l-7.983 5.34V54.708z M56.856 88.022L31.855 71.4 l11.168-7.469l13.833 9.252V88.022z M60.048 67.597l-11.286-7.549l11.286-7.549l11.285 7.549L60.048 67.597z M63.238 88.022V73.14 l13.834-9.252l11.167 7.469L63.238 88.022z M90.794 65.388l-7.982-5.34l7.982-5.34V65.388z' })
                    ),
                    _react2['default'].createElement(
                        'symbol',
                        { id: 'logo-linkedin',
                            viewBox: '0 0 244 215',
                            preserveAspectRatio: 'xMinYMin' },
                        _react2['default'].createElement(
                            'g',
                            null,
                            _react2['default'].createElement(
                                'g',
                                null,
                                _react2['default'].createElement('path', { fill: '#007BB6', d: 'M200,0H15.943C7.144,0-0.001,6.977-0.001,15.562v184.852c0,8.602,7.145,15.586,15.944,15.586H200 c8.809,0,15.999-6.984,15.999-15.586V15.562C215.999,6.977,208.809,0,200,0z' }),
                                _react2['default'].createElement('path', { fill: '#FFFFFF', d: 'M32.009,80.984H64.06v103.078H32.009V80.984z M48.036,29.738c10.242,0,18.566,8.324,18.566,18.57 c0,10.258-8.324,18.582-18.566,18.582c-10.27,0-18.57-8.324-18.57-18.582C29.466,38.062,37.767,29.738,48.036,29.738' }),
                                _react2['default'].createElement('path', { fill: '#FFFFFF', d: 'M84.153,80.984h30.734v14.078h0.438c4.277-8.102,14.73-16.648,30.316-16.648 c32.418,0,38.406,21.344,38.406,49.109v56.539h-32v-50.125c0-11.961-0.234-27.336-16.652-27.336 c-16.672,0-19.215,13.023-19.215,26.469v50.992H84.153V80.984z' })
                            )
                        ),
                        _react2['default'].createElement(
                            'g',
                            null,
                            _react2['default'].createElement('polygon', { fill: '#FFFFFF', points: '222.922,174.469 226,174.469 226,184.062 227.672,184.062 227.672,174.469 230.742,174.469 230.742,172.797 222.922,172.797' }),
                            _react2['default'].createElement('polygon', { fill: '#FFFFFF', points: '241.617,172.797 238.332,181.062 235.051,172.797 232.668,172.797 232.668,184.062 234.332,184.062 234.332,175.492 237.777,184.062 238.891,184.062 242.336,175.492 242.336,184.062 244,184.062 244,172.797' })
                        )
                    ),
                    _react2['default'].createElement(
                        'symbol',
                        { id: 'logo-github',
                            viewBox: '0 0 122 118',
                            preserveAspectRatio: 'xMinYMin' },
                        _react2['default'].createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', fill: '#191717', d: 'M60.388,0C27.041,0,0,27.035,0,60.388 c0,26.681,17.303,49.316,41.297,57.302c3.018,0.559,4.126-1.311,4.126-2.905c0-1.439-0.056-6.197-0.082-11.243 c-16.8,3.653-20.345-7.125-20.345-7.125c-2.747-6.979-6.705-8.836-6.705-8.836c-5.479-3.748,0.413-3.671,0.413-3.671 c6.063,0.426,9.257,6.224,9.257,6.224c5.386,9.231,14.127,6.562,17.573,5.02c0.542-3.902,2.106-6.567,3.834-8.075 c-13.413-1.526-27.514-6.705-27.514-29.844c0-6.593,2.359-11.98,6.223-16.209c-0.627-1.521-2.694-7.663,0.585-15.981 c0,0,5.071-1.622,16.61,6.191c4.817-1.338,9.983-2.009,15.115-2.033c5.132,0.023,10.302,0.694,15.128,2.033 c11.526-7.813,16.59-6.191,16.59-6.191c3.287,8.318,1.22,14.46,0.593,15.981c3.872,4.229,6.215,9.616,6.215,16.209 c0,23.194-14.127,28.301-27.574,29.796c2.166,1.874,4.096,5.549,4.096,11.183c0,8.08-0.069,14.583-0.069,16.572 c0,1.607,1.087,3.49,4.147,2.897c23.981-7.994,41.263-30.622,41.263-57.294C120.775,27.035,93.738,0,60.388,0z' }),
                        _react2['default'].createElement(
                            'g',
                            { 'class': 'logo-github-dots' },
                            _react2['default'].createElement('path', { fill: '#191717', d: 'M22.872,86.703c-0.133,0.301-0.605,0.391-1.035,0.185c-0.438-0.197-0.684-0.606-0.542-0.907 c0.13-0.309,0.603-0.395,1.04-0.188C22.773,85.989,23.023,86.402,22.872,86.703L22.872,86.703z M22.129,86.152' }),
                            _react2['default'].createElement('path', { fill: '#191717', d: 'M25.318,89.432c-0.288,0.267-0.852,0.143-1.233-0.279c-0.396-0.421-0.469-0.984-0.177-1.255 c0.297-0.267,0.843-0.142,1.238,0.279C25.542,88.603,25.619,89.161,25.318,89.432L25.318,89.432z M24.742,88.813' }),
                            _react2['default'].createElement('path', { fill: '#191717', d: 'M27.699,92.909c-0.37,0.258-0.976,0.017-1.35-0.521c-0.37-0.537-0.37-1.182,0.009-1.439 c0.374-0.258,0.971-0.025,1.35,0.507C28.077,92.002,28.077,92.646,27.699,92.909L27.699,92.909z M27.699,92.909' }),
                            _react2['default'].createElement('path', { fill: '#191717', d: 'M30.961,96.27c-0.331,0.365-1.036,0.267-1.552-0.231c-0.528-0.486-0.675-1.178-0.344-1.543 c0.336-0.365,1.045-0.263,1.564,0.231C31.154,95.213,31.313,95.908,30.961,96.27L30.961,96.27z M30.961,96.27' }),
                            _react2['default'].createElement('path', { fill: '#191717', d: 'M35.461,98.221c-0.146,0.473-0.825,0.688-1.509,0.486c-0.684-0.207-1.13-0.761-0.992-1.238 c0.142-0.477,0.824-0.7,1.513-0.485C35.155,97.189,35.603,97.739,35.461,98.221L35.461,98.221z M35.461,98.221' }),
                            _react2['default'].createElement('path', { fill: '#191717', d: 'M40.403,98.582c0.017,0.498-0.563,0.911-1.281,0.92c-0.722,0.017-1.307-0.387-1.314-0.877 c0-0.503,0.567-0.911,1.289-0.924C39.814,97.688,40.403,98.088,40.403,98.582L40.403,98.582z M40.403,98.582' }),
                            _react2['default'].createElement('path', { fill: '#191717', d: 'M45.002,97.8c0.086,0.485-0.413,0.984-1.126,1.117c-0.701,0.129-1.35-0.172-1.439-0.653 c-0.087-0.498,0.421-0.997,1.121-1.126C44.271,97.014,44.911,97.306,45.002,97.8L45.002,97.8z M45.002,97.8' })
                        )
                    )
                )
            );
        }
    }]);

    return PageIcons;
})(_react2['default'].Component);

exports['default'] = PageIcons;
module.exports = exports['default'];
/* NPM */ /* End NPM */ /* Twitter */ /* End Twitter */ /* Codepen */ /* End Codepen */ /* LinkedIn */ /* End LinkedIn */ /* Github */ /* Octocat Dots */ /* End Github */