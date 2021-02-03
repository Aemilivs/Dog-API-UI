import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class RandomImageParameters extends Component {
    static displayName = RandomImageParameters.name;

    render() {
        return (
            <div class="endpoint">
                <h2>Random Image</h2>
                <div class="parameters">
                    <NavLink to="/random/image">Image</NavLink>
                    <NavLink to="/random/images">Images</NavLink>
                    <div class="client">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
