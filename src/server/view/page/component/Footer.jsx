'use strict';

import React from 'react';
import PageNavigation from './navigation/PageNavigation';
import SocialNavigation from './navigation/SocialNavigation';

export default class PageWrapper extends React.Component {
    render() {

        return (
            <div className="footer" id="footer">
                {/* Footer Navigation */}
                <div className="footer-nav" role="navigation">
                    <div className="mainNav">
                        <div id="bottomSocialNav">
                            <SocialNavigation />
                        </div>
                        <div id="bottomPageNav">
                            <PageNavigation />
                        </div>
                    </div>
                </div>
                {/* End Footer Navigation */}

                {/* Footer Copyright */}
                <div className="footer-bd"
                     id="copyright" role="contentinfo">
                    <div className="sleeve" id="footerContent">
                        <h1 className="visuallyHidden">Code and Site Copyright</h1>
                        <h2 className="visuallyHidden">Source Code License Notice</h2>
                        <p className="footer-bd-content">
                            <small>&copy; 2012 - 2014 <span itemprop="givenName">Adam</span> <span itemprop="familyName">Ranfelt</span>. All rights reserved.</small><br />
                            <small>All demo source code licensed under <a href="/" title="Source Code License">MIT</a> unless noted otherwise.</small>
                        </p>
                    </div>
                </div>
                {/* End Footer Copyright */}
            </div>
        );
    }
}