import React, { Component } from 'react';
import { NavigationMenu } from './NavigationMenu';
import { Header } from "./Header";
import "./Layout.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div class="layout">
        <NavigationMenu />
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
