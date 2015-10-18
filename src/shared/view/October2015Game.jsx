import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Server-level React Component
 * BSD-3 License
 *
 * State-less React component
 *
 * @class LicenseContent
 * @extends React.Component
 * @constructor
 */
export default class October2015Game extends React.Component {
    componentDidMount() {
        console.log('test - its mounted~');
        this.props.game.attach(
            ReactDOM.findDOMNode(this)
        );
    }

    render() {
        return (
            <div id="game-102015">
            </div>
        );
    }
};
