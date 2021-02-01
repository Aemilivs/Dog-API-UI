import React, { Component } from 'react';

export class ListAllBreeds extends Component {
  static displayName = ListAllBreeds.name;

  render() {
    return (
      <div class="endpoint">
        <h2>List all breeds</h2>
        <div class="client">
          <p>This page is a test of router properties.</p>
        </div>
      </div>
    );
  }
}
