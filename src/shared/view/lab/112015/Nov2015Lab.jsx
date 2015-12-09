import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 * @class Nov2015Lab
 * @extends React.Component
 * @constructor
 */
export default class Nov2015Lab extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shouldApplyChildren: false
        };
    }

    componentDidMount() {
        this.setState({
            shouldApplyChildren: true
        });
    }

    render() {
        var children = null;
        if (this.state.shouldApplyChildren) {
            children = this.props.children;
        }

        return (
            <div id="lab-112015">
                { children }
            </div>
        );
    }
};
