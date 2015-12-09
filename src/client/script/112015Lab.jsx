import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Nov2015Lab from '../../shared/view/lab/112015/Nov2015Lab';
import TimeKeeper from './112015/component/TimeKeeper';

// TODO: Add a document.ready
ReactDOM.render(
    (
        <Nov2015Lab>
            <TimeKeeper width="800"
                        height="600" />
        </Nov2015Lab>
    ),
    document.getElementById('primaryContent')
);