'use strict';

import React from 'react';
import GeneralPageLayout from '../layout/GeneralPageLayout';
import AboutContent from '../content/AboutContent';

export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <AboutContent />
    </GeneralPageLayout>
);