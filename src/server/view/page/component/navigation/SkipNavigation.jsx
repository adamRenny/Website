import React from 'react';

/**
 * Server-level React Component
 * Skip Navigation (accessibility)
 *
 * State-less React component
 *
 * @class SkipNavigation
 * @extends React.Component
 */
export default () => (
    <div className="skipNav">
        <a href="#content" accessKey="H">Skip to Main Content</a>
        <a href="#topMainNav" accessKey="N">Skip to Main Navigation</a>
        <a href="#topSocialNav" accessKey="S">Skip to Social Navigation</a>
        <a href="#copyright" accessKey="L">Skip to Copyright</a>
    </div>
);