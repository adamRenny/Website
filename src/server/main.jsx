'use strict';

import React from 'react';
import GeneralPageLayout from './view/page/layout/GeneralPageLayout';
import Page from './model/Page';

var doctype = '<!doctype html>\n';
console.log('?!@#');
var page = new Page();
var content = React.renderToStaticMarkup(<GeneralPageLayout page={page} />);

console.log(doctype + content);