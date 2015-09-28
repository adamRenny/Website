'use strict';

import React from 'react';
import GeneralPageLayout from './view/page/layout/GeneralPageLayout';

var doctype = '<!doctype html>\n';
var content = React.renderToString(<GeneralPageLayout />);

console.log(doctype + content);