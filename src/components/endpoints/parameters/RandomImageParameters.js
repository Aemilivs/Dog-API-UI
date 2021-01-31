import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class RandomImageParameters extends Component {
    static displayName = RandomImageParameters.name;

    render() {
        return (
            <div>
                <div class="parameters">
                    <ul>
                        <li>
                            <NavLink tag={Link} to="/random/image">Image</NavLink>
                        </li>
                        <li>
                            <NavLink tag={Link} to="/random/images">Images</NavLink>
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
