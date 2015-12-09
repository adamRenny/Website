import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Nov2015Lab from '../../shared/lab/112015/Nov2015Lab';

/**
 * Server-level React Component
 * BSD-3 License
 *
 * State-less React component
 *
 * @class LicenseContent
 * @extends React.Component
 * @constructor
 */
export default class LabContent extends React.Component {
    buildWebContent() {
        return ReactDOMServer.renderToString(
            <Nov2015Lab />
        );
    }

    render() {
        return (
            <div role="article"
               id="primaryContent"
               className="article"
               dangerouslySetInnerHTML={ { __html: this.buildWebContent() } }>
            </div>
        );
    }
};
