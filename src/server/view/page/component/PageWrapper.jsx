import React from 'react';
import PageNavigation from './navigation/PageNavigation';
import SocialNavigation from './navigation/SocialNavigation';

/**
 * Server-level React Component
 * Page wrapper to wrap content
 *
 * Used to organize the basic page structure
 *
 * @class PageWrapper
 * @extends React.Component
 */
export default class PageWrapper extends React.Component {
    /**
     * Render method to generate the page layout
     * Expects children
     *
     * @for GeneralPageLayout
     * @method render
     */
    render() {
        return (
            <div className="wrap">
                {/* Masthead */}
                <div className="masthead">
                    <div className="masthead-bd" role="banner">
                        <div className="sleeve">
                            <div className="masthead-bd-logo">
                                <a href="/" title="Return to Main" className="hdg hdg_1">
                                    <h1 aria-label="Logo">&lt;adamRenny&nbsp;&#47;&gt;</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="masthead-nav" role="navigation">
                        <div className="mainNav">
                            <div id="topMainNav">
                                <PageNavigation />
                            </div>
                            <div id="topSocialNav">
                                <SocialNavigation />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Masthead */}

                {/* Main Content */}
                <div className="sleeve" id="mainContent"
                     role="main">
                    <div className="content">
                        { this.props.children }
                    </div>
                </div>
                {/* End Main Content */}
            </div>
        );
    }
};
