'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import AboutRoute from './view/page/route/AboutRoute';
import Page from './model/Page';

var doctype = '<!doctype html>\n';
var page = new Page();
var content = ReactDOMServer.renderToStaticMarkup(<AboutRoute page={ page } />);

console.log(doctype + content);