import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DogLogo from '../pictures/Dog.svg';

export class NavigationMenu extends Component {
  static displayName = NavigationMenu.name;

  render() {
    return (
      <div class="bar">
        <img src={DogLogo} alt="Dog Logo" />
        <div class="endpoints">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/list-all-breeds">List all breeds</NavLink>
          <NavLink to="/by-breed">Search by breed</NavLink>
          <NavLink to="/random">Show random images</NavLink>
        </div>
      </div>
    );
  }
}
