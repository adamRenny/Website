import React from 'react';
import GeneralPageLayout from '../../layout/GeneralPageLayout';

/**
 * Server-level React Component
 * Internal (5xx) Error Route
 *
 * State-less React component
 *
 * @class InternalErrorRoute
 * @extends React.Component
 * @constructor
 * @param {object} options
 * @param {Page} [options.page] Page to render with
 */
export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <h1 className="hdg hdg_3">An error occurred</h1>
    </GeneralPageLayout>
);