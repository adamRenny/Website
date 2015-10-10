'use strict';

import React from 'react';

import PageIcons from '../component/assets/PageIcons';
import SkipNavigation from '../component/navigation/SkipNavigation';
import PageWrapper from '../component/PageWrapper';
import Footer from '../component/Footer';

export default class GeneralPageLayout extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    
                    <meta name="description"
                          content="Adam Renny's development website, a testbed for experiments" />
                    <meta name="author"
                          content="Adam Ranfelt" />

                    <title>{ this.props.page.title }</title>

                    <meta name="robots" content="index,follow" />

                    <link rel="icon" href="favicon.ico"
                          sizes="16x16 32x32 48x48 64x64"
                          type="image/vnd.microsoft.icon" />

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

                    <meta name="viewport"
                          content="width=device-width, user-scalable=no" />

                    <link href="http://site.adamrenny.me/assets/styles/screen.css"
                          rel="stylesheet"
                          media="screen" />
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
                <body>
                    <PageIcons />

                    <SkipNavigation />

                    <PageWrapper>
                        { this.props.children }
                    </PageWrapper>

                    <Footer />

                    { this.props.page.scripts.map(function(sourcePath) {
                        return (
                            <script src={ sourcePath }></script>
                        );
                      })
                    }
                </body>
            </html>
        );
    }
};