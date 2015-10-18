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
 */
export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <LicenseContent />
    </GeneralPageLayout>
);