import React from 'react';
import GeneralPageLayout from '../layout/GeneralPageLayout';
import LicenseContent from '../content/LicenseContent';

/**
 * Server-level React Component
 * License Route
 *
 * State-less React component
 *
 * @class LicenseRoute
 * @extends React.Component
 * @constructor
 * @param {object} options
 * @param {Page} [options.page] Page to render with
 */
export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <LicenseContent />
    </GeneralPageLayout>
);