'use strict';

import React from 'react';

export default class SkipNavigation extends React.Component {
    render() {

        return (
            <div className="skipNav">
                <a href="#content" accesskey="H">Skip to Main Content</a>
                <a href="#topMainNav" accesskey="N">Skip to Main Navigation</a>
                <a href="#topSocialNav" accesskey="S">Skip to Social Navigation</a>
                <a href="#copyright" accesskey="L">Skip to Copyright</a>
            </div>
        );
    }
}