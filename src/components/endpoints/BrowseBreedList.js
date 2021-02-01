import React, { Component } from 'react';

export class BrowseBreedList extends Component {
  static displayName = BrowseBreedList.name;

  render() {
    return (
      <div class="endpoint">
        <h2>Browse Breeds</h2>
        <div class="client">
          <p>This is a browser of breeds.</p>
        </div>
      </div>
    );
  }
}
