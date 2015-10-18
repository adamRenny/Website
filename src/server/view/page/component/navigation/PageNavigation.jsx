import React from 'react';

/**
 * Server-level React Component
 * Navigation list component
 *
 * State-less React component
 *
 * @class PageNavigation
 * @extends React.Component
 * @constructor
 */
export default () => (
    <div className="mainNav-pages">
        <div className="sleeve">
            <ul className="hList mix-hList_smallCentered hList_spaced">
                <li>
                    <a href="/" className="hdg hdg_2">About</a>
                </li>
            </ul>
        </div>
    </div>
);