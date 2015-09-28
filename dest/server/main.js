'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _viewPageLayoutGeneralPageLayout = require('./view/page/layout/GeneralPageLayout');

var _viewPageLayoutGeneralPageLayout2 = _interopRequireDefault(_viewPageLayoutGeneralPageLayout);

var doctype = '<!doctype html>\n';
var content = _react2['default'].renderToString(_react2['default'].createElement(_viewPageLayoutGeneralPageLayout2['default'], null));

console.log(doctype + content);