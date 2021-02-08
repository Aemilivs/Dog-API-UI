import React, { Component } from 'react';
import DogLogo from '../../svgs/Dog.svg';

export class ListAllBreeds extends Component {
  static displayName = ListAllBreeds.name;

  render() {
    return (
      <div class="endpoint-container">
        <h2>List all breeds</h2>
        <div class="client">
          <p>This page is a test of router properties.</p>
          <img src={DogLogo} alt="Dog Logo" />
        </div>
      </div>
    );
  }
}
