import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class BySubBreedParameters extends Component {
    static displayName = BySubBreedParameters.name;

    render() {
        return (
            <div class="endpoint-container">
                <h2>Browse By Sub-breed</h2>
                <div class="parameters">
                    <NavLink to="/by-sub-breed/listSubBreeds">List Sub-breeds</NavLink>
                    <NavLink to="/by-sub-breed/listImages">List Images</NavLink>
                    <NavLink to="/by-sub-breed/image">Image</NavLink>
                    <NavLink to="/by-sub-breed/images">Images</NavLink>
                </div>
                <div class="client">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
