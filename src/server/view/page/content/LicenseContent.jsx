import React from 'react';

/**
 * Server-level React Component
 * BSD-3 License
 *
 * State-less React component
 *
 * @class LicenseContent
 * @extends React.Component
 */
export default () => (
    <div role="article"
       className="article">
        <h1 className="hdg hdg_3">BSD 3-Clause</h1>
        <h2 className="hdg hdg_4">Copyright &copy; 2012-2015, Adam Ranfelt</h2>

        <small>All rights reserved.</small>

        <p>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</p>

        <ul>
            <li>Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</li>
            <li>Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</li>
            <li>Neither the name of the Adam Ranfelt nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</li>
        </ul>

        <p>
            <strong>This software is provided by the copyright holders and contributors "as is" and any express or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall Adam Ranfelt be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.</strong>
        </p>
    </div>
);