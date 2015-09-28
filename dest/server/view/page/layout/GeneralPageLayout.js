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

var _componentAssetsPageIcons = require('../component/assets/PageIcons');

var _componentAssetsPageIcons2 = _interopRequireDefault(_componentAssetsPageIcons);

var _componentNavigationSkipNavigation = require('../component/navigation/SkipNavigation');

var _componentNavigationSkipNavigation2 = _interopRequireDefault(_componentNavigationSkipNavigation);

var _componentPageWrapper = require('../component/PageWrapper');

var _componentPageWrapper2 = _interopRequireDefault(_componentPageWrapper);

var _componentFooter = require('../component/Footer');

var _componentFooter2 = _interopRequireDefault(_componentFooter);

var GeneralPageLayout = (function (_React$Component) {
    _inherits(GeneralPageLayout, _React$Component);

    function GeneralPageLayout() {
        _classCallCheck(this, GeneralPageLayout);

        _get(Object.getPrototypeOf(GeneralPageLayout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(GeneralPageLayout, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'html',
                { lang: 'en' },
                _react2['default'].createElement(
                    'head',
                    null,
                    _react2['default'].createElement('meta', { charset: 'utf-8' }),
                    _react2['default'].createElement('meta', { name: 'description',
                        content: 'Adam Renny\'s development website, a testbed for experiments' }),
                    _react2['default'].createElement('meta', { name: 'author',
                        content: 'Adam Ranfelt' }),
                    _react2['default'].createElement(
                        'title',
                        null,
                        this.pageTitle
                    ),
                    _react2['default'].createElement('meta', { name: 'robots', content: 'index,follow' }),
                    _react2['default'].createElement('link', { rel: 'icon', href: 'favicon.ico',
                        sizes: '16x16 32x32 48x48 64x64',
                        type: 'image/vnd.microsoft.icon' }),
                    _react2['default'].createElement('meta', { property: 'og:title',
                        content: 'adamRenny' }),
                    _react2['default'].createElement('meta', { property: 'og:type',
                        content: 'website' }),
                    _react2['default'].createElement('meta', { property: 'og:description',
                        content: 'Adam Renny\'s personal development playground website' }),
                    _react2['default'].createElement('meta', { property: 'og:image',
                        content: 'http://site.adamrenny.me/media/img/8bit.png' }),
                    _react2['default'].createElement('meta', { property: 'og:url',
                        content: 'http://site.adamrenny.me/' }),
                    _react2['default'].createElement('meta', { name: 'viewport',
                        content: 'width=device-width, user-scalable=no' }),
                    _react2['default'].createElement('link', { href: 'styles/screen.css',
                        rel: 'stylesheet',
                        media: 'screen' })
                ),
                _react2['default'].createElement(
                    'body',
                    null,
                    _react2['default'].createElement(_componentAssetsPageIcons2['default'], null),
                    _react2['default'].createElement(_componentNavigationSkipNavigation2['default'], null),
                    _react2['default'].createElement(
                        _componentPageWrapper2['default'],
                        null,
                        this.props.content
                    ),
                    _react2['default'].createElement(_componentFooter2['default'], null)
                )
            );
        }
    }, {
        key: 'pageTitle',
        get: function get() {
            var title = 'adamRenny';
            if (this.props.title) {
                title = title + ' | ' + this.props.title;
            }

            return title;
        }
    }], [{
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return {};
        }
    }]);

    return GeneralPageLayout;
})(_react2['default'].Component);

exports['default'] = GeneralPageLayout;
module.exports = exports['default'];
/*
                   <script>
                       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                       })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                       ga('create', 'UA-52339986-1', 'auto');
                       ga('send', 'pageview');
                   </script>
*/