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

var SocialNavigation = (function (_React$Component) {
    _inherits(SocialNavigation, _React$Component);

    function SocialNavigation() {
        _classCallCheck(this, SocialNavigation);

        _get(Object.getPrototypeOf(SocialNavigation.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SocialNavigation, [{
        key: 'render',
        value: function render() {

            return _react2['default'].createElement(
                'div',
                { className: 'mainNav-social' },
                _react2['default'].createElement(
                    'div',
                    { className: 'sleeve' },
                    _react2['default'].createElement(
                        'ul',
                        { className: 'hList mix-hList_smallCentered hList_spacedSm' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                'a',
                                { href: '/',
                                    title: 'Watch my Github repositories',
                                    className: 'mainNav-social-ref',
                                    target: '_blank' },
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'visuallyHidden' },
                                    'Github'
                                ),
                                _react2['default'].createElement(
                                    'svg',
                                    { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', version: '1.1',
                                        className: 'vecIco vecIco_github mix-vecIco_small' },
                                    _react2['default'].createElement('use', { xlinkHref: '#logo-github' })
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                'a',
                                { href: '/',
                                    title: 'Check out my LinkedIn',
                                    className: 'mainNav-social-ref',
                                    target: '_blank' },
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'visuallyHidden' },
                                    'LinkedIn'
                                ),
                                _react2['default'].createElement(
                                    'svg',
                                    { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', version: '1.1',
                                        className: 'vecIco vecIco_linkedin mix-vecIco_small' },
                                    _react2['default'].createElement('use', { xlinkHref: '#logo-linkedin' })
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                'a',
                                { href: '/',
                                    title: 'Try my NPM packages',
                                    className: 'mainNav-social-ref',
                                    target: '_blank' },
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'visuallyHidden' },
                                    'npm'
                                ),
                                _react2['default'].createElement(
                                    'svg',
                                    { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', version: '1.1',
                                        className: 'vecIco vecIco_npm mix-vecIco_small' },
                                    _react2['default'].createElement('use', { xlinkHref: '#logo-npm' })
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                'a',
                                { href: '/',
                                    title: 'Follow me on Twitter',
                                    className: 'mainNav-social-ref',
                                    target: '_blank' },
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'visuallyHidden' },
                                    'Twitter'
                                ),
                                _react2['default'].createElement(
                                    'svg',
                                    { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', version: '1.1',
                                        className: 'vecIco vecIco_twitter mix-vecIco_small' },
                                    _react2['default'].createElement('use', { xlinkHref: '#logo-twitter' })
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                'a',
                                { href: '/',
                                    title: 'Check out my CodePens',
                                    className: 'mainNav-social-ref',
                                    target: '_blank' },
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'visuallyHidden' },
                                    'CodePen'
                                ),
                                _react2['default'].createElement(
                                    'svg',
                                    { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', version: '1.1',
                                        className: 'vecIco vecIco_codepen mix-vecIco_small' },
                                    _react2['default'].createElement('use', { xlinkHref: '#logo-codepen' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SocialNavigation;
})(_react2['default'].Component);

exports['default'] = SocialNavigation;
module.exports = exports['default'];