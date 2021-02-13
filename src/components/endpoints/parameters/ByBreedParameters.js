import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class ByBreedParameters extends Component {
    static displayName = ByBreedParameters.name;

    render() {
        return (
            <div class="endpoint-container">
                <h2>Browse by a dog breed</h2>
                <div class="parameters">
                    <NavLink to="/by-breed/list">Show all images</NavLink>
                    <NavLink to="/by-breed/image">Show a random image</NavLink>
                    <NavLink to="/by-breed/images">Show random images</NavLink>
                </div>
                <div class="client">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
