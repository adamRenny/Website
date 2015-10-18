import React from 'react';
import GeneralPageLayout from '../layout/GeneralPageLayout';
import LabContent from '../content/LabContent';

/**
 * Server-level React Component
 * Lab Route
 *
 * State-less React component
 *
 * @class LabRoute
 * @extends React.Component
 * @constructor
 * @param {object} options
 * @param {Page} [options.page] Page to render with
 */
export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <LabContent />
    </GeneralPageLayout>
);