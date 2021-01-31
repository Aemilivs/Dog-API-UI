import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <p>This is a proof of knowledge for the subject Web Design and Development.</p>
        <span>This application is a UI client for <a href="https://dog.ceo/dog-api/">Dog API</a>.</span>
        <span>
          It is built using React and includes usage of:
        </span>
        <ul>
          <li>CSS3 Grid</li>
          <li>CSS3 Flex</li>
          <li>Transitions</li>
          <li>SVG</li>
          <li>And more!</li>
        </ul>
      </div>
    );
  }
}
