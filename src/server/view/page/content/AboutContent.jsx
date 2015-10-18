import React from 'react';
import config from '../../../config';

import assetService from '../../../module/assets/service';

/**
 * Server-level React Component
 * About Content
 * Includes microdata information
 *
 * State-less React component
 *
 * @class AboutContent
 * @extends React.Component
 * @constructor
 */
export default () => (
    <div itemType="http://schema.org/Person" itemScope itemRef="footerContent"
         role="article">
        {/* Content Heading */}
        <div className="content-block">
            <div className="media media_vCenter">
                <div className="media-img">
                    <img src={ assetService.buildURI('media/img/8bit.png') } alt="8-bit Profile" />
                </div>
                <div className="media-bd">
                    <h2 className="hdg hdg_3">
                        About adam<span itemProp="alternateName">Renny</span>
                    </h2>
                </div>
            </div>
        </div>

        {/* Description List */}
        <div className="content-block">
            <ul className="content-block-list">
                <li title="Currently not seeking other opportunities">
                    Web Client-Side <span itemProp="jobTitle">Software Engineer</span>
                </li>
                <li>Specialist in JavaScript and Computer Graphics</li>
                <li>Avid Gamer:&nbsp;
                    <a href="http://gamefaqs.com"
                       title="Greatest Video Game Resource"
                       target="_blank">Video</a>,&nbsp;
                    <a href={ config.get('/urls/social/deckbox') }
                       title="Magic, the Gathering"
                       target="_blank">Card</a>, and Board
                </li>
                <li>Mythology Enthusiast</li>
                <li>Loving Husband</li>
                <li>Proud <span itemProp="homeLocation">Minnesota</span>n</li>
                <li>Practicing Karateka of&nbsp;
                    <a href={ config.get('/urls/affiliations/karate') }
                       title="South Metro Ancient Authentic Arts"
                       target="_blank">Shorinkan Shorin Ryu Karate</a>
                </li>
                <li>Practicing Budoka of Katori Shinto Ryu Kenjutsu</li>
                <li>Former Budoka of&nbsp;
                    <a href={ config.get('/urls/affiliations/toyama') }
                       title="Minnesota Toyama Ryu Battojutsu"
                       target="_blank">Toyama Ryu Battojutsu</a>
                </li>
                <li>
                    Alumni of&nbsp;
                    <a href={ config.get('/urls/affiliations/umn') }
                       title="University of Minnesota, Twin Cities"
                       target="_blank">
                        <span itemProp="alumniOf">University of Minnesota</span>
                    </a>
                </li>
                <li>Not Currently Seeking Opportunities</li>
            </ul>
        </div>
    </div>
);