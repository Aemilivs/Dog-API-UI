import React, { Component } from 'react';

export class ByName extends Component {
  static displayName = ByName.name;

  render() {
    return (
      <div class="parameter">
        <h1>By name</h1>
        <p>Make a call with name parameter.</p>
      </div>
    );
  }
}
