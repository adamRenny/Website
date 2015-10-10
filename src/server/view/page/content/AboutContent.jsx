'use strict';

import React from 'react';

export default () => (
    <div itemType="http://schema.org/Person" itemScope itemRef="footerContent"
         role="article">
        <div className="content-block">
            <div className="media media_vCenter">
                <div className="media-img">
                    <img src="http://adamrenny.me/media/img/8bit.png" alt="8-bit Profile" />
                </div>
                <div className="media-bd">
                    <h2 className="hdg hdg_3">
                        About adam<span itemProp="alternateName">Renny</span>
                    </h2>
                </div>
            </div>
        </div>
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
                    <a href="#"
                       title="Magic, the Gathering"
                       target="_blank">Card</a>, and Board
                </li>
                <li>Mythology Enthusiast</li>
                <li>Loving Husband</li>
                <li>Proud <span itemProp="homeLocation">Minnesota</span>n</li>
                <li>Practicing Karateka of&nbsp;
                    <a href="#"
                       title="South Metro Ancient Authentic Arts"
                       target="_blank">Shorinkan Shorin Ryu Karate</a>
                </li>
                <li>Practicing Budoka of Katori Shinto Ryu Kenjutsu</li>
                <li>Former Budoka of&nbsp;
                    <a href="#"
                       title="Minnesota Toyama Ryu Battojutsu"
                       target="_blank">Toyama Ryu Battojutsu</a>
                </li>
                <li>
                    Alumni of&nbsp;
                    <a href="#"
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