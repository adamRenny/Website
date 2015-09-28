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
                { className: 'footer', id: 'footer' },
                _react2['default'].createElement(
                    'div',
                    { className: 'footer-nav', role: 'navigation' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'mainNav' },
                        _react2['default'].createElement(
                            'div',
                            { id: 'bottomSocialNav' },
                            _react2['default'].createElement(_navigationSocialNavigation2['default'], null)
                        ),
                        _react2['default'].createElement(
                            'div',
                            { id: 'bottomPageNav' },
                            _react2['default'].createElement(_navigationPageNavigation2['default'], null)
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'footer-bd',
                        id: 'copyright', role: 'contentinfo' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'sleeve', id: 'footerContent' },
                        _react2['default'].createElement(
                            'h1',
                            { className: 'visuallyHidden' },
                            'Code and Site Copyright'
                        ),
                        _react2['default'].createElement(
                            'h2',
                            { className: 'visuallyHidden' },
                            'Source Code License Notice'
                        ),
                        _react2['default'].createElement(
                            'p',
                            { className: 'footer-bd-content' },
                            _react2['default'].createElement(
                                'small',
                                null,
                                '© 2012 - 2014 ',
                                _react2['default'].createElement(
                                    'span',
                                    { itemprop: 'givenName' },
                                    'Adam'
                                ),
                                ' ',
                                _react2['default'].createElement(
                                    'span',
                                    { itemprop: 'familyName' },
                                    'Ranfelt'
                                ),
                                '. All rights reserved.'
                            ),
                            _react2['default'].createElement('br', null),
                            _react2['default'].createElement(
                                'small',
                                null,
                                'All demo source code licensed under ',
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/', title: 'Source Code License' },
                                    'MIT'
                                ),
                                ' unless noted otherwise.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PageWrapper;
})(_react2['default'].Component);

exports['default'] = PageWrapper;
module.exports = exports['default'];
/* Footer Navigation */ /* End Footer Navigation */ /* Footer Copyright */ /* End Footer Copyright */