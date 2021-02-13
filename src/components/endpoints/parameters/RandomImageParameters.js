import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class RandomImageParameters extends Component {
    static displayName = RandomImageParameters.name;

    render() {
        return (
            <div class="endpoint-container">
                <h2>Show random images</h2>
                <div class="parameters">
                    <NavLink to="/random/image">Show a random image</NavLink>
                    <NavLink to="/random/images">Show random images</NavLink>
                </div>
                <div class="client">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
