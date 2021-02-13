import React, { Component } from 'react';

export class Default extends Component {
    static displayName = Default.name;

    render() {
        return (
            <div>
                <h3>Please select parameter of the endpoint to use.</h3>
            </div>
        );
    }
}