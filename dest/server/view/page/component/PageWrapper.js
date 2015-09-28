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

var _navigationPageNavigation = require('./navigation/PageNavigation');

var _navigationPageNavigation2 = _interopRequireDefault(_navigationPageNavigation);

var _navigationSocialNavigation = require('./navigation/SocialNavigation');

var _navigationSocialNavigation2 = _interopRequireDefault(_navigationSocialNavigation);

var PageWrapper = (function (_React$Component) {
    _inherits(PageWrapper, _React$Component);

    function PageWrapper() {
        _classCallCheck(this, PageWrapper);

        _get(Object.getPrototypeOf(PageWrapper.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PageWrapper, [{
        key: 'render',
        value: function render() {

            return _react2['default'].createElement(
                'div',
                { className: 'wrap' },
                _react2['default'].createElement(
                    'div',
                    { className: 'masthead' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'masthead-bd', role: 'banner' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'sleeve' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'masthead-bd-logo' },
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/', title: 'Return to Main', className: 'hdg hdg_1' },
                                    _react2['default'].createElement(
                                        'h1',
                                        { 'aria-label': 'Logo' },
                                        '<adamRenny />'
                                    )
                                )
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'masthead-nav', role: 'navigation' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'mainNav' },
                            _react2['default'].createElement(
                                'div',
                                { id: 'topMainNav' },
                                _react2['default'].createElement(_navigationPageNavigation2['default'], null)
                            ),
                            _react2['default'].createElement(
                                'div',
                                { id: 'topSocialNav' },
                                _react2['default'].createElement(_navigationSocialNavigation2['default'], null)
                            )
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'sleeve', id: 'mainContent',
                        role: 'main' },
                    _react2['default'].createElement('div', { className: 'content' })
                )
            );
        }
    }]);

    return PageWrapper;
})(_react2['default'].Component);

exports['default'] = PageWrapper;
module.exports = exports['default'];
/* Masthead */ /* End Masthead */ /* Main Content */ /* End Main Content */