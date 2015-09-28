'use strict';

import React from 'react';

export default class PageWrapper extends React.Component {
    render() {

        return (
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
    }
}