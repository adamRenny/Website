'use strict';

import React from 'react';
import GeneralPageLayout from '../layout/GeneralPageLayout';
import LicenseContent from '../content/LicenseContent';

export default ({ page }) => (
    <GeneralPageLayout page={ page }>
        <LicenseContent />
    </GeneralPageLayout>
);