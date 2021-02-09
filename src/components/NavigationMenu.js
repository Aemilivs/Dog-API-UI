import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DogLogo from '../svgs/Dog.svg';

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
      <div class="bar">
        <img src={DogLogo} alt="Dog Logo" width="150" />
        <div class="endpoints">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/by-breed">Search by breed</NavLink>
          <NavLink to="/by-sub-breed">Search by sub-breed</NavLink>
          <NavLink to="/list-all-breeds">List all breeds</NavLink>
          <NavLink to="/random">Fetch random image</NavLink>
        </div>
      </div>
    );
  }
}
