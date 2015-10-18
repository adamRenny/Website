import React from 'react';

import PageIcons from '../component/assets/PageIcons';
import SkipNavigation from '../component/navigation/SkipNavigation';
import PageWrapper from '../component/PageWrapper';
import Footer from '../component/Footer';

import assetService from '../../../module/assets/service';

/**
 * Server-level React Component
 * Standard page layout structure
 *
 * Used to set up the markup
 * Expects a page property following the Page object
 *
 * @see Page
 *
 * @class GeneralPageLayout
 * @extends React.Component
 */
export default class GeneralPageLayout extends React.Component {
    /**
     * Render method to generate the page layout
     * Expects children
     *
     * @for GeneralPageLayout
     * @method render
     */
    render() {
        return (
            <html lang="en">
                {/* Page head */}
                <head>
                    {/* Charset */}
                    <meta charSet="utf-8" />
                    
                    {/* Basic Page Metadata */}
                    <meta name="description"
                          content="Adam Renny's development website, a testbed for experiments" />
                    <meta name="author"
                          content="Adam Ranfelt" />

                    <title>{ this.props.page.title }</title>

                    {/* Robots metadata */}
                    <meta name="robots" content="index,follow" />

                    {/* Favicon */}
                    <link rel="icon" href={ assetService.buildURI('media/favicon/favicon.ico') }
                          sizes="16x16 32x32 48x48 64x64"
                          type="image/vnd.microsoft.icon" />

                    {/* Facebook Properties */}
                    <meta property="og:title"
                          content="adamRenny" />
                    <meta property="og:type"
                          content="website" />
                    <meta property="og:description"
                          content="Adam Renny's personal development playground website" />
                    <meta property="og:image"
                          content="http://site.adamrenny.me/media/img/8bit.png" />
                    <meta property="og:url"
                          content="http://site.adamrenny.me/" />

                    {/* Mobile Viewport Properties */}
                    <meta name="viewport"
                          content="width=device-width, user-scalable=no" />

                    {/* Styles Properties */}
                    <link href={ assetService.buildURI('/style/screen.css') }
                          rel="stylesheet"
                          media="screen" />
                }
        {/*
                    <script>
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                        ga('create', 'UA-52339986-1', 'auto');
                        ga('send', 'pageview');
                    </script>
        */}
                </head>
                {/* End Page head */}

                {/* Page body */}
                <body>
                    <PageIcons />

                    <SkipNavigation />

                    <PageWrapper>
                        { this.props.children }
                    </PageWrapper>

                    <Footer />

                    {/* Scripts Render Location */}
                    { this.props.page.scripts.map(function(sourcePath) {
                        return (
                            <script src={ sourcePath }></script>
                        );
                      })
                    }
                    {/* End Scripts Render Location */}
                </body>
                {/* End Page body */}
            </html>
        );
    }
};