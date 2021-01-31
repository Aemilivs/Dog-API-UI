import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class NavigationMenu extends Component {
  static displayName = NavigationMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div class="endpoints">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/browse-breed-list">Browse breed list</NavLink>
          </li>
          <li>
            <NavLink to="/by-breed">By breed</NavLink>
          </li>
          <li>
            <NavLink to="/by-sub-breed">By sub-breed</NavLink>
          </li>
          <li>
            <NavLink to="/list-all-breeds">List all breeds</NavLink>
          </li>
          <li>
            <NavLink to="/random">Random image</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
