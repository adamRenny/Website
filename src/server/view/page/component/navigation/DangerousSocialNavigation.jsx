'use strict';

import React from 'react';

export default class SocialNavigation extends React.Component {
    getGithubMarkup() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="vecIco vecIco_github mix-vecIco_small">' +
               '    <use xlink:href="#logo-github" />' +
               '</svg>';
    }

    getLinkedInMarkup() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="vecIco vecIco_linkedin mix-vecIco_small">' +
               '    <use xlink:href="#logo-linkedin" />' +
               '</svg>';
    }

    getNPMMarkup() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="vecIco vecIco_npm mix-vecIco_small">' +
               '    <use xlink:href="#logo-npm" />' +
               '</svg>';
    }

    getTwitterMarkup() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="vecIco vecIco_twitter mix-vecIco_small">' +
               '    <use xlink:href="#logo-twitter" />' +
               '</svg>';
    }

    getCodePenMarkup() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="vecIco vecIco_codepen mix-vecIco_small">' +
               '    <use xlink:href="#logo-codepen" />' +
               '</svg>';
    }

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
                                <div dangerouslySetInnerHTML={ {__html: this.getGithubMarkup()} } />
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               title="Check out my LinkedIn"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">LinkedIn</span>
                                <div dangerouslySetInnerHTML={ {__html: this.getLinkedInMarkup()} } />
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               title="Try my NPM packages"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">npm</span>
                                <div dangerouslySetInnerHTML={ {__html: this.getNPMMarkup()} } />
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               title="Follow me on Twitter"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">Twitter</span>
                                <div dangerouslySetInnerHTML={ {__html: this.getTwitterMarkup()} } />
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               title="Check out my CodePens"
                               className="mainNav-social-ref"
                               target="_blank">
                                <span className="visuallyHidden">CodePen</span>
                                <div dangerouslySetInnerHTML={ {__html: this.getCodePenMarkup()} } />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}