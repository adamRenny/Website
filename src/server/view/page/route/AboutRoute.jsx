import React from 'react';
import GeneralPageLayout from '../layout/GeneralPageLayout';
import AboutContent from '../content/AboutContent';

/**
 * Server-level React Component
 * About Route
 *
 * State-less React component
 *
 * @class AboutRoute
 * @extends React.Component
 * @constructor
 * @param {object} options
 * @param {Page} [options.page] Page to render with
 */
export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <AboutContent />
    </GeneralPageLayout>
);