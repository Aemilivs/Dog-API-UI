import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div class="endpoint">
        <h2>Home</h2>
        <div>
          <p>This application is a proof of knowledge for the subject Web Design and Development.</p>
          <p>It is a UI client for <a href="https://dog.ceo/dog-api/">Dog API</a>.</p>
          <span>
            It is built using <a href="https://reactjs.org/">React</a> and includes usage of:
        <ul>
              <li>CSS3 Grid</li>
              <li>CSS3 Flex</li>
              <li>Transitions</li>
              <li>SVG</li>
              <li>And more!</li>
            </ul>
          </span>
        </div>
      </div>
    );
  }
}
