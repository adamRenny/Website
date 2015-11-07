import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import November2015Visualization from '../../shared/view/visualization/november2015/November2015Visualization';

// TODO: Add a document.ready
ReactDOM.render(
    <November2015Visualization />,
    document.getElementById('viz-112015')
);