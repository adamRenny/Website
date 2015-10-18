import React from 'react';
import ReactDOMServer from 'react-dom/server';

import October2015Game from '../../shared/October2015Game';

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
        return ReactDOMServer.renderToStaticMarkup(
            <October2015Game />
        );
    }

    render() {
        return (
            <div role="article"
               className="article"
               dangerouslySetInnerHTML={ { __html: this.buildWebContent() } }>
            </div>
        );
    }
};
