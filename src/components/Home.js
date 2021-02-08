import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>
          <p>This application is a proof of knowledge for the subject Web Design and Development.</p>
          <p>The projects demonstrates a UI client which was designed as a visual representation of a public API service called <a href="https://dog.ceo/dog-api/">Dog API</a>.</p>
          <p>This API service represents a big collection of open source dog pictures and has a few endpoints to search for an image using different parameters.</p>
          <span>
            This UI client was built using the following technologies:
            <ul>
              <li><a href="https://reactjs.org">React</a></li>
              <li>CSS3 Grid</li>
              <li>CSS3 Flex</li>
              <li>Transitions</li>
              <li>SVG</li>
            </ul>
          </span>
        </div>
        </div>
    );
  }
}
