'use strict';

import React from 'react';

export default class SocialNavigation extends React.Component {
    render() {

        return (
            <div className="mainNav-social">
                <div className="sleeve">
                    <ul className="hList mix-hList_smallCentered hList_spacedSm">
                        <li>
                            <a href="/"
                               title="Watch my Github repositories"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">Github</span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                     className="vecIco vecIco_github mix-vecIco_small">
                                    <use xlinkHref="#logo-github" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               title="Check out my LinkedIn"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                     className="vecIco vecIco_linkedin mix-vecIco_small">
                                    <use xlinkHref="#logo-linkedin" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               title="Try my NPM packages"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">npm</span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                     className="vecIco vecIco_npm mix-vecIco_small">
                                    <use xlinkHref="#logo-npm" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               title="Follow me on Twitter"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">Twitter</span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                     className="vecIco vecIco_twitter mix-vecIco_small">
                                    <use xlinkHref="#logo-twitter" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               title="Check out my CodePens"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">CodePen</span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                     className="vecIco vecIco_codepen mix-vecIco_small">
                                    <use xlinkHref="#logo-codepen" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}