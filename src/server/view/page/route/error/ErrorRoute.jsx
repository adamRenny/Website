import React from 'react';
import GeneralPageLayout from '../../layout/GeneralPageLayout';

/**
 * Server-level React Component
 * General Error Route
 *
 * State-less React component
 *
 * @class ErrorRoute
 * @extends React.Component
 * @constructor
 * @param {object} options
 * @param {Page} [options.page] Page to render with
 */
export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <h1 className="hdg hdg_3">Something went horribly, horribly wrong</h1>
    </GeneralPageLayout>
);