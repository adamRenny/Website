import React from 'react';
import GeneralPageLayout from '../../layout/GeneralPageLayout';

/**
 * Server-level React Component
 * Not Found (4xx) Error Route
 *
 * State-less React component
 *
 * @class NotFoundRoute
 * @extends React.Component
 * @constructor
 * @param {object} options
 * @param {Page} [options.page] Page to render with
 */
export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <h1 className="hdg hdg_3">Content Not Found</h1>
    </GeneralPageLayout>
);