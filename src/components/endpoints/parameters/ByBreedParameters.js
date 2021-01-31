import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class ByBreedParameters extends Component {
    static displayName = ByBreedParameters.name;

    render() {
        return (
            <div>
                <div class="parameters">
                    <ul>
                        <li>
                            <NavLink tag={Link} to="/by-breed/list">List</NavLink>
                        </li>
                        <li>
                            <NavLink tag={Link} to="/by-breed/image">Image</NavLink>
                        </li>
                        <li>
                            <NavLink tag={Link} to="/by-breed/images">Images</NavLink>
                        </li>
                    </ul>
                </div>
                <div class="client">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
