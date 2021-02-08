import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class ByBreedParameters extends Component {
    static displayName = ByBreedParameters.name;

    render() {
        return (
            <div class="endpoint-container">
                <h2>Browse By Breed</h2>
                <div class="parameters">
                    <NavLink to="/by-breed/list">List</NavLink>
                    <NavLink to="/by-breed/image">Image</NavLink>
                    <NavLink to="/by-breed/images">Images</NavLink>
                </div>
                <div class="client">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
